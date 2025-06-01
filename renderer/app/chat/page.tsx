'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Sidebar } from './Sidebar'
import { PDFPreviewer } from './PDFPreviewer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Search,
  Plus,
  Send,
  Upload,
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
  ListOrdered,
  Quote,
  Code,
  Link,
  ImageIcon,
  Bot,
  User,
  Save,
  Download
} from 'lucide-react'

interface ChatMessage {
  id: string
  content: string
  isUser: boolean
  timestamp: Date
}

interface ChatSession {
  id: string
  title: string
  lastMessage: string
  timestamp: Date
}

export default function ChatbotPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      content:
        "Hello! I'm your WireFrame AI writing assistant. I can help you with editing, formatting, and improving your text. What would you like to work on today?",
      isUser: false,
      timestamp: new Date()
    }
  ])

  const [currentMessage, setCurrentMessage] = useState('')
  const [documentContent, setDocumentContent] = useState(
    'Start typing your document here...\n\nI can help you with:\n• Grammar and style improvements\n• Content suggestions\n• Formatting assistance\n• Research and fact-checking'
  )
  // Preview toggle for syntax highlighting
  const [showPreview, setShowPreview] = useState(false)
  const codeRef = useRef<HTMLPreElement>(null)
  // Prism highlight effect
  useEffect(() => {
    if (showPreview && codeRef.current) {
      import('./libs/prism-js/prism.js').then(() => {
        // @ts-ignore
        if (window.Prism) window.Prism.highlightAllUnder(codeRef.current)
      })
    }
  }, [showPreview, documentContent])

  const [chatSessions] = useState<ChatSession[]>([
    {
      id: '1',
      title: 'Blog Post Draft',
      lastMessage: 'Help me improve this introduction',
      timestamp: new Date(Date.now() - 3600000)
    },
    {
      id: '2',
      title: 'Marketing Copy',
      lastMessage: 'Make this more engaging',
      timestamp: new Date(Date.now() - 7200000)
    },
    {
      id: '3',
      title: 'Technical Documentation',
      lastMessage: 'Simplify this explanation',
      timestamp: new Date(Date.now() - 86400000)
    },
    {
      id: '4',
      title: 'Email Template',
      lastMessage: 'Professional tone needed',
      timestamp: new Date(Date.now() - 172800000)
    }
  ]);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleSendMessage = () => {
    if (!currentMessage.trim()) return

    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      content: currentMessage,
      isUser: true,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, newMessage])
    setCurrentMessage('')

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        content:
          'I can help you with that! Let me analyze your text and provide some suggestions. Would you like me to focus on grammar, style, or content structure?',
        isUser: false,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, aiResponse])
    }, 1000)
  }

  return (
    <>
      {/* Prism and mainWindow styles - import in _app.tsx or globals.css for Next.js best practice */}
      {/* <Head>
        <link rel="stylesheet" href="/chat/libs/prism-js/prism.css" />
        <link rel="stylesheet" href="/chat/libs/prism-js/prism-one-dark.css" />
        <link rel="stylesheet" href="/chat/mainWindow/mainStyles.css" />
        <link rel="stylesheet" href="/chat/../sharedStyles.css" />
      </Head> */}
      <div className="flex min-h-screen bg-gradient-to-br from-black via-slate-900 to-black">
      {/* Left Sidebar - Dashboard (Collapsible) */}
      <Sidebar
        chatSessions={chatSessions}
        collapsed={sidebarCollapsed}
        onCollapse={() => setSidebarCollapsed(c => !c)}
      />


      {/* Middle Section - Editor + Live Preview */}
      <div className="flex flex-1 flex-col bg-slate-800/30 backdrop-blur-sm">
        {/* Editor Toolbar */}
        <div className="border-b border-slate-700 bg-slate-800/50 p-4">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-medium text-white">Document Editor</h2>
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="ghost"
                className="text-slate-400 hover:bg-slate-700 hover:text-white">
                <Save className="mr-2 h-4 w-4" />
                Save
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-slate-400 hover:bg-slate-700 hover:text-white">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </div>
          </div>

          {/* Formatting Toolbar */}
          <div className="flex flex-wrap items-center gap-1">
            <div className="mr-4 flex gap-1">
              <Button size="sm" variant="ghost" className="text-slate-400 hover:bg-slate-700 hover:text-white"><Bold className="h-4 w-4" /></Button>
              <Button size="sm" variant="ghost" className="text-slate-400 hover:bg-slate-700 hover:text-white"><Italic className="h-4 w-4" /></Button>
              <Button size="sm" variant="ghost" className="text-slate-400 hover:bg-slate-700 hover:text-white"><Underline className="h-4 w-4" /></Button>
            </div>
            <div className="mr-4 flex gap-1">
              <Button size="sm" variant="ghost" className="text-slate-400 hover:bg-slate-700 hover:text-white"><AlignLeft className="h-4 w-4" /></Button>
              <Button size="sm" variant="ghost" className="text-slate-400 hover:bg-slate-700 hover:text-white"><AlignCenter className="h-4 w-4" /></Button>
              <Button size="sm" variant="ghost" className="text-slate-400 hover:bg-slate-700 hover:text-white"><AlignRight className="h-4 w-4" /></Button>
            </div>
            <div className="mr-4 flex gap-1">
              <Button size="sm" variant="ghost" className="text-slate-400 hover:bg-slate-700 hover:text-white"><List className="h-4 w-4" /></Button>
              <Button size="sm" variant="ghost" className="text-slate-400 hover:bg-slate-700 hover:text-white"><ListOrdered className="h-4 w-4" /></Button>
              <Button size="sm" variant="ghost" className="text-slate-400 hover:bg-slate-700 hover:text-white"><Quote className="h-4 w-4" /></Button>
            </div>
            <div className="flex gap-1">
              <Button size="sm" variant="ghost" className="text-slate-400 hover:bg-slate-700 hover:text-white"><Link className="h-4 w-4" /></Button>
              <Button size="sm" variant="ghost" className="text-slate-400 hover:bg-slate-700 hover:text-white"><ImageIcon className="h-4 w-4" /></Button>
              <Button size="sm" variant="ghost" className="text-slate-400 hover:bg-slate-700 hover:text-white"><Code className="h-4 w-4" /></Button>
              <Button size="sm" variant="ghost" className="text-slate-400 hover:bg-slate-700 hover:text-white"><Upload className="h-4 w-4" /></Button>
            </div>
          </div>
        </div>

        {/* Editor + Preview Side by Side with Increased Height and Editor Footer */}
        {/* Main Content Area: Editor + Preview, robust flex, no overflow */}
        <div className="flex flex-1 min-h-0 min-w-0 flex-row gap-4 p-6">
          {/* Text Editor - locked width and height */}
          <div
            className="flex flex-col min-w-0 min-h-0"
            style={{ width: '25vw', minWidth: '200px', maxWidth: '25vw', height: 'calc(100vh - 120px)', maxHeight: 'calc(100vh - 120px)', flex: '0 0 25vw', boxSizing: 'border-box', overflow: 'hidden' }}
          >
            <label className="mb-1 text-xs text-slate-400">Editor</label>
            <div
              className="flex-1 min-h-0 rounded border border-slate-300 bg-white/95 overflow-y-auto"
              style={{ height: '100%', maxHeight: '100%' }}
            >
              <Textarea
                value={documentContent}
                onChange={e => setDocumentContent(e.target.value)}
                className="h-full min-h-0 resize-none border-0 bg-transparent font-mono text-base leading-relaxed text-slate-900 focus:ring-0 focus:outline-none"
                placeholder="Start writing your document here..."
                style={{ minHeight: 0, height: '100%', maxHeight: '100%' }}
              />
            </div>
            {/* Editor Footer: Words and Characters */}
            <div className="flex items-center justify-between text-xs text-slate-400 mt-1 px-1">
              <span>Words: {documentContent.trim().length === 0 ? 0 : documentContent.trim().split(/\s+/).length}</span>
              <span>Characters: {documentContent.length}</span>
            </div>
          </div>
          {/* Live PDF Preview (auto-updating) */}
          <div
            className="flex flex-col min-w-0 min-h-0"
            style={{ width: '25vw', minWidth: '200px', maxWidth: '25vw', height: 'calc(100vh - 120px)', maxHeight: 'calc(100vh - 120px)', flex: '0 0 25vw', boxSizing: 'border-box', overflow: 'hidden' }}
          >
            <div className="flex items-center mb-1">
              <label className="text-xs text-slate-400">Live PDF Preview</label>
            </div>
            <div
              className="flex-1 min-h-0 min-w-0 rounded border border-slate-700 bg-[#181c20] font-mono text-base leading-relaxed text-slate-100 overflow-y-auto flex items-center justify-center"
              style={{ height: '100%', maxHeight: '100%' }}
            >
              <PDFPreviewer latex={documentContent} />
            </div>
          </div>




        </div>

        {/* Editor Footer (global) */}
        <div className="border-t border-slate-700 bg-slate-800/50 p-4">
          <div className="flex items-center justify-end text-xs text-slate-400">
            <span>Last saved: Just now</span>
          </div>
        </div>
      </div>

      {/* Right Sidebar - Chatbot */}
      <div className="flex w-96 flex-col border-l border-slate-700 bg-slate-800/50 backdrop-blur-sm">
        {/* Chat Header */}
        <div className="border-b border-slate-700 p-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500">
              <Bot className="h-4 w-4 text-white" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-white">
                AI Writing Assistant
              </h3>
              <p className="text-xs text-green-400">Online</p>
            </div>
          </div>
        </div>

        {/* Chat Messages */}
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map(message => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
                <div className="flex max-w-[85%] items-start gap-2">
                  {!message.isUser && (
                    <Avatar className="mt-1 h-6 w-6">
                      <AvatarFallback className="bg-green-600 text-xs text-white">
                        <Bot className="h-3 w-3" />
                      </AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={`rounded-lg p-3 text-sm ${
                      message.isUser
                        ? 'rounded-br-sm bg-blue-600 text-white'
                        : 'rounded-bl-sm bg-slate-700 text-slate-200'
                    }`}>
                    <p className="leading-relaxed">{message.content}</p>
                    <span className="mt-1 block text-xs opacity-70">
                      {message.timestamp.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </span>
                  </div>
                  {message.isUser && (
                    <Avatar className="mt-1 h-6 w-6">
                      <AvatarFallback className="bg-blue-600 text-xs text-white">
                        <User className="h-3 w-3" />
                      </AvatarFallback>
                    </Avatar>
                  )}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Chat Input */}
        <div className="border-t border-slate-700 p-4">
          <div className="flex gap-2">
            <Textarea
              placeholder="Ask me anything about your writing..."
              value={currentMessage}
              onChange={e => setCurrentMessage(e.target.value)}
              className="max-h-[120px] min-h-[60px] flex-1 resize-none border-slate-600 bg-slate-700/50 text-sm text-white placeholder-slate-400"
              onKeyDown={e => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault()
                  handleSendMessage()
                }
              }}
            />
            <Button
              onClick={handleSendMessage}
              className="self-end bg-blue-600 text-white hover:bg-blue-700"
              disabled={!currentMessage.trim()}>
              <Send className="h-4 w-4" />
            </Button>
          </div>

          {/* Quick Actions */}
          <div className="mt-3 flex gap-2">
            <Button
              size="sm"
              variant="outline"
              className="border-slate-600 text-xs text-slate-300 hover:bg-slate-700"
              onClick={() => setCurrentMessage('Help me improve this text')}>
              Improve Text
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="border-slate-600 text-xs text-slate-300 hover:bg-slate-700"
              onClick={() => setCurrentMessage('Check grammar and spelling')}>
              Grammar Check
            </Button>
          </div>
        </div>
    </div>
    </div>
    </>
  );
}
