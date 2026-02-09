import ReactMarkdown from 'react-markdown';


interface MarkdownContentProps {
    children: string;
}

export default function MarkdownContent({children}: MarkdownContentProps) {
    return (
        <article className={'markdown-content'}>
            <ReactMarkdown {...{children}}/>
        </article>
    )
}
