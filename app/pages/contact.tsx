'use client'

import { useState } from 'react';
import { DockDemo } from './dock';

export default function ContactForm() {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    
    // Construct Gmail URL with subject and message
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=vishwasvk35@gmail.com`;
    
    // Open Gmail in a new tab
    window.open(gmailUrl, '_blank');
    
    // Reset form after a short delay
    setTimeout(() => {
      setIsSending(false);
      setSubject('');
      setMessage('');
    }, 1000);
  };

  return (
    <div className="grid py-12 px-4  min-h-screen items-center justify-center">
      <div className="mx-auto min-w-[26rem] border border-gray-800 rounded-xl shadow-2xl shadow-blue-900/20 bg-zinc-900 backdrop-blur-3xl hover:shadow-blue-900/40 transition-shadow duration-300">
        <div className="p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-white mb-1">Get in Touch</h2>
          <p className="text-sm text-gray-400 mb-6">Send me a message directly to my inbox</p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-4 py-2 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                placeholder="What's this about?"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="w-full px-4 py-2 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                placeholder="Your message here..."
                required
              />
            </div>
            
            <button
              type="submit"
              disabled={isSending}
              className={`w-full flex justify-center items-center py-3 px-4 bg-white text-black rounded-lg font-medium text-sm hover:bg-gray-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black transition-all duration-200 ${
                isSending ? "opacity-80 cursor-not-allowed" : ""
              }`}
            >
              {isSending ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Preparing email...
                </>
              ) : (
                <>
                  <svg className="mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Send Message
                </>
              )}
            </button>
          </form>
          
          <p className="text-xs text-center text-gray-500 mt-4">
            You&apos;ll be redirected to Gmail to send your message
          </p>
        </div>
      </div>

      <DockDemo />
    </div>
  );
}