import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

const SHEETDB_API_URL = 'https://sheetdb.io/api/v1/17t5w5az6pz4b';

interface Feedback {
  id?: string;
  emoji: string;
  comment: string;
  name: string;
  contacted: string;
  resolved: string;
  timestamp: string;
}

const emojiLabels: Record<string, string> = {
  happy: '😊',
  frustrated: '😤',
  crying: '😢',
};

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent implements OnInit {
  feedbacks: Feedback[] = [];
  loading = true;
  groupedFeedbacks: Record<string, Feedback[]> = {};

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchFeedbacks();
  }

  fetchFeedbacks(): void {
    this.http.get<Feedback[]>(SHEETDB_API_URL).subscribe({
      next: (data) => {
        this.feedbacks = data;
        this.groupFeedbacks();
        this.loading = false;
      },
      error: (error) => {
        alert('Error fetching feedbacks.');
        this.loading = false;
        console.error('Error:', error);
      }
    });
  }

  groupFeedbacks(): void {
    this.groupedFeedbacks = this.feedbacks.reduce((acc, fb) => {
      acc[fb.emoji] = acc[fb.emoji] || [];
      acc[fb.emoji].push(fb);
      return acc;
    }, {} as Record<string, Feedback[]>);
  }

  getEmojiLabel(emojiKey: string): string {
    return emojiLabels[emojiKey] || emojiKey;
  }
}
