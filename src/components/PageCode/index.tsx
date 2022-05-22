import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface PageCodeProps {
	code: string;
}

const PageCode: React.FC<PageCodeProps> = ({ code }) => {
	return (
		<SyntaxHighlighter
			language="javascript"
			showLineNumbers
			style={monokaiSublime}
		>
			{code}
		</SyntaxHighlighter>
	);
};

export default PageCode;
