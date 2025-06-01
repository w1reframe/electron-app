import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs'; // Ensure this runs on the server, not edge

export async function POST(req: NextRequest) {
  try {
    const { latex } = await req.json();
    if (!latex || typeof latex !== 'string') {
      return NextResponse.json({ error: 'Missing or invalid LaTeX code.' }, { status: 400 });
    }

    // If the input does not look like a full LaTeX document, wrap it in a minimal template
    let latexToCompile = latex;
    if (!/\\documentclass\s*\[?.*\]?\s*\{.*\}/.test(latex)) {
      latexToCompile = `\\documentclass{article}\n\\usepackage[utf8]{inputenc}\n\\begin{document}\n${latex}\n\\end{document}`;
    }

    // Use the correct latexonline.cc API for compiling plain text
    const encoded = encodeURIComponent(latexToCompile);
    const url = `https://latexonline.cc/compile?text=${encoded}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/pdf',
      },
    });

    if (!response.ok) {
      let errorMsg = 'Failed to generate PDF.';
      try {
        const text = await response.text();
        if (text) errorMsg += '\n' + text;
      } catch {}
      return NextResponse.json({ error: errorMsg }, { status: 500 });
    }

    const pdfBuffer = await response.arrayBuffer();
    return new NextResponse(Buffer.from(pdfBuffer), {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'inline; filename="output.pdf"',
        'Cache-Control': 'no-store',
      },
    });
  } catch (err) {
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}
