import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/atom-one-dark.css';
import gfm from 'remark-gfm';

export default function MarkdownToHtml({ content }: { content: string }) {
  return (
    <div className='editor-wrapper'>
      <ReactMarkdown rehypePlugins={[rehypeHighlight]} remarkPlugins={[gfm]} className="prose prose-zinc max-w-none dark:prose-invert">{content}</ReactMarkdown>
    </div>
  );
}


