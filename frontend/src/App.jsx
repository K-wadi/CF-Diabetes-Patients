import { useState } from 'react';

export default function App() {
  const [message, setMessage] = useState("Welcome to Lightweight Health App!");

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <h1 className="text-3xl font-bold text-blue-500">{message}</h1>
    </div>
  );
}
