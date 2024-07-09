"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaRobot, FaUser } from "react-icons/fa";
import { useRouter } from "next/navigation";
import HeaderChat from "@/components/HeaderChat";

interface Message {
  sender: "bot" | "user" | "button";
  content: string;
  fullyTyped: boolean;
  options?: string[];
}

export default function SimpleChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState("");
  const [currentStep, setCurrentStep] = useState(0);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  const router = useRouter();

  const conversationFlow: Message[] = [
    {
      sender: "bot",
      content: "Which of the following life goals would you like to plan for?",
      fullyTyped: false,
    },
    {
        sender: "bot",
        content: "",
        fullyTyped: true,
    },
    {
      sender: "button",
      content: "",
      options: [
        "Retirement planning",
        "Children's education",
        "Children's weddings",
        "Medical expenses",
        "Travel budgets",
        "Buying Real Estate",
      ],
      fullyTyped: true,
    },
    {
        sender: "user",
        content: "",
        fullyTyped: true,
    },
    {
      sender: "bot",
      content: "Which year do you wish to retire at?",
      fullyTyped: false,
    },
    { sender: "user", content: "", fullyTyped: true },
    {
      sender: "bot",
      content: "Understood. Let me help you think through your retirement plan in a methodical way. I understand from the banking info that your current age is 35. Additionally your current monthly expenditure is about 1.2 lakh. Assuming an inflation rate of 6% per annum this would mean 4 lakh rs per month after 23 years at the time of your retirement. Furthermore, assuming a conservative post retirement portfolio return of only 8% per annum this would require a Corpus of 6 crore rupees for your retirement. Now in order to achieve 6 crore rupees of Corpus at the age of 58 let us see how you need to invest starting today to reach this goal. I understand you already have a Corpus of 1.2 crores as of today. Assuming a blended rate of return of about 12% per annum for next 23 years, the current Corpus itself will grow to 2.5 crores. Hence you need to additionally create 3.5 crores of Corpus through new sip's. At the blended rate of return of 12% per annum this would require you to create an SIP investment of 70k rupees per month to reach this goal. You may follow the recommended asset allocation for this 70k rupees investment per month. Wish you all the best for your retirement plan! If you wish I can help you execute this SIP as per your recommended asset allocation. Do you wish to execute it now?",
      fullyTyped: false,
    },
    { sender: "user", content: "", fullyTyped: true },
    {
      sender: "bot",
      content: "Is there anything else I can help you with?",
      fullyTyped: false,
    },
    { sender: "user", content: "", fullyTyped: true },
    {
      sender: "bot",
      content: "Alright! Navigating you back to the Home Screen...",
      fullyTyped: false,
    },
  ];

  useEffect(() => {
    if (currentStep < conversationFlow.length) {
      setTimeout(() => {
        handleNextStep();
      }, 1000);
    }
  }, [currentStep]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "instant" });
  }, [messages]);

  const handleNextStep = async () => {
    if (currentStep >= conversationFlow.length) {
      router.push("/");
      return;
    }

    const currentMessage = conversationFlow[currentStep];

    if (currentMessage.sender === "bot") {
      setMessages((prev) => [...prev, { ...currentMessage, content: "" }]);
      await typeMessage(currentMessage);
      if (currentStep === conversationFlow.length - 1) {
        setTimeout(() => {
          router.push("/");
        }, 2000);
      } else {
        setCurrentStep((prev) => prev + 1);
      }
    } else if (currentMessage.sender === "button") {
      setMessages((prev) => [...prev, currentMessage]);
      setCurrentStep((prev) => prev + 1);
    } else if (currentMessage.sender === "user") {
      return;
    }
  };

  const typeMessage = (message: Message): Promise<void> => {
    return new Promise((resolve) => {
      let i = 0;
      const interval = setInterval(() => {
        i++;
        if (i <= message.content.length) {
          setMessages((prev) =>
            prev.map((msg, index) =>
              index === prev.length - 1
                ? { ...msg, content: message.content.slice(0, i) }
                : msg
            )
          );
        } else {
          clearInterval(interval);
          setMessages((prev) =>
            prev.map((msg, index) =>
              index === prev.length - 1 ? { ...msg, fullyTyped: true } : msg
            )
          );
          resolve();
        }
      }, 40);
    });
  };

  const handleUserInput = (input: string) => {
    setMessages((prev) => [
      ...prev,
      { sender: "user", content: input, fullyTyped: true },
    ]);
    setUserInput("");
    setCurrentStep((prev) => prev + 1);
  };

  const handleButtonClick = (option: string) => {
    handleUserInput(option);
  };

  return (
    <div className="fixed inset-0 flex flex-col">
      <HeaderChat />
      <div className="flex-1 bg-white flex flex-col p-4 overflow-hidden">
        <div className="flex-1 overflow-y-auto mb-16 space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.sender === "bot" || msg.sender === "button"
                  ? "justify-start"
                  : "justify-end"
              }`}
            >
              {msg.sender === "bot" && (
                <FaRobot className="mr-2 mt-1 text-blue-500" />
              )}
              {msg.sender === "button" && (
                <div className="flex flex-col space-y-2 max-w-[70%]">
                  {msg.options!.map((option, i) => (
                    <button
                      key={i}
                      onClick={() => handleButtonClick(option)}
                      className="p-2 ml-5 rounded-xl bg-white text-black border border-gray-300 hover:bg-[#EF5350] hover:text-white text-left w-auto"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
              {(msg.sender === "bot" || msg.sender === "user") && (
                <div
                  className={`max-w-[70%] ${
                    msg.sender === "user"
                      ? "bg-[#EF5350] text-white p-2 rounded-xl"
                      : "bg-gray-100 p-2 rounded-xl"
                  }`}
                >
                  {msg.content}
                  {msg.sender === "bot" && !msg.fullyTyped && (
                    <span className="inline-block w-1 h-4 bg-black animate-blink" />
                  )}
                </div>
              )}
              {msg.sender === "user" && (
                <FaUser className="ml-2 mt-1 text-green-500" />
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleUserInput(userInput)}
            className="w-full p-2 border rounded"
            placeholder="Type your message..."
          />
        </div>
      </div>
    </div>
  );
}