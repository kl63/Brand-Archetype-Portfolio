"use client";

import * as React from "react";
import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageSquare, Send, X, Maximize2, Minimize2, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

interface Message {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: "1",
    content: "Hi there! I'm your social media assistant. I can help you generate content and connect with Zapier to automate your social media workflow. How can I help you today?",
    role: "assistant",
    timestamp: new Date(),
  },
];

const ZAPIER_SUGGESTIONS = [
  "Create a Twitter post about my latest project",
  "Schedule an Instagram post for tomorrow",
  "Connect my LinkedIn account to Zapier",
  "Generate a week's worth of social content",
  "How do I set up a Zapier automation?",
];

export function ZapierChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      let response = "";

      // Simple pattern matching for demo purposes
      if (input.toLowerCase().includes("twitter") || input.toLowerCase().includes("tweet")) {
        response = "I can help you create Twitter content! Would you like me to generate a tweet about a specific topic, or connect your Twitter account to Zapier for automatic posting?";
      } else if (input.toLowerCase().includes("instagram")) {
        response = "Instagram posts require eye-catching visuals. I can help you generate content ideas and connect with Zapier to schedule posts. What kind of content are you looking to create?";
      } else if (input.toLowerCase().includes("zapier")) {
        response = "Zapier is a powerful automation tool that can connect your social media accounts and automate posting. Would you like me to help you set up a Zapier workflow for your social media?";
      } else if (input.toLowerCase().includes("schedule") || input.toLowerCase().includes("post")) {
        response = "I can help you schedule posts through Zapier integrations. You can connect to tools like Buffer, Hootsuite, or directly to social platforms. Which platform would you like to schedule content for?";
      } else if (input.toLowerCase().includes("generate") || input.toLowerCase().includes("content")) {
        response = "I'd be happy to help generate social media content! Please tell me the topic, target platform, and tone you'd prefer for your content.";
      } else {
        response = "I'm here to help with your social media needs. I can generate content ideas, help schedule posts through Zapier, or assist with social media strategy. What specific help do you need today?";
      }

      const botMessage: Message = {
        id: Date.now().toString(),
        content: response,
        role: "assistant",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (isMinimized) setIsMinimized(false);
  };

  const toggleMinimize = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMinimized(!isMinimized);
  };

  return (
    <>
      {/* Chat button */}
      <button
        onClick={toggleChat}
        className={cn(
          "fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all duration-300",
          isOpen
            ? "bg-red-500 hover:bg-red-600"
            : "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
        )}
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <MessageSquare className="h-6 w-6 text-white" />
        )}
      </button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-80 md:w-96"
          >
            <Card className="border-white/10 bg-black/80 backdrop-blur-md text-white shadow-xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 p-4 flex flex-row items-center justify-between">
                <div className="flex items-center">
                  <Zap className="h-5 w-5 mr-2 text-orange-400" />
                  <h3 className="font-semibold">Zapier Social Assistant</h3>
                </div>
                <button onClick={toggleMinimize} className="text-white/70 hover:text-white">
                  {isMinimized ? (
                    <Maximize2 className="h-4 w-4" />
                  ) : (
                    <Minimize2 className="h-4 w-4" />
                  )}
                </button>
              </CardHeader>

              <AnimatePresence>
                {!isMinimized && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CardContent className="p-0">
                      <div className="h-80 overflow-y-auto p-4 space-y-4">
                        {messages.map((message) => (
                          <div
                            key={message.id}
                            className={cn(
                              "flex flex-col max-w-[80%] rounded-lg p-3",
                              message.role === "user"
                                ? "bg-blue-600/20 ml-auto"
                                : "bg-gray-800/50 mr-auto"
                            )}
                          >
                            <p className="text-sm">{message.content}</p>
                            <span className="text-xs text-white/40 mt-1 self-end">
                              {message.timestamp.toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </span>
                          </div>
                        ))}
                        {isTyping && (
                          <div className="bg-gray-800/50 rounded-lg p-3 max-w-[80%] mr-auto">
                            <div className="flex space-x-1">
                              <div className="h-2 w-2 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: "0ms" }} />
                              <div className="h-2 w-2 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: "150ms" }} />
                              <div className="h-2 w-2 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: "300ms" }} />
                            </div>
                          </div>
                        )}
                        <div ref={messagesEndRef} />
                      </div>

                      {/* Suggestions */}
                      <div className="px-4 pb-2">
                        <p className="text-xs text-white/60 mb-2">Suggested questions:</p>
                        <div className="flex flex-wrap gap-2">
                          {ZAPIER_SUGGESTIONS.slice(0, 3).map((suggestion, index) => (
                            <button
                              key={index}
                              className="text-xs bg-blue-900/20 hover:bg-blue-900/30 text-blue-400 rounded-full px-2 py-1 transition-colors"
                              onClick={() => {
                                setInput(suggestion);
                              }}
                            >
                              {suggestion}
                            </button>
                          ))}
                        </div>
                      </div>
                    </CardContent>

                    <CardFooter className="p-3 border-t border-white/10">
                      <div className="flex w-full items-center space-x-2">
                        <Input
                          placeholder="Type your message..."
                          value={input}
                          onChange={(e) => setInput(e.target.value)}
                          onKeyDown={handleKeyDown}
                          className="bg-black/50 border-white/20"
                        />
                        <Button
                          size="icon"
                          onClick={handleSendMessage}
                          disabled={!input.trim()}
                        >
                          <Send className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardFooter>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
