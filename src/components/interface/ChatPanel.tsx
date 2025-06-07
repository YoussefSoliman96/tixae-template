"use client";

import { Button } from "@heroui/button";
import { useState, useRef, useEffect } from "react";
import { MessageSquare, HelpCircle, Send } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

export function ChatPanel() {
  const [activeTab, setActiveTab] = useState<"write" | "support">("write");
  const [chatMode, setChatMode] = useState<"text" | "voice">("text");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content:
        "Hello! I'm here to help you with your writing. What would you like to work on today?",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [showWelcomeFAQ, setShowWelcomeFAQ] = useState(true);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      const newHeight = Math.min(Math.max(textarea.scrollHeight, 79), 200);
      textarea.style.height = `${newHeight}px`;
    }
  }, [input]);

  // Auto-scroll to bottom
  const scrollToBottom = () => {
    setTimeout(() => {
      if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop =
          chatContainerRef.current.scrollHeight;
      }
    }, 0);
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages.length]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
    };

    setMessages((prev) => [...prev, newMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content:
          "Thanks for your message! I'm here to help you with your writing projects.",
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(e);
    }
  };

  return (
    <div className="w-full xl:w-[360px] h-full flex flex-col overflow-hidden rounded-2xl shadow-xl">
      {/* Chat Messages Area with Header */}
      <div className="flex-1 flex flex-col min-h-0">
        <div className="h-full bg-card rounded-2xl shadow-xl overflow-hidden flex flex-col">
          {/* WRITE | SUPPORT Header */}
          <div className="bg-secondary text-secondary-foreground p-3 md:p-4 flex items-center justify-between border-b border-border/30">
            <div className="flex bg-background rounded-md overflow-hidden border border-border/50 shadow-sm">
              <button
                className={`px-2 md:px-3 py-1 md:py-1.5 text-[10px] md:text-xs font-medium transition-all duration-200 ${
                  activeTab === "write"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-background text-foreground hover:bg-secondary/60"
                }`}
                onClick={() => setActiveTab("write")}
              >
                <MessageSquare className="w-3 h-3 inline mr-1" />
                WRITE
              </button>
              <button
                className={`px-2 md:px-3 py-1 md:py-1.5 text-[10px] md:text-xs font-medium transition-all duration-200 ${
                  activeTab === "support"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-background text-foreground hover:bg-secondary/60"
                }`}
                onClick={() => setActiveTab("support")}
              >
                <HelpCircle className="w-3 h-3 inline mr-1" />
                SUPPORT
              </button>
            </div>

            {/* TYPE | SPEAK buttons - only show in WRITE tab */}
            {activeTab === "write" && (
              <div className="flex bg-background rounded-md overflow-hidden border border-border/50 shadow-sm">
                <button
                  className={`px-2 md:px-3 py-1 md:py-1.5 text-[10px] md:text-xs font-medium transition-all duration-200 ${
                    chatMode === "text"
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-background text-foreground hover:bg-secondary/60"
                  }`}
                  onClick={() => setChatMode("text")}
                >
                  TYPE
                </button>
                <button
                  className={`px-2 md:px-3 py-1 md:py-1.5 text-[10px] md:text-xs font-medium transition-all duration-200 ${
                    chatMode === "voice"
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-background text-foreground hover:bg-secondary/60"
                  }`}
                  onClick={() => setChatMode("voice")}
                >
                  SPEAK
                </button>
              </div>
            )}
          </div>

          {/* Chat Content */}
          <div className="relative flex-1 overflow-hidden">
            <div
              ref={chatContainerRef}
              className="h-full overflow-auto p-2 space-y-3 md:space-y-4 scrollbar-thin scrollbar-thumb-border scrollbar-track-background"
            >
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
                          <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <span className="text-primary text-xs font-medium">
                              AI
                            </span>
                          </div>
                          <div className="max-w-[85%] rounded-xl px-4 py-3 bg-primary text-primary-foreground text-xs shadow-lg border border-primary/20">
                            <p className="text-xs leading-relaxed">
                              {message.content}
                            </p>
                          </div>
                        </div>
                      )}

                      {message.role === "user" && (
                        <div className="max-w-[85%] rounded-xl px-4 py-3 bg-secondary text-secondary-foreground text-xs shadow-lg border border-secondary/20">
                          <p className="whitespace-pre-wrap text-xs leading-relaxed">
                            {message.content}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}

                  {/* Loading indicator */}
                  {isLoading && (
                    <div className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary text-xs font-medium">
                          AI
                        </span>
                      </div>
                      <div className="bg-primary/5 rounded-xl px-4 py-3 border border-primary/10">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-75"></div>
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-150"></div>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <>
                  {/* Support Chat Content */}
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <HelpCircle className="w-4 h-4 text-secondary" />
                    </div>
                    <div className="max-w-[85%] rounded-xl px-4 py-3 bg-secondary text-secondary-foreground text-xs shadow-lg border border-secondary/20">
                      <p className="text-xs leading-relaxed mb-2">
                        👋 Hi! I'm your support assistant. I can help you with:
                      </p>
                      <ul className="text-xs space-y-1 text-secondary-foreground/80">
                        <li>• Getting started with the platform</li>
                        <li>• Troubleshooting issues</li>
                        <li>• Feature explanations</li>
                        <li>• Account questions</li>
                      </ul>
                      <p className="text-xs leading-relaxed mt-2">
                        What can I help you with today?
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Input Area */}
          {((activeTab === "write" && chatMode === "text") ||
            activeTab === "support") && (
            <div className="px-3 py-2 bg-card/50 shadow-sm">
              <form onSubmit={handleSendMessage} className="relative">
                <textarea
                  ref={textareaRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="w-full min-h-[79px] md:min-h-[79px] lg:min-h-[105px] xl:min-h-[141px] p-4 pr-12 border border-border/40 bg-background/80 text-foreground rounded-xl text-xs resize-none focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 shadow-sm placeholder:text-muted-foreground/50 backdrop-blur-sm transition-all duration-200"
                  placeholder={
                    activeTab === "support"
                      ? "Ask a support question..."
                      : "Type your message here..."
                  }
                  rows={1}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 text-primary hover:bg-primary/10 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>

              {/* Powered by section */}
              <div className="flex items-center justify-center pt-2 text-xs text-muted-foreground/70">
                <span>Powered by Tixae</span>
              </div>
            </div>
          )}

          {/* Voice Mode Indicator */}
          {activeTab === "write" && chatMode === "voice" && (
            <div className="px-3 py-2 bg-card/50 shadow-sm">
              <div className="text-center text-sm text-muted-foreground py-4 bg-primary/5 rounded-lg border border-primary/20">
                🎤 Voice mode active - Click to start speaking
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
