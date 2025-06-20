import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const SHEETDB_API_URL = 'https://sheetdb.io/api/v1/17t5w5az6pz4b'; // SheetDB API URL

const emojis = [
  { label: '😊', value: 'happy' },
  { label: '😤', value: 'frustrated' },
  { label: '😢', value: 'crying' },
];

type FeedbackFormInputs = {
  emoji: string;
  comment: string;
  name: string;
};

export default function FeedbackForm() {
  const [selectedEmoji, setSelectedEmoji] = useState<string>('');
  const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful }, setValue } = useForm<FeedbackFormInputs>();

  const handleEmojiClick = (emojiValue: string) => {
    setSelectedEmoji(emojiValue);
    setValue('emoji', emojiValue);
  };

  const onSubmit = async (data: FeedbackFormInputs) => {
    try {
      await axios.post(SHEETDB_API_URL, {
        data: [{
          emoji: data.emoji,
          comment: data.comment,
          name: data.name,
          contacted: '',
          resolved: '',
          timestamp: new Date().toISOString(),
        }],
      });
      reset();
      setSelectedEmoji('');
      alert('Feedback sent!');
    } catch (error) {
      alert('Error sending feedback.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">How do you feel?</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-center mb-4 space-x-4">
          {emojis.map((emoji) => (
            <button
              key={emoji.value}
              type="button"
              onClick={() => handleEmojiClick(emoji.value)}
              className={`text-4xl p-2 rounded-lg transition-all duration-200 transform hover:scale-110 ${
                selectedEmoji === emoji.value 
                  ? 'bg-blue-100 border-2 border-blue-500 scale-110' 
                  : 'hover:bg-gray-100'
              }`}
            >
              {emoji.label}
            </button>
          ))}
        </div>
        {errors.emoji && <p className="text-red-500 text-sm mb-2 text-center">Please select an emoji.</p>}
        <textarea
          {...register('comment', { required: true })}
          placeholder="Your comment"
          className="w-full p-2 border rounded mb-2"
        />
        {errors.comment && <p className="text-red-500 text-sm mb-2">Comment is required.</p>}
        <input
          {...register('name', { required: true })}
          placeholder="Your name or company"
          className="w-full p-2 border rounded mb-2"
        />
        {errors.name && <p className="text-red-500 text-sm mb-2">Name is required.</p>}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Submit
        </button>
        {isSubmitSuccessful && <p className="text-green-500 text-center mt-2">Thank you for your feedback!</p>}
      </form>
    </div>
  );
} 