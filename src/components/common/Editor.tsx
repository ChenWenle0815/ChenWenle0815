import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
export default function MarkdownToHtml({ content }: { content: string }) {
  return (
    <div className='editor-wrapper'>
      <ReactMarkdown remarkPlugins={[gfm]}>{content}</ReactMarkdown>
    </div>
  );
}


