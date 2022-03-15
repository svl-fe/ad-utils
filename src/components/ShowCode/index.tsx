import React from 'react';
import type { FC } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface IShowCodeProps {
  codeString: string;
}

const ShowCode: FC<IShowCodeProps> = (codeString) => {
  return (
    <SyntaxHighlighter language="javascript" style={docco}>
      {codeString}
    </SyntaxHighlighter>
  );
};

export default ShowCode;
