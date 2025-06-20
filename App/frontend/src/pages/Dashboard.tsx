import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SHEETDB_API_URL = 'https://sheetdb.io/api/v1/17t5w5az6pz4b'; // SheetDB API URL

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
  happy: '😃',
  neutral: '😐',
  sad: '😞',
};

export default function Dashboard() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const res = await axios.get(`${SHEETDB_API_URL}`);
        setFeedbacks(res.data);
      } catch (error) {
        alert('Error fetching feedbacks.');
      } finally {
        setLoading(false);
      }
    };
    fetchFeedbacks();
  }, []);

  const grouped = feedbacks.reduce((acc, fb) => {
    acc[fb.emoji] = acc[fb.emoji] || [];
    acc[fb.emoji].push(fb);
    return acc;
  }, {} as Record<string, Feedback[]>);

  if (loading) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Feedback Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.keys(emojiLabels).map((emojiKey) => (
          <div key={emojiKey} className="bg-white rounded shadow p-4">
            <h3 className="text-xl font-bold mb-2 text-center">{emojiLabels[emojiKey]}</h3>
            {grouped[emojiKey]?.length ? (
              grouped[emojiKey].map((fb, idx) => (
                <div key={idx} className="border-b py-2">
                  <div className="text-sm text-gray-700 mb-1">{fb.comment}</div>
                  <div className="text-xs text-gray-500 mb-1">By: {fb.name}</div>
                  <div className="flex items-center space-x-2 mb-1">
                    <label className="flex items-center text-xs">
                      <input type="checkbox" checked={fb.contacted === 'yes'} readOnly className="mr-1" /> Contacted
                    </label>
                    <label className="flex items-center text-xs">
                      <input type="checkbox" checked={fb.resolved === 'yes'} readOnly className="mr-1" /> Resolved
                    </label>
                  </div>
                  <div className="text-xs text-gray-400">{new Date(fb.timestamp).toLocaleString()}</div>
                </div>
              ))
            ) : (
              <div className="text-gray-400 text-center">No feedback yet.</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
} 