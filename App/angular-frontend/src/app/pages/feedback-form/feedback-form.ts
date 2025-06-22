import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

const SHEETDB_API_URL = 'https://sheetdb.io/api/v1/17t5w5az6pz4b';

interface Emoji {
  label: string;
  value: string;
}

@Component({
  selector: 'app-feedback-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './feedback-form.html',
  styleUrl: './feedback-form.css'
})
export class FeedbackFormComponent {
  feedbackForm: FormGroup;
  selectedEmoji: string = '';
  isSubmitting = false;

  emojis: Emoji[] = [
    { label: '😊', value: 'happy' },
    { label: '😤', value: 'frustrated' },
    { label: '😢', value: 'crying' },
  ];

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.feedbackForm = this.fb.group({
      emoji: ['', Validators.required],
      comment: ['', Validators.required],
      name: ['', Validators.required]
    });
  }

  selectEmoji(emojiValue: string): void {
    this.selectedEmoji = emojiValue;
    this.feedbackForm.patchValue({ emoji: emojiValue });
  }

  onSubmit(): void {
    if (this.feedbackForm.valid) {
      this.isSubmitting = true;
      const formData = this.feedbackForm.value;
      
      const payload = {
        data: [{
          emoji: formData.emoji,
          comment: formData.comment,
          name: formData.name,
          contacted: '',
          resolved: '',
          timestamp: new Date().toISOString(),
        }]
      };

      this.http.post(SHEETDB_API_URL, payload).subscribe({
        next: () => {
          alert('Feedback sent!');
          this.feedbackForm.reset();
          this.selectedEmoji = '';
          this.isSubmitting = false;
        },
        error: (error) => {
          alert('Error sending feedback.');
          this.isSubmitting = false;
          console.error('Error:', error);
        }
      });
    }
  }
}
