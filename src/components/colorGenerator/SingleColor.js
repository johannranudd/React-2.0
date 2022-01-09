import React, { useState } from 'react';

const SingleColor = ({ hex, weight }) => {
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(`#${hex}`);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <article
      className='color-card'
      style={{ backgroundColor: `#${hex}` }}
      onClick={handleClick}
    >
      <div className='color-info'>
        <p>{`${weight}%`}</p>
        <p>{`#${hex}`}</p>
        {copied && <p>copied to clipboard</p>}
      </div>
    </article>
  );
};

export default SingleColor;
