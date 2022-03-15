/**
 * 展示代码组件
 */
import React from 'react';
import type { FC } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { defaultStyle } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface IShowCodeProps {
  codeString: string;
}

const ShowCode: FC<IShowCodeProps> = (props) => {
  const { codeString = '' } = props;

  return (
    <SyntaxHighlighter language="javascript" style={defaultStyle}>
      {codeString}
    </SyntaxHighlighter>
  );
};

export default ShowCode;
