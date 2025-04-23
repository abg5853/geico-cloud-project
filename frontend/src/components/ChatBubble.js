import React, { useState, useEffect, useRef } from 'react';

export default function ChatBubble() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! How can I help you with your GEICO account?' }
  ]);
  const [draft, setDraft] = useState('');
  const messagesEndRef = useRef(null);

  // Scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const send = async () => {
    if (!draft.trim()) return;
    setMessages(m => [...m, { from: 'user', text: draft }]);
    setDraft('');
    try {
      const res = await fetch('http://18.204.75.139:3000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: draft })
      });
      const { reply } = await res.json();
      setMessages(m => [...m, { from: 'bot', text: reply }]);
    } catch (err) {
      setMessages(m => [...m, { from: 'bot', text: 'Sorry, something went wrong.' }]);
    }
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(o => !o)}
        className="fixed bottom-6 right-6 bg-[#cdedf6] p-4 rounded-full shadow-lg hover:bg-[#b2e0ee] transition"
        aria-label="Chat with us"
      >
        💬
      </button>

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-20 right-6 w-80 max-h-96 bg-white shadow-xl rounded-lg flex flex-col overflow-hidden">
          <div className="bg-[#cdedf6] px-4 py-2 font-semibold">GEICO Assistant</div>
          <div className="flex-1 p-4 overflow-auto">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`mb-2 flex ${m.from==='bot'?'justify-start':'justify-end'}`}
              >
                <div
                  className={`px-3 py-2 rounded-lg max-w-xs ${
                    m.from==='bot'
                      ? 'bg-gray-100 text-gray-800'
                      : 'bg-[#cdedf6] text-gray-900'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="border-t px-2 py-1 flex">
            <input
              className="flex-1 px-2 py-1 border rounded-l-lg focus:outline-none"
              value={draft}
              onChange={e => setDraft(e.target.value)}
              placeholder="Type a message..."
              onKeyDown={e => e.key==='Enter' && send()}
            />
            <button
              onClick={send}
              className="bg-[#cdedf6] px-3 rounded-r-lg hover:bg-[#b2e0ee] transition"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
