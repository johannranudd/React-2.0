import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import Values from 'values.js';
import SingleColor from './SingleColor';
import { StyledDiv } from './Div.styled';

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
      console.log(
        'not a valid color: please enter a color ex: #007300 or blue'
      );
    }
  };

  useEffect(() => {
    let valueColor = new Values('#007300').all(10);
    setColorArray(valueColor);
  }, []);
  return (
    <StyledDiv>
      <section className='controls'>
        <h2>Color Generator</h2>
        <form action='' onSubmit={handleSubmit}>
          <input
            className={error ? `error` : null}
            type='text'
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder='#007300'
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
    </StyledDiv>
  );
};

export default ColorGen;
