"use client";

import { useState, useRef, useEffect } from "react";
import { Save, X } from "lucide-react";
import { ContentHeader } from "./ContentHeader";

export function WelcomePanel() {
  const [hasInteracted, setHasInteracted] = useState(false);
  const [content, setContent] = useState(`Welcome to Your Creative Workspace

This is where your ideas come to life. Click anywhere to start writing your thoughts, stories, or any content you wish to create.

Some features you might find helpful:
• Auto-save functionality
• Clean, distraction-free interface
• Word count tracking
• Easy editing and formatting

Start typing to begin your creative journey...`);

  const [isEditing, setIsEditing] = useState(false);
  const [editingContent, setEditingContent] = useState("");
  const [showFAQ, setShowFAQ] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Get word count
  const getWordCount = (text: string) => {
    return text.trim() ? text.trim().split(/\s+/).length : 0;
  };

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [editingContent]);

  const handleStartEditing = () => {
    setEditingContent(content);
    setIsEditing(true);
    setHasInteracted(true);

    setTimeout(() => {
      if (textareaRef.current) {
        textareaRef.current.focus();
        textareaRef.current.setSelectionRange(
          textareaRef.current.value.length,
          textareaRef.current.value.length
        );
      }
    }, 50);
  };

  const handleSave = () => {
    if (editingContent.trim()) {
      setContent(editingContent);
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditingContent(content);
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      handleCancel();
    } else if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      handleSave();
    }
  };

  if (showFAQ) {
    return (
      <>
        <ContentHeader
          onShowFAQ={() => setShowFAQ(false)}
          showFAQButton={true}
        />
        <div className="flex-1 overflow-y-auto bg-background relative z-50">
          {/* Scroll indicator */}
          <div className="absolute top-4 right-4 text-xs text-muted-foreground/60 bg-card/80 backdrop-blur-sm rounded px-2 py-1 border border-border/30 z-10">
            Scroll this area to view all content
          </div>

          {/* Header */}
          <div className="p-6 pb-4">
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Hello User, Welcome to Tixae
            </h1>
            <p className="text-muted-foreground">
              Please read the instructions below. You can always return to this
              screen by clicking FAQ in the blue bar above.
            </p>
          </div>

          {/* Content sections */}
          <div className="px-6 space-y-6">
            {/* Welcome section */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-primary">
                Welcome to Tixae, User
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We're thrilled you're here.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                If you've ever wanted to create something amazing but didn't
                know how to begin, you're in exactly the right place.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This screen is your starting point. You can always return here
                by clicking the "<strong>FAQ</strong>" button in the blue bar
                above.
              </p>
            </div>

            {/* Your Workspace section */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-primary">
                Your Workspace
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Right now, you're seeing this welcome message. But soon, this
                area will be filled with your actual work—content, ideas, and
                creative output you bring to life through a simple conversation.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                You don't need to plan everything or be a pro. You just need to
                begin.
              </p>
            </div>

            {/* How Tixae Works section */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-primary">
                How Tixae Works
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Look to the right. That's your assistant—it's the core of how
                Tixae works.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                It's not a slide tool—it's the core of how Tixae works.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                You don't need to start with an outline or a full draft. Just
                talk.
              </p>

              <div className="space-y-3 ml-4">
                <p className="text-muted-foreground leading-relaxed">
                  Here's how:
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Start a chat—type or speak.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Everything you say is saved automatically.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When you're ready, just ask:
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed italic ml-4">
                "Can you turn this into a document?"
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Your assistant will take your thoughts and turn them into a
                written draft.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                No blank pages. No pressure. Just real, flowing ideas.
              </p>
            </div>

            {/* Powered by section */}
            <div className="flex items-center justify-center pt-10">
              <img
                src="/Powered_by_Tixae.png"
                alt="Powered by Tixae.ai"
                className="h-4 opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <ContentHeader onShowFAQ={() => setShowFAQ(true)} showFAQButton={true} />
      <div className="flex-1 bg-card rounded-2xl shadow-xl flex flex-col">
        <div className="flex-1 p-4 md:p-6">
          <div className="max-w-none mx-auto h-full">
            {/* Content Area */}
            <div className="h-full flex flex-col">
              {isEditing ? (
                // Edit Mode
                <>
                  <div className="flex-1 mb-4">
                    <textarea
                      ref={textareaRef}
                      value={editingContent}
                      onChange={(e) => setEditingContent(e.target.value)}
                      onKeyDown={handleKeyDown}
                      className="w-full h-full min-h-[400px] p-4 bg-background/50 border border-border/30 rounded-lg text-foreground placeholder-secondary-foreground/50 resize-none focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors"
                      placeholder="Start writing your content..."
                      style={{
                        fontFamily: "inherit",
                        fontSize: "16px",
                        lineHeight: "1.6",
                      }}
                    />
                  </div>

                  {/* Editing Controls */}
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-secondary-foreground/70">
                      {getWordCount(editingContent)} words
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={handleCancel}
                        className="px-4 py-2 text-sm text-secondary-foreground/70 hover:text-secondary-foreground bg-secondary/20 hover:bg-secondary/30 rounded-lg transition-colors"
                      >
                        <X className="h-4 w-4 mr-1 inline" />
                        Cancel
                      </button>
                      <button
                        onClick={handleSave}
                        className="px-4 py-2 text-sm text-primary-foreground bg-primary hover:bg-primary/90 rounded-lg transition-colors"
                      >
                        <Save className="h-4 w-4 mr-1 inline" />
                        Save
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                // View Mode
                <div
                  onClick={handleStartEditing}
                  className="h-full cursor-text p-4 rounded-lg hover:bg-background/30 transition-colors group"
                >
                  <div className="prose prose-gray max-w-none">
                    {content.split("\n").map((line, index) => (
                      <p
                        key={index}
                        className="text-foregroundlast:mb-0 leading-relaxed"
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                  {hasInteracted && (
                    <div className="">
                      <div className="text-sm text-secondary-foreground/70">
                        {getWordCount(content)} words • Click to edit
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Powered by section */}
        <div className="flex items-center justify-center py-3">
          <img
            src="/Powered_by_Tixae.png"
            alt="Powered by Tixae.ai"
            className="h-4 opacity-70 hover:opacity-100 transition-opacity"
          />
        </div>
      </div>
    </>
  );
}
