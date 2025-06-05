"use client";

import { Button } from "@heroui/button";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/react";
import { useState } from "react";
import { Plus, Copy, ChevronDown, Wand2, FileText, Zap } from "lucide-react";

export function ControlPanel() {
  const [selectedProject, setSelectedProject] = useState("Project 1");
  const [selectedDocument, setSelectedDocument] = useState("Document 1");
  const [selectedVersion, setSelectedVersion] = useState("Version 1");

  // Mock data - replace with your actual data
  const projects = ["Project 1", "Project 2", "Project 3"];
  const documents = ["Document 1", "Document 2", "Document 3"];
  const versions = ["Version 1", "Version 2", "Version 3"];

  const quickActions = [
    { key: "expand", text: "Expand Text", icon: Wand2 },
    { key: "summarize", text: "Summarize", icon: FileText },
    { key: "generate", text: "Generate Ideas", icon: Zap },
    { key: "improve", text: "Improve Writing", icon: Wand2 },
  ];

  const handleQuickAction = (action: string) => {
    console.log("Quick action:", action);
    // Implement your quick action logic here
  };

  return (
    <div className="w-full px-2">
      <div className="bg-card/95 backdrop-blur-sm rounded-2xl shadow-xl border border-border/30 overflow-hidden">
        {/* Content */}
        <div className="flex flex-col lg:flex-row">
          {/* Left side - Controls */}
          <div className="flex-1 p-3 lg:p-4 space-y-3">
            {/* Selectors Row */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-2">
              {/* Project Selector */}
              <Dropdown className="w-full sm:w-auto">
                <DropdownTrigger>
                  <Button
                    variant="solid"
                    size="sm"
                    className="justify-between bg-amber-500 text-amber-50 hover:bg-amber-600 shadow-md hover:shadow-lg transition-all duration-200"
                  >
                    <span>{selectedProject}</span>
                    <ChevronDown className="h-3 w-3 ml-1" />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Project selection"
                  onAction={(key) => setSelectedProject(key as string)}
                  selectedKeys={[selectedProject]}
                  selectionMode="single"
                  className="bg-background/95 backdrop-blur-sm border border-border/30 rounded-lg shadow-xl"
                >
                  {projects.map((project) => (
                    <DropdownItem
                      key={project}
                      className="hover:bg-amber-500/10"
                    >
                      {project}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>

              {/* Document Selector */}
              <Dropdown className="w-full sm:w-auto">
                <DropdownTrigger>
                  <Button
                    variant="solid"
                    size="sm"
                    className="justify-between bg-amber-500 text-amber-50 hover:bg-amber-600 shadow-md hover:shadow-lg transition-all duration-200"
                  >
                    <span>{selectedDocument}</span>
                    <ChevronDown className="h-3 w-3 ml-1" />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Document selection"
                  onAction={(key) => setSelectedDocument(key as string)}
                  selectedKeys={[selectedDocument]}
                  selectionMode="single"
                  className="bg-background/95 backdrop-blur-sm border border-border/30 rounded-lg shadow-xl"
                >
                  {documents.map((document) => (
                    <DropdownItem
                      key={document}
                      className="hover:bg-amber-500/10"
                    >
                      {document}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>

              {/* Version Selector */}
              <Dropdown className="w-full sm:w-auto">
                <DropdownTrigger>
                  <Button
                    variant="solid"
                    size="sm"
                    className="justify-between bg-amber-500 text-amber-50 hover:bg-amber-600 shadow-md hover:shadow-lg transition-all duration-200"
                  >
                    <span>{selectedVersion}</span>
                    <ChevronDown className="h-3 w-3 ml-1" />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Version selection"
                  onAction={(key) => setSelectedVersion(key as string)}
                  selectedKeys={[selectedVersion]}
                  selectionMode="single"
                  className="bg-background/95 backdrop-blur-sm border border-border/30 rounded-lg shadow-xl"
                >
                  {versions.map((version) => (
                    <DropdownItem
                      key={version}
                      className="hover:bg-amber-500/10"
                    >
                      {version}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            </div>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap gap-2">
              <Button
                variant="solid"
                size="sm"
                className="gap-1 bg-secondary/80 text-secondary-foreground hover:bg-secondary shadow-md hover:shadow-lg transition-all duration-200"
              >
                <Plus className="h-3 w-3" />
                <span>New Project</span>
              </Button>

              <Button
                variant="solid"
                size="sm"
                className="gap-1 bg-secondary/80 text-secondary-foreground hover:bg-secondary shadow-md hover:shadow-lg transition-all duration-200"
              >
                <Plus className="h-3 w-3" />
                <span>New Document</span>
              </Button>

              <Button
                variant="solid"
                size="sm"
                className="gap-1 bg-secondary/80 text-secondary-foreground hover:bg-secondary shadow-md hover:shadow-lg transition-all duration-200"
              >
                <Copy className="h-3 w-3" />
                <span>Duplicate</span>
              </Button>
            </div>
          </div>

          {/* Right side - Quick Actions */}
          <div className="p-3 lg:p-4 border-t lg:border-t-0 lg:border-l border-border/30 bg-card/50 backdrop-blur-sm lg:rounded-r-2xl">
            <div className="space-y-3">
              <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                Quick Actions
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {quickActions.map((action) => {
                  const Icon = action.icon;
                  return (
                    <Button
                      key={action.key}
                      variant="solid"
                      size="sm"
                      className="text-xs h-8 gap-1 bg-muted/60 text-foreground hover:bg-muted shadow-sm hover:shadow-md transition-all duration-200"
                      onPress={() => handleQuickAction(action.key)}
                    >
                      <Icon className="h-3 w-3" />
                      <span className="hidden sm:inline">{action.text}</span>
                    </Button>
                  );
                })}
              </div>

              {/* Generate Button */}
              <Button
                variant="solid"
                size="sm"
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-amber-50 shadow-lg hover:shadow-xl hover:from-amber-600 hover:to-amber-700 transition-all duration-200"
              >
                <Wand2 className="h-4 w-4 mr-2" />
                Generate Content
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
