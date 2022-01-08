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
          const { rgb } = item;
          return (
            <div
              className='color-card'
              key={index}
              style={{ backgroundColor: `rgb(${rgb})` }}
            >
              {rgb}
            </div>
          );
        })}
      </section>
    </>
  );
};

export default ColorGen;
