"use client";

import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { useState, useRef, useEffect } from "react";
import { Send, Mic, Bot, User } from "lucide-react";
import { ChatHeader } from "./ChatHeader";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export function ChatPanel() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content:
        "Hello User! Welcome to Tixae, your personal writing assistant. How can I help you get started with your project today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<"write" | "support">("write");
  const [showWelcomeFAQ, setShowWelcomeFAQ] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Auto-close FAQ when user sends a message
    if (showWelcomeFAQ) {
      setShowWelcomeFAQ(false);
    }

    // Simulate assistant response
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: `I received your message: "${userMessage.content}". I'm here to help you create amazing content. What would you like to work on together?`,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="w-full xl:w-[360px] h-full flex flex-col overflow-hidden">
      {/* Floating Chat Card */}
      <div className="h-full m-2 bg-background/95 backdrop-blur-sm rounded-2xl shadow-xl border border-border/30 flex flex-col overflow-hidden">
        {/* Chat Header */}
        <ChatHeader activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Chat Messages Area */}
        <div className="flex-1 flex flex-col min-h-0">
          <div className="relative flex-1 overflow-hidden">
            <div className="h-full overflow-auto p-3 md:p-4 space-y-3 md:space-y-4 scrollbar-thin scrollbar-thumb-border scrollbar-track-background">
              {activeTab === "write" ? (
                <>
                  {/* Welcome FAQ */}
                  {showWelcomeFAQ && (
                    <div className="bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-xl p-4 mb-4 shadow-sm">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="text-sm font-semibold text-primary mb-2">
                            🎯 Quick Start Guide
                          </h4>
                          <ul className="text-xs text-muted-foreground space-y-1">
                            <li>• Ask me to help you brainstorm ideas</li>
                            <li>• Tell me what you want to create</li>
                            <li>
                              • Share your thoughts and I'll organize them
                            </li>
                            <li>• Request specific help with writing</li>
                          </ul>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onPress={() => setShowWelcomeFAQ(false)}
                          className="text-xs px-2 py-1 h-auto hover:bg-primary/20"
                        >
                          ✕
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Messages */}
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`${
                        message.role === "assistant"
                          ? "justify-start"
                          : "flex justify-end"
                      }`}
                    >
                      {message.role === "assistant" && (
                        <div className="flex items-start gap-3">
                          <div className="w-7 h-7 rounded-full shadow-md border border-border/40 flex-shrink-0 bg-primary/10 flex items-center justify-center">
                            <Bot className="w-4 h-4 text-primary" />
                          </div>
                          <div className="max-w-[85%] rounded-xl px-4 py-3 bg-primary text-primary-foreground text-xs shadow-lg border border-primary/20 backdrop-blur-sm">
                            <p className="mb-2 last:mb-0 text-xs leading-relaxed whitespace-pre-wrap">
                              {message.content}
                            </p>
                          </div>
                        </div>
                      )}

                      {message.role === "user" && (
                        <div className="max-w-[85%] rounded-xl px-4 py-3 bg-secondary text-secondary-foreground text-xs shadow-lg border border-secondary/20 backdrop-blur-sm">
                          <p className="whitespace-pre-wrap text-xs leading-relaxed">
                            {message.content}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}

                  {/* Loading indicator */}
                  {isLoading && (
                    <div className="flex gap-3 justify-start">
                      <div className="w-7 h-7 rounded-full shadow-md border border-border/40 flex-shrink-0 bg-primary/10 flex items-center justify-center">
                        <Bot className="w-4 h-4 text-primary" />
                      </div>
                      <div className="bg-primary text-primary-foreground rounded-xl px-4 py-3 text-xs shadow-lg border border-primary/20 backdrop-blur-sm">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-primary-foreground/70 rounded-full animate-bounce"></div>
                          <div
                            className="w-2 h-2 bg-primary-foreground/70 rounded-full animate-bounce"
                            style={{ animationDelay: "0.1s" }}
                          ></div>
                          <div
                            className="w-2 h-2 bg-primary-foreground/70 rounded-full animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </>
              ) : (
                /* Support Chat Content */
                <div className="text-center text-muted-foreground p-8">
                  <h3 className="text-lg font-semibold mb-2">Support Chat</h3>
                  <p className="text-sm mb-6">
                    Get help with using Tixae effectively
                  </p>
                  <div className="mt-6 space-y-3 text-left max-w-md mx-auto">
                    <div className="bg-background/60 backdrop-blur-sm p-3 rounded-lg border border-border/30 shadow-sm">
                      <div className="text-xs text-muted-foreground mb-1">
                        Support Bot
                      </div>
                      <div className="text-sm">
                        Hi! I'm here to help you get the most out of Tixae. What
                        questions do you have?
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Chat Input */}
          <div className="flex-shrink-0 p-4 border-t border-border/50 bg-card/50 backdrop-blur-sm rounded-b-2xl">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={
                  activeTab === "write"
                    ? "Start typing here to respond to your assistant above"
                    : "Ask a support question..."
                }
                className="flex-1 text-xs bg-background/50 backdrop-blur-sm border-border/30"
                disabled={isLoading}
              />
              <Button
                isIconOnly
                variant="ghost"
                className="w-10 h-10 hover:bg-secondary/60 backdrop-blur-sm"
                disabled={isLoading}
              >
                <Mic className="h-4 w-4" />
              </Button>
              <Button
                isIconOnly
                color="primary"
                onPress={handleSend}
                disabled={!input.trim() || isLoading}
                className="w-10 h-10 shadow-md hover:shadow-lg transition-shadow"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
