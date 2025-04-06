"use client";

import { useState } from 'react';
import { FaTimes, FaRobot, FaPaperPlane } from 'react-icons/fa';

interface Message {
  id: number;
  text: string;
  sender: 'bot' | 'user';
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hey there, creative soul! 👋 I'm your AI assistant. What kind of brilliant project are you looking to build today?",
      sender: 'bot',
    },
  ]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (!input.trim()) return;

    // Add user message
    const newUserMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: 'user',
    };
    
    setMessages([...messages, newUserMessage]);
    setInput('');

    // Simulate bot response after a short delay
    setTimeout(() => {
      let botResponse: string;
      
      // Simple response logic based on keywords
      const lowercaseInput = input.toLowerCase();
      if (lowercaseInput.includes('portfolio') || lowercaseInput.includes('website')) {
        botResponse = "I'd love to help with your portfolio! Our Creator Archetype Engine can help shape your unique creative identity. Would you like to book a creative session to discuss it further?";
      } else if (lowercaseInput.includes('brand') || lowercaseInput.includes('identity')) {
        botResponse = "Building a strong brand is essential for creative professionals! Our AI Media Generator can help create visuals and content that reflect your unique style. When would be a good time to chat about your brand vision?";
      } else if (lowercaseInput.includes('book') || lowercaseInput.includes('schedule') || lowercaseInput.includes('appointment')) {
        botResponse = "Great! You can schedule a creative session using our Calendly link. Would you like me to take you there now?";
      } else {
        botResponse = "That sounds like an exciting creative endeavor! I'd love to hear more about your vision. Would you like to schedule a quick call to discuss how we can bring your ideas to life?";
      }
      
      const newBotMessage: Message = {
        id: messages.length + 2,
        text: botResponse,
        sender: 'bot',
      };
      
      setMessages(prevMessages => [...prevMessages, newBotMessage]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all z-50"
          aria-label="Open chat"
        >
          <FaRobot className="text-2xl" />
        </button>
      )}

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 sm:w-96 h-[500px] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50 border border-gray-200 dark:border-gray-700">
          {/* Chat header */}
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white p-4 flex justify-between items-center">
            <div className="flex items-center">
              <FaRobot className="text-xl mr-2" />
              <h3 className="font-bold">Creative Assistant</h3>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition-colors"
              aria-label="Close chat"
            >
              <FaTimes />
            </button>
          </div>
          
          {/* Chat messages */}
          <div className="flex-1 p-4 overflow-y-auto flex flex-col space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`max-w-[80%] p-3 rounded-xl ${
                  message.sender === 'bot'
                    ? 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 self-start rounded-bl-none'
                    : 'bg-primary-600 text-white self-end rounded-br-none'
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>
          
          {/* Chat input */}
          <div className="border-t border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-800">
            <div className="flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 border border-gray-300 dark:border-gray-600 rounded-l-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
              />
              <button
                onClick={handleSendMessage}
                className="bg-primary-600 hover:bg-primary-700 text-white p-2 rounded-r-lg"
                aria-label="Send message"
              >
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
