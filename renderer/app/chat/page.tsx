'use client'

import { useState } from 'react'
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
  ])

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
    <div className="flex min-h-screen bg-gradient-to-br from-black via-slate-900 to-black">
      {/* Left Sidebar - Dashboard */}
      <div className="flex w-80 flex-col border-r border-slate-700 bg-slate-800/50 backdrop-blur-sm">
        {/* Header */}
        <div className="border-b border-slate-700 p-4">
          <div className="mb-4 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500">
              <span className="text-sm font-bold text-white">W</span>
            </div>
            <span className="text-lg font-semibold text-white">WireFrame</span>
          </div>

          <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
            <Plus className="mr-2 h-4 w-4" />
            New Document
          </Button>
        </div>

        {/* Search */}
        <div className="border-b border-slate-700 p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-slate-400" />
            <Input
              placeholder="Search Documents"
              className="border-slate-600 bg-slate-700/50 pl-10 text-white placeholder-slate-400"
            />
          </div>
        </div>

        {/* Previous Documents */}
        <div className="flex-1 p-4">
          <h3 className="mb-3 text-sm font-medium text-slate-300">
            Recent Documents
          </h3>
          <ScrollArea className="h-full">
            <div className="space-y-2">
              {chatSessions.map(session => (
                <div
                  key={session.id}
                  className="cursor-pointer rounded-lg bg-slate-700/30 p-3 transition-colors hover:bg-slate-700/50">
                  <h4 className="truncate text-sm font-medium text-white">
                    {session.title}
                  </h4>
                  <p className="mt-1 truncate text-xs text-slate-400">
                    {session.lastMessage}
                  </p>
                  <span className="text-xs text-slate-500">
                    {session.timestamp.toLocaleDateString()}
                  </span>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* User Profile */}
        <div className="border-t border-slate-700 p-4">
          <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder.svg?height=32&width=32" />
              <AvatarFallback className="bg-blue-600 text-white">
                <User className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="text-sm font-medium text-white">John Doe</p>
              <p className="text-xs text-slate-400">Premium Writer</p>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Section - Text Editor */}
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
              <Button
                size="sm"
                variant="ghost"
                className="text-slate-400 hover:bg-slate-700 hover:text-white">
                <Bold className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-slate-400 hover:bg-slate-700 hover:text-white">
                <Italic className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-slate-400 hover:bg-slate-700 hover:text-white">
                <Underline className="h-4 w-4" />
              </Button>
            </div>

            <div className="mr-4 flex gap-1">
              <Button
                size="sm"
                variant="ghost"
                className="text-slate-400 hover:bg-slate-700 hover:text-white">
                <AlignLeft className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-slate-400 hover:bg-slate-700 hover:text-white">
                <AlignCenter className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-slate-400 hover:bg-slate-700 hover:text-white">
                <AlignRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="mr-4 flex gap-1">
              <Button
                size="sm"
                variant="ghost"
                className="text-slate-400 hover:bg-slate-700 hover:text-white">
                <List className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-slate-400 hover:bg-slate-700 hover:text-white">
                <ListOrdered className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-slate-400 hover:bg-slate-700 hover:text-white">
                <Quote className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex gap-1">
              <Button
                size="sm"
                variant="ghost"
                className="text-slate-400 hover:bg-slate-700 hover:text-white">
                <Link className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-slate-400 hover:bg-slate-700 hover:text-white">
                <ImageIcon className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-slate-400 hover:bg-slate-700 hover:text-white">
                <Code className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-slate-400 hover:bg-slate-700 hover:text-white">
                <Upload className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Text Editor Area */}
        <div className="flex-1 p-6">
          <Textarea
            value={documentContent}
            onChange={e => setDocumentContent(e.target.value)}
            className="h-full min-h-[500px] w-full resize-none border-slate-300 bg-white/95 font-mono text-base leading-relaxed text-slate-900"
            placeholder="Start writing your document here..."
          />
        </div>

        {/* Editor Footer */}
        <div className="border-t border-slate-700 bg-slate-800/50 p-4">
          <div className="flex items-center justify-between text-sm text-slate-400">
            <span>
              Words:{' '}
              {
                documentContent.split(/\s+/).filter(word => word.length > 0)
                  .length
              }
            </span>
            <span>Characters: {documentContent.length}</span>
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
  )
}
