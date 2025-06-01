import React, { useState } from 'react';

// Types for folder/file nodes
export interface FolderNode {
  id: string;
  name: string;
  type: 'folder' | 'file';
  children?: FolderNode[];
}

interface FolderTreeProps {
  root: FolderNode;
  onFileOpen?: (file: FolderNode) => void;
  onDelete?: (node: FolderNode) => void;
}

export const FolderTree: React.FC<FolderTreeProps> = ({ root, onFileOpen, onDelete }) => {
  const [expanded, setExpanded] = useState<{ [id: string]: boolean }>({});

  const toggle = (id: string) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const renderNode = (node: FolderNode) => {
    if (node.type === 'folder') {
      return (
        <div key={node.id} className="ml-2">
          <div className="flex items-center cursor-pointer" onClick={() => toggle(node.id)}>
            <span className="mr-1">{expanded[node.id] ? '📂' : '📁'}</span>
            <span className="font-medium text-slate-200">{node.name}</span>
            {onDelete && (
              <button className="ml-2 text-xs text-red-400 hover:text-red-600" onClick={e => { e.stopPropagation(); onDelete(node); }}>Delete</button>
            )}
          </div>
          {expanded[node.id] && node.children && (
            <div className="ml-4 border-l border-slate-700 pl-2">
              {node.children.map(child => renderNode(child))}
            </div>
          )}
        </div>
      );
    } else {
      return (
        <div key={node.id} className="ml-2 flex items-center cursor-pointer hover:bg-slate-700/40 rounded px-1" onClick={() => onFileOpen && onFileOpen(node)}>
          <span className="mr-1">📄</span>
          <span className="text-slate-300">{node.name}</span>
          {onDelete && (
            <button className="ml-2 text-xs text-red-400 hover:text-red-600" onClick={e => { e.stopPropagation(); onDelete(node); }}>Delete</button>
          )}
        </div>
      );
    }
  };

  return (
    <div className="text-sm">
      {renderNode(root)}
    </div>
  );
};
