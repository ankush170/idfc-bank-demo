"use client";

import React, { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import { useRouter } from "next/navigation";
import HeaderChat from "@/components/HeaderChat";
import PieChartDisplay from "@/components/PieChartDisplay";
import ImageDisplay from "@/components/ImageDisplay";
import LoadingScreen from "@/components/LoadingScreen";

interface Message {
  sender: "bot" | "user" | "button" | "pieChart" | "image" | "slider";
  content: string;
  fullyTyped: boolean;
  options?: string[];
  chartData?: { name: string; value: number }[];
  imageSrc?: string;
  sliderMax?: number;
  timestamp?: Date;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState("");
  const [currentStep, setCurrentStep] = useState(0);
  const [showLoading, setShowLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");
  const [sliderValue, setSliderValue] = useState(0);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  const router = useRouter();

  const conversationFlow: Message[] = [
    {
      sender: "bot",
      content:
        "Hey there! I see you'd like my help fixing your portfolio. Here's your current investment split -",
      fullyTyped: false,
      timestamp: new Date(),
    },
    {
      sender: "bot",
      content: "",
      fullyTyped: true,
    },
    {
      sender: "pieChart",
      content: "",
      chartData: [
        { name: "Stocks", value: 25 },
        { name: "Funds", value: 40 },
        { name: "Cash", value: 35 },
      ],
      fullyTyped: true,
    },
    {
      sender: "bot",
      content:
        "I have analyzed your holdings and here is what I suggest you change.",
      fullyTyped: false,
      timestamp: new Date(),
    },
    {
      sender: "button",
      content: "",
      options: [
        "Excess holdings in cash",
        "Sectoral and market cap concentration in mutual funds holdings",
        "Underperforming funds",
      ],
      fullyTyped: true,
    },
    {
      sender: "bot",
      content: "What would you like me to fix first?",
      fullyTyped: false,
      timestamp: new Date(),
    },
    { sender: "user", content: "", fullyTyped: true, timestamp: new Date() },
    {
      sender: "bot",
      content:
        "I have noticed you have Rs. 675,000 cash balance. You're losing out on returns by keeping this amount parked in a low yield savings account. Do you need to use this amount in the near term?",
      fullyTyped: false,
      timestamp: new Date(),
    },
    { sender: "user", content: "", fullyTyped: true, timestamp: new Date() },
    {
      sender: "bot",
      content:
        "Understood! I suggest moving these funds into a liquid fund for the near term to optimize returns. Here are 3 funds I suggest. Which one would you like to invest in?",
      fullyTyped: false,
      timestamp: new Date(),
    },
    {
      sender: "button",
      content: "",
      options: [
        "ICICI Prudential Liquid Fund- Growth",
        "SBI Liquid Fund- Growth",
        "Mirae Asset Liquid Fund- Growth",
      ],
      fullyTyped: true,
    },
    { sender: "user", content: "", fullyTyped: true, timestamp: new Date() },
    {
      sender: "bot",
      content: "Got it! How much would you like to invest?",
      fullyTyped: false,
      timestamp: new Date(),
    },
    { sender: "user", content: "", fullyTyped: true, timestamp: new Date() },
    { sender: "bot", content: "Loading...", fullyTyped: false },
    {
      sender: "bot",
      content:
        "I've invested Rs. 5,00,000 into ICICI Prudential Liquid Fund – Growth on your behalf. What would you like to handle next?",
      fullyTyped: false,
      timestamp: new Date(),
    },
    {
      sender: "button",
      content: "",
      options: [
        "Sectoral and market cap concentration in mutual funds holdings",
        "Underperforming funds",
      ],
      fullyTyped: true,
    },
    { sender: "user", content: "", fullyTyped: true, timestamp: new Date() },
    {
      sender: "bot",
      content:
        "After analyzing your mutual funds portfolio, it appears you have ~19% exposure to the Telecom sector. Concentrated market exposure in any single sector can result in substantial losses if that sector experiences a downturn. Would you like me to reallocate some of the funds into other areas?",
      fullyTyped: false,
      timestamp: new Date(),
    },
    {
      sender: "pieChart",
      content: "",
      chartData: [
        { name: "Telecom", value: 19 },
        { name: "IT", value: 14 },
        { name: "FMCG", value: 12 },
        { name: "Commodities", value: 10 },
        { name: "Pharma", value: 7 },
      ],
      fullyTyped: true,
    },
    { sender: "user", content: "", fullyTyped: true, timestamp: new Date() },
    {
      sender: "bot",
      content:
        "While we're on that topic, I understand you're a moderately aggressive investor. However, you only have 5% allocation into small cap funds. Small cap investments are riskier but will provide opportunity for high returns over the long term by investing in small, rapidly growing companies that may become future market leaders. I have curated 3 funds which will help address this issue. Which one would you like to invest in?",
      fullyTyped: false,
      timestamp: new Date(),
    },
    {
      sender: "button",
      content: "",
      options: [
        "Nippon India Small Cap Fund - Growth",
        "Invesco India Small Cap Fund- Growth",
        "HDFC Small Cap Fund- Growth",
      ],
      fullyTyped: true,
    },
    { sender: "user", content: "", fullyTyped: true, timestamp: new Date() },
    {
      sender: "bot",
      content: "Of course! Here you go…",
      fullyTyped: false,
      timestamp: new Date(),
    },
    { sender: "image", content: "", imageSrc: "/hdfc.png", fullyTyped: true },
    {
      sender: "bot",
      content: "Would you like me to invest in this fund for you?",
      fullyTyped: false,
      timestamp: new Date(),
    },
    { sender: "user", content: "", fullyTyped: true, timestamp: new Date() },
    {
      sender: "bot",
      content: "Loading...",
      fullyTyped: false,
      timestamp: new Date(),
    },
    {
      sender: "bot",
      content: "All set! What other issue would you like me to address?",
      fullyTyped: false,
      timestamp: new Date(),
    },
    {
      sender: "button",
      content: "",
      options: ["Underperforming Funds"],
      fullyTyped: true,
    },
    { sender: "user", content: "", fullyTyped: true, timestamp: new Date() },
    {
      sender: "bot",
      content:
        "While analysing your portfolio, I noticed one fund which has been underperforming against benchmark. Axis Bluechip Fund- Growth has a 5 year CAGR of 14.5% and you&apos;ve missed out on an additional Rs 8450 in returns. Here are some other options I recommend you invest in –",
      fullyTyped: false,
      timestamp: new Date(),
    },
    {
      sender: "image",
      content: "",
      imageSrc: "/investment_options.png",
      fullyTyped: true,
    },
    {
      sender: "bot",
      content: "Which one would you like to invest in?",
      fullyTyped: false,
      timestamp: new Date(),
    },
    {
      sender: "button",
      content: "",
      options: [
        "Nippon India Large Cap Fund- Growth",
        "Canara Robeco Bluechip Equity Fund- Growth",
        "Kotak Bluechip Fund- Growth",
      ],
      fullyTyped: true,
    },
    { sender: "user", content: "", fullyTyped: true, timestamp: new Date() },
    {
      sender: "bot",
      content: "Loading...",
      fullyTyped: false,
      timestamp: new Date(),
    },
    {
      sender: "bot",
      content: "All set! Anything else you need my help with?",
      fullyTyped: false,
      timestamp: new Date(),
    },
    { sender: "user", content: "", fullyTyped: true, timestamp: new Date() },
    {
      sender: "bot",
      content: "Of course! Here&apos;s your updated investment split..",
      fullyTyped: false,
      timestamp: new Date(),
    },
    {
      sender: "pieChart",
      content: "",
      chartData: [
        { name: "Stocks", value: 25 },
        { name: "Funds", value: 70 },
        { name: "Cash", value: 5 },
      ],
      fullyTyped: true,
    },
    {
      sender: "bot",
      content: "Anything else I can help you with?",
      fullyTyped: false,
      timestamp: new Date(),
    },
    { sender: "user", content: "", fullyTyped: true, timestamp: new Date() },
    {
      sender: "bot",
      content: "Alright! Let&apos;s take a look at your fixed portfolio now..",
      fullyTyped: false,
      timestamp: new Date(),
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
      router.push("/fixed-portfolio");
      return;
    }

    const currentMessage = conversationFlow[currentStep];

    if (currentMessage.sender === "bot") {
      if (currentMessage.content === "Loading...") {
        handleLoadingScreen();
      } else {
        setMessages((prev) => [...prev, { ...currentMessage, content: "" }]);
        await typeMessage(currentMessage);
        if (currentStep === conversationFlow.length - 1) {
          // This is the last message
          setTimeout(() => {
            router.push("/fixed-portfolio");
          }, 2000); // Wait 2 seconds after the last message before navigating
        } else {
          setCurrentStep((prev) => prev + 1);
        }
      }
    } else if (
      ["button", "pieChart", "image"].includes(currentMessage.sender)
    ) {
      setMessages((prev) => [...prev, currentMessage]);
      setCurrentStep((prev) => prev + 1);
    } else if (currentMessage.sender === "user") {
      // Wait for user input
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
              index === prev.length - 1
                ? { ...msg, fullyTyped: true, timestamp: new Date() }
                : msg
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
      {
        sender: "user",
        content: input,
        fullyTyped: true,
        timestamp: new Date(),
      },
    ]);
    setUserInput("");
    setCurrentStep((prev) => prev + 1);
  };

  const handleButtonClick = (option: string) => {
    handleUserInput(option);
  };

  const handleSliderSubmit = () => {
    handleUserInput(`₹${sliderValue.toLocaleString()}`);
  };

  const handleLoadingScreen = () => {
    setShowLoading(true);
    setLoadingText(getLoadingText());
    setTimeout(() => {
      setShowLoading(false);
      setCurrentStep((prev) => prev + 1);
    }, 5000);
  };

  const getLoadingText = () => {
    switch (currentStep) {
      case 14:
        return "Moving free cash into liquid funds";
      case 28:
        return "Fixing sectoral allocation, Increasing small cap exposure";
      case 37:
        return "Switching Funds to better performing portfolio";
      default:
        return "J.A.R.V.I.S is computing..";
    }
  };

  return (
    <div className="fixed inset-0 flex flex-col">
      <HeaderChat />
      {showLoading ? (
        <LoadingScreen loadingText={loadingText} />
      ) : (
        <div className="flex-1 bg-gray-100 flex flex-col p-4 overflow-hidden">
          <div className="flex items-center justify-start">
            <img
              src="/robo_icon.png"
              width={100}
              height={100}
              alt="Robo Icon"
              className="rounded-full"
            />
            <div>
              <h1 className="font-bold text-2xl">J.A.R.V.I.S</h1>
              <p>Personal AI Assistant</p>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto mb-16 space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.sender === "bot" ||
                  msg.sender === "button" ||
                  msg.sender === "pieChart" ||
                  msg.sender === "image" ||
                  msg.sender === "slider"
                    ? "justify-start"
                    : "justify-end"
                }`}
              >
                {msg.sender === "pieChart" && msg.chartData && (
                  <PieChartDisplay data={msg.chartData} />
                )}
                {msg.sender === "image" && <ImageDisplay src={msg.imageSrc!} />}
                {msg.sender === "button" && (
                  <div className="flex flex-col space-y-2 max-w-[70%]">
                    {msg.options!.map((option, i) => (
                      <button
                        key={i}
                        onClick={() => handleButtonClick(option)}
                        className="p-2 ml-1 rounded-2xl bg-white text-[#9B1E26] border border-[#9B1E26] hover:bg-[#9B1E26] hover:text-white text-left w-auto"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
                {msg.sender === "slider" && (
                  <div className="flex flex-col space-y-2 max-w-[70%]">
                    <input
                      type="range"
                      min="0"
                      max={msg.sliderMax}
                      value={sliderValue}
                      onChange={(e) => setSliderValue(Number(e.target.value))}
                      className="w-full"
                    />
                    <div>Selected amount: ₹{sliderValue.toLocaleString()}</div>
                    <button
                      onClick={handleSliderSubmit}
                      className="p-2 rounded-lg bg-[#EF5350] text-white"
                    >
                      Continue
                    </button>
                  </div>
                )}
                {(msg.sender === "bot" || msg.sender === "user") && (
                  <div
                    className={`flex ${
                      msg.sender === "user" ? "justify-end" : "justify-start"
                    } w-full`}
                  >
                    <div className="flex flex-col max-w-[70%]">
                      <div
                        className={`${
                          msg.sender === "user"
                            ? "bg-[#AED6F1] text-black"
                            : "bg-[#EAE9E9]"
                        } p-2 rounded-xl`}
                      >
                        <ReactMarkdown>{msg.content}</ReactMarkdown>
                        {msg.sender === "bot" && !msg.fullyTyped && (
                          <span className="inline-block w-1 h-4 bg-black animate-blink" />
                        )}
                      </div>
                      {msg.fullyTyped && msg.timestamp && (
                        <div
                          className={`flex items-center mt-1 text-xs text-gray-500 ${
                            msg.sender === "user"
                              ? "justify-end"
                              : "justify-start"
                          }`}
                        >
                          <span>
                            {msg.timestamp.toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </span>
                          {msg.sender === "user" && (
                            <img
                              src="/double-tick.svg"
                              alt="Read"
                              className="w-4 h-4 ml-1"
                            />
                          )}
                        </div>
                      )}
                    </div>
                  </div>
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
              onKeyPress={(e) =>
                e.key === "Enter" && handleUserInput(userInput)
              }
              className="w-full p-2 border rounded"
              placeholder="Type your message..."
            />
          </div>
        </div>
      )}
    </div>
  );
}
