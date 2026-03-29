import styled from "@emotion/styled";
import ReactMarkdown from 'react-markdown';

interface MarkdownContentProps {
    children: string;
}

const Article = styled.article`
`;

export default function MarkdownContent({children}: MarkdownContentProps) {
    return (
        <Article>
            <ReactMarkdown {...{children}} />
        </Article>
    )
}