/**
 * 示例展示组件
 */
import React from 'react';
import type { FC } from 'react';
import ShowCode from '../ShowCode';

import './index.less';

interface IShowCompProps {
  name: string;
  example: Array<string> | string;
}

const ShowComp: FC<IShowCompProps> = (props) => {
  const { example = '' } = props;

  return (
    <div className="svl-ad-utils-show-comp">
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
