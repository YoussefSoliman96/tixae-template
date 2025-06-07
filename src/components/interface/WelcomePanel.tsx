"use client";

import { Button } from "@heroui/button";
import { useState, useRef, useEffect } from "react";
import { HelpCircle, Edit3, Eye, Save, X } from "lucide-react";
import { ContentHeader } from "./ContentHeader";

export function WelcomePanel() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState("");
  const [editingContent, setEditingContent] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-focus textarea when entering edit mode
  useEffect(() => {
    if (isEditing && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [isEditing]);

  const handleStartEditing = () => {
    setEditingContent(content);
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    setContent(editingContent);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setEditingContent(content);
    setIsEditing(false);
  };

  // Welcome screen content
  if (showWelcome) {
    return (
      <div className="flex flex-col h-full">
        <ContentHeader />
        <div className="flex-1 overflow-y-auto bg-transparent relative">
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
          <div className="px-6 pb-6 space-y-6">
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
                by clicking the "<strong>Show Welcome & FAQ</strong>" button in
                the blue bar above.
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

            {/* Footer */}
            <div className="mt-8 pt-6 border-t border-border/30">
              <div className="flex items-center justify-between">
                <Button
                  variant="ghost"
                  size="sm"
                  onPress={() => setShowWelcome(false)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  Hide Welcome Message
                </Button>
                <p className="text-xs text-muted-foreground">
                  Start typing here to respond to your assistant above
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main content editor
  return (
    <div className="flex flex-col h-full">
      <ContentHeader />
      <div className="flex-1 p-2 bg-secondary/5 min-h-0 flex flex-col">
        <div className="flex-1 bg-card rounded-2xl shadow-xl border border-border/30 overflow-hidden flex flex-col">
          {/* Header with Project Info and Controls */}
          <div className="bg-secondary text-secondary-foreground p-3 md:p-4 flex items-center justify-between border-b border-border/30">
            <div className="flex items-center gap-3">
              <div className="text-sm font-medium">
                {isEditing ? "Editing Document" : "Document View"}
              </div>
              {content && !isEditing && (
                <div className="text-xs text-secondary-foreground/70">
                  {content.split(" ").length} words
                </div>
              )}
            </div>
            <div className="flex items-center gap-2">
              {!isEditing ? (
                <>
                  <Button
                    variant="ghost"
                    size="sm"
                    onPress={() => setShowWelcome(true)}
                    className="text-xs px-2 py-1 h-auto text-secondary-foreground hover:bg-secondary-foreground/10"
                  >
                    <HelpCircle className="w-3 h-3 mr-1" />
                    FAQ
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onPress={handleStartEditing}
                    className="text-xs px-2 py-1 h-auto text-secondary-foreground hover:bg-secondary-foreground/10"
                  >
                    <Edit3 className="w-3 h-3 mr-1" />
                    Edit
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    variant="ghost"
                    size="sm"
                    onPress={handleCancelEdit}
                    className="text-xs px-2 py-1 h-auto text-secondary-foreground hover:bg-secondary-foreground/10"
                  >
                    <X className="w-3 h-3 mr-1" />
                    Cancel
                  </Button>
                  <Button
                    variant="solid"
                    size="sm"
                    onPress={handleSaveEdit}
                    className="text-xs px-2 py-1 h-auto bg-primary text-primary-foreground hover:bg-primary/80"
                    disabled={editingContent === content}
                  >
                    <Save className="w-3 h-3 mr-1" />
                    Save
                  </Button>
                </>
              )}
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 p-3 md:p-4 relative min-h-0">
            {isEditing ? (
              // Edit Mode
              <div className="h-full flex flex-col">
                <textarea
                  ref={textareaRef}
                  value={editingContent}
                  onChange={(e) => setEditingContent(e.target.value)}
                  className="flex-1 w-full p-3 md:p-4 bg-background/60 border border-border/30 rounded-xl resize-none text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 shadow-sm backdrop-blur-sm transition-all duration-200"
                  placeholder="Start writing your content here..."
                />
              </div>
            ) : content ? (
              // View Mode with Content
              <div
                className="w-full h-full bg-background/40 border border-border/20 rounded-xl cursor-text hover:bg-background/60 hover:border-border/40 transition-all duration-200 overflow-auto shadow-sm backdrop-blur-sm p-3 md:p-4"
                onClick={handleStartEditing}
              >
                <div className="whitespace-pre-wrap text-sm leading-relaxed">
                  {content}
                </div>
              </div>
            ) : (
              // Empty State
              <div
                className="w-full h-full bg-background/40 border border-border/20 rounded-xl cursor-text hover:bg-background/60 hover:border-border/40 transition-all duration-200 overflow-auto shadow-sm backdrop-blur-sm flex items-center justify-center"
                onClick={handleStartEditing}
              >
                <div className="text-center text-muted-foreground">
                  <Edit3 className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <h3 className="text-lg font-semibold mb-2">Start Writing</h3>
                  <p className="text-sm mb-4 max-w-md">
                    Click here to start creating your content. You can write,
                    edit, and save your work.
                  </p>
                  <Button
                    variant="ghost"
                    onPress={handleStartEditing}
                    className="gap-2"
                  >
                    <Edit3 className="h-4 w-4" />
                    Start Writing
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Powered by section */}
          <div className="flex items-center justify-center py-2 text-xs text-muted-foreground/70 border-t border-border/20">
            <span>Powered by Tixae</span>
          </div>
        </div>
      </div>
    </div>
  );
}
