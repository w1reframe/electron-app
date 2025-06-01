import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Search, Plus, User } from 'lucide-react'

import { FolderTree, FolderNode } from './FolderTree'

export interface ChatSession {
  id: string
  title: string
  lastMessage: string
  timestamp: Date
}


interface SidebarProps {
  chatSessions: ChatSession[];
  collapsed: boolean;
  onCollapse: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ chatSessions, collapsed, onCollapse }) => {
  // Sidebar content toggle state
  const [sidebarView, setSidebarView] = useState<'folders' | 'chats'>('folders');

  // Mock folder structure for demonstration
  const mockFolderTree: FolderNode = {
    id: 'root',
    name: 'Documents',
    type: 'folder',
    children: [
      {
        id: 'f1',
        name: 'Projects',
        type: 'folder',
        children: [
          { id: 'file1', name: 'Draft1.tex', type: 'file' },
          { id: 'file2', name: 'Draft2.tex', type: 'file' },
        ],
      },
      {
        id: 'f2',
        name: 'Notes',
        type: 'folder',
        children: [
          { id: 'file3', name: 'MeetingNotes.tex', type: 'file' },
        ],
      },
      { id: 'file4', name: 'Summary.tex', type: 'file' },
    ],
  };

  return (
    <div className={`flex flex-col border-r border-slate-700 bg-slate-800/50 backdrop-blur-sm transition-all duration-300 ${collapsed ? 'w-16' : 'w-80'}`}>
      <div>
        {/* Header + New Document + Collapse Button */}
        {!collapsed ? (
          <div className="border-b border-slate-700 p-4">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500">
                <span className="text-sm font-bold text-white">W</span>
              </div>
              <span className="text-lg font-semibold text-white">WireFrame</span>
            </div>
            <div className="flex items-center gap-2">
              <Button className="flex-1 bg-blue-600 text-white hover:bg-blue-700">
                <Plus className="mr-2 h-4 w-4" />
                New Document
              </Button>
              <Button
                size="icon"
                variant="ghost"
                onClick={onCollapse}
                aria-label="Toggle sidebar"
                className="bg-blue-600 text-white hover:bg-blue-700"
                style={{ minWidth: 36, minHeight: 36 }}
              >
                <span className="text-lg">←</span>
              </Button>
            </div>
            {/* Toggle buttons */}
            <div className="mt-4 flex gap-2">
              <Button
                variant={sidebarView === 'folders' ? 'default' : 'outline'}
                className={`flex-1 ${sidebarView === 'folders' ? 'bg-blue-700 text-white' : 'bg-slate-700 text-slate-300'}`}
                onClick={() => setSidebarView('folders')}
              >
                Folder Structure
              </Button>
              <Button
                variant={sidebarView === 'chats' ? 'default' : 'outline'}
                className={`flex-1 ${sidebarView === 'chats' ? 'bg-blue-700 text-white' : 'bg-slate-700 text-slate-300'}`}
                onClick={() => setSidebarView('chats')}
              >
                Previous Chats
              </Button>
            </div>
          </div>
        ) : (
          <div className="border-b border-slate-700 p-4 flex flex-col items-center">
            <Button
              size="icon"
              variant="ghost"
              onClick={onCollapse}
              aria-label="Expand sidebar"
              className="bg-blue-600 text-white hover:bg-blue-700"
              style={{ minWidth: 36, minHeight: 36 }}
            >
              <span className="text-lg">→</span>
            </Button>
          </div>
        )}

        {/* Search */}
        {!collapsed && (
          <div className="border-b border-slate-700 p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-slate-400" />
              <Input
                placeholder={sidebarView === 'folders' ? 'Search Folders/Files' : 'Search Documents'}
                className="border-slate-600 bg-slate-700/50 pl-10 text-white placeholder-slate-400"
              />
            </div>
          </div>
        )}

        {/* Main Sidebar Content */}
        {!collapsed && (
          <div className="flex-1 p-4">
            {sidebarView === 'folders' ? (
              <>
                <h3 className="mb-3 text-sm font-medium text-slate-300">Folder Structure</h3>
                <ScrollArea className="h-full pr-2">
                  <FolderTree root={mockFolderTree} />
                </ScrollArea>
              </>
            ) : (
              <>
                <h3 className="mb-3 text-sm font-medium text-slate-300">Recent Documents</h3>
                <ScrollArea className="h-full">
                  <div className="space-y-2">
                    {chatSessions.map(session => (
                      <div
                        key={session.id}
                        className="cursor-pointer rounded-lg bg-slate-700/30 p-3 transition-colors hover:bg-slate-700/50">
                        <h4 className="truncate text-sm font-medium text-white">{session.title}</h4>
                        <p className="mt-1 truncate text-xs text-slate-400">{session.lastMessage}</p>
                        <span className="text-xs text-slate-500">{session.timestamp.toLocaleDateString()}</span>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </>
            )}
          </div>
        )}

        {/* User Profile */}
        {!collapsed && (
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
        )}
      </div>
    </div>
  );
}
