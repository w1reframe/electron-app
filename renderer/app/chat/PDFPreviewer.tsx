import React from 'react';

// Live PDF Preview component using latexonline.cc
export function PDFPreviewer({ latex }: { latex: string }) {
  const [pdfUrl, setPdfUrl] = React.useState<string | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (!latex.trim()) {
      setPdfUrl(null);
      setError(null);
      return;
    }
    let cancelled = false;
    setError(null);
    const timeout = setTimeout(async () => {
      try {
        const response = await fetch('/api/latex-to-pdf', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/pdf',
          },
          body: JSON.stringify({ latex }),
        });
        if (!response.ok) {
          let errorMsg = 'LaTeX compilation failed.';
          try {
            const data = await response.json();
            if (data?.error) errorMsg += '\n' + data.error;
          } catch {}
          if (!cancelled) {
            setPdfUrl(null);
            setError(errorMsg);
          }
          return;
        }
        const blob = await response.blob();
        const blobUrl = URL.createObjectURL(blob);
        if (!cancelled) {
          setPdfUrl(blobUrl);
          setError(null);
        }
        // Clean up old blob URLs
        return () => {
          URL.revokeObjectURL(blobUrl);
        };
      } catch (e: any) {
        if (!cancelled) {
          setPdfUrl(null);
          setError('Error: ' + (e?.message || e));
        }
      }
    }, 700);
    return () => {
      cancelled = true;
      clearTimeout(timeout);
    };
  }, [latex]);

  if (error) {
    return (
      <div className="w-full h-full flex items-center justify-center p-4 text-red-400 text-xs whitespace-pre-wrap">
        {error}
      </div>
    );
  }
  if (!pdfUrl) {
    return (
      <div className="w-full h-full flex items-center justify-center text-slate-400 text-xs">
        PDF preview will appear here.
      </div>
    );
  }
  return (
    <iframe
      title="PDF Preview"
      src={pdfUrl}
      className="w-full h-full rounded"
      style={{ border: 'none', minHeight: 0, minWidth: 0 }}
    />
  );
}
