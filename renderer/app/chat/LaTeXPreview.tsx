import React from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

interface LaTeXPreviewProps {
  value: string;
}

export const LaTeXPreview: React.FC<LaTeXPreviewProps> = ({ value }) => {
  let html = '';
  try {
    html = katex.renderToString(value, {
      throwOnError: false,
      displayMode: true,
    });
  } catch (e) {
    html = `<span style=\"color:red;\">${(e as Error).message}</span>`;
  }
  return (
    <div
      className="katex-preview p-4 bg-slate-900 rounded min-h-[4rem]"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};
