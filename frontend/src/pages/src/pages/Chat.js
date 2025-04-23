// src/pages/Chat.js
import React, { useState } from 'react';

export default function Chat() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Welcome! Ask me anything about your GEICO account.' }
  ]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages(msgs => [...msgs, { from: 'user', text: input }]);
    const userText = input;
    setInput('');

    try {
      const resp = await fetch('http://18.204.75.139:3000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userText })
      });
      const { reply } = await resp.json();
      setMessages(msgs => [...msgs, { from: 'bot', text: reply }]);
    } catch {
      setMessages(msgs => [
        ...msgs,
        { from: 'bot', text: '💥 Error talking to server.' }
      ]);
    }
  };

  return (
    <div className="max-w-xl mx-auto my-8 p-4 bg-white rounded-lg shadow-lg flex flex-col">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        GEICO Cloud Assistant
      </h2>
      <div className="flex-1 space-y-3 mb-4 overflow-y-auto">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`p-2 rounded-lg max-w-[80%] ${
              m.from === 'bot'
                ? 'bg-gray-100 text-gray-800 self-start'
                : 'bg-blue-200 text-blue-900 self-end'
            }`}
          >
            {m.text}
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage} className="flex gap-2">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type your question..."
          className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#cdedf6]"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-[#cdedf6] text-gray-800 rounded-lg hover:bg-[#b5d4c0] transition"
        >
          Send
        </button>
      </form>
    </div>
  );
}
