/**
 * 示例展示组件
 */
import React from 'react';
import type { FC } from 'react';
import ShowCode from '../ShowCode';

import './index.less';

interface IShowCompProps {
  name: string;
  argList: Record<string, any>;
  example: Array<string> | string;
}

const ShowComp: FC<IShowCompProps> = (props) => {
  const { argList, example = '' } = props;

  const showArgList = () => {
    let nodes = [];
    for (let key in argList) {
      nodes.push(
        <div key={key}>
          <code className="svl-ad-utils-show-label">{key}:</code>
          <span>{argList[key]}</span>
        </div>,
      );
    }

    return nodes;
  };

  return (
    <div className="svl-ad-utils-show-comp">
      <h3>参数</h3>
      {showArgList()}
      <h3>示例</h3>
      <div>
        {typeof example === 'string' ? (
          <ShowCode codeString={example} />
        ) : (
          example.map((item, idx) => <ShowCode key={idx} codeString={item} />)
        )}
      </div>
    </div>
  );
};

export default ShowComp;
