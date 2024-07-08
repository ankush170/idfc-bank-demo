"use client"

import React, { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import { FaRobot, FaUser } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import RoboIcon from '@/components/RoboIcon';

interface Message {
  sender: 'bot' | 'user';
  content: string;
  fullyTyped: boolean;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [showInitialButtons, setShowInitialButtons] = useState(false);
  const [showFinalButtons, setShowFinalButtons] = useState(false);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  const router = useRouter();

  const initialMessages = [
    "Hey there! I see you're deliberating rebalancing your portfolio. We have recommended you to fix your allocation and diversify holdings. What can I help you with?"
  ];

  const typeMessage = (message: Message): Promise<void> => {
    return new Promise((resolve) => {
      let i = 0;
      const interval = setInterval(() => {
        i++;
        if (i <= message.content.length) {
          setMessages(prev => 
            prev.map((msg, index) => 
              index === prev.length - 1 ? { ...msg, content: message.content.slice(0, i) } : msg
            )
          );
        } else {
          clearInterval(interval);
          setMessages(prev => 
            prev.map((msg, index) => 
              index === prev.length - 1 ? { ...msg, fullyTyped: true } : msg
            )
          );
          resolve();
        }
      }, 20);
    });
  };

  const typeInitialMessages = async () => {
    for (const msg of initialMessages) {
      setMessages(prev => [...prev, { sender: 'bot', content: '', fullyTyped: false }]);
      await typeMessage({ sender: 'bot', content: msg, fullyTyped: false });
    }
    setShowInitialButtons(true);
  };

  useEffect(() => {
    typeInitialMessages();
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleButtonClick = async (message: string) => {
    // Add user message immediately without typing effect
    setMessages(prev => [...prev, { sender: 'user', content: message, fullyTyped: true }]);
    setShowInitialButtons(false);

    let botResponse = '';
    if (message === 'Why do I need to rebalance?') {
      botResponse = 'Rebalancing helps to maintain your desired level of asset allocation. It ensures that your portfolio does not become too risky or too conservative.';
    } else if (message === 'Why do I need to fix my allocation?') {
      botResponse = 'Your allocation in small cap funds is lower than suggested based on your risk profile. Small cap investments are riskier but will provide opportunity for high returns over the long term by investing in small, rapidly growing companies that may become future market leaders.';
    } else if (message === 'Why do I need to diversify?') {
      botResponse = 'Diversifying your portfolio helps spread out risk. By investing in a variety of assets, you can protect your portfolio against the volatility of any single asset.';
    }

    // Add bot message with typing effect
    setMessages(prev => [...prev, { sender: 'bot', content: '', fullyTyped: false }]);
    await typeMessage({ sender: 'bot', content: botResponse, fullyTyped: false });
    
    setShowFinalButtons(true);
  };

  const handleYesClick = () => {
    router.push('/fix-portfolio');
  };

  const handleNoClick = async () => {
    setShowFinalButtons(false);
    setMessages(prev => [...prev, { sender: 'bot', content: '', fullyTyped: false }]);
    await typeMessage({ sender: 'bot', content: 'What else can I help you with?', fullyTyped: false });
    setShowInitialButtons(true);
  };

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col p-4">
      <div className="flex-1 overflow-y-auto mb-4 space-y-4">
        <div className="flex mb-4">
          <RoboIcon message="I am j.A.R.V.I.S, your personal assistant" />
        </div>
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.sender === 'bot' ? 'justify-start' : 'justify-end'}`}>
            {msg.sender === 'bot' && <FaRobot className="mr-2 mt-1 text-blue-500" />}
            <div className={`max-w-[70%] ${msg.sender === 'user' ? 'bg-red-500 text-white p-2 rounded-lg' : 'bg-gray-100 p-2 rounded-lg'}`}>
              <ReactMarkdown>{msg.content}</ReactMarkdown>
              {msg.sender === 'bot' && !msg.fullyTyped && <span className="inline-block w-1 h-4 bg-black animate-blink" />}
            </div>
            {msg.sender === 'user' && <FaUser className="ml-2 mt-1 text-green-500" />}
          </div>
        ))}
        {showInitialButtons && (
          <div className="flex flex-col space-y-2 mb-4 items-start pl-8"> {/* Added pl-8 for left padding */}
            {['Why do I need to rebalance?', 'Why do I need to fix my allocation?', 'Why do I need to diversify?'].map((text, index) => (
              <button
                key={index}
                onClick={() => handleButtonClick(text)}
                className="p-1 rounded bg-white text-red-500 border border-red-500 text-sm" // Made buttons smaller
              >
                {text}
              </button>
            ))}
          </div>
        )}
        {showFinalButtons && (
          <div className="flex flex-col space-y-2 mb-4 items-start pl-8"> {/* Added pl-8 for left padding */}
            <button
              onClick={handleYesClick}
              className="p-1 rounded bg-red-500 text-white text-sm" // Made button smaller
            >
              Yes, fix my portfolio
            </button>
            <button
              onClick={handleNoClick}
              className="p-1 rounded bg-white text-red-500 border border-red-500 text-sm" // Made button smaller
            >
              No, I have more questions
            </button>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
}