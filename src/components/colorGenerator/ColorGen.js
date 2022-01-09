import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import Values from 'values.js';

const ColorGen = () => {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [colorArray, setColorArray] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);

    try {
      let valueColor = new Values(color).all(10);
      setColorArray(valueColor);
    } catch {
      setError(true);
      console.log('wtf');
    }
  };

  useEffect(() => {
    let valueColor = new Values('#b00b69').all(10);
    setColorArray(valueColor);
  }, []);
  return (
    <>
      <section className='controls'>
        <h2>color generator</h2>
        <form action='' onSubmit={handleSubmit}>
          <input
            className={error ? `error` : null}
            type='text'
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder='#b00b69'
          />
          <button type='submit'>Submit</button>
        </form>
      </section>
      <section className='color-section'>
        {colorArray.map((item, index) => {
          const { hex } = item;
          return <SingleColor key={index} {...item} hex={hex} index={index} />;
        })}
      </section>
    </>
  );
};

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

export default ColorGen;
