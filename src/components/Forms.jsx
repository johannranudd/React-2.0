import React, { useEffect, useState } from 'react';

const Forms = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [addPerson, setAddPerson] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('ello');
    setAddPerson(true);
  };
  return (
    <article>
      <form action='' className='form'>
        <div className='form-control'>
          <label htmlFor='firstName'>Name : </label>
          <input
            type='text'
            id='firstName'
            name='firstName'
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className='form-control'>
          <label htmlFor='email'>email : </label>
          <input
            type='text'
            id='email'
            name='email'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button type='submit' onClick={handleSubmit}>
          add person
        </button>
      </form>
      <h1>{addPerson && firstName}</h1>
      <h1>{addPerson && email}</h1>
    </article>
  );
};

export default Forms;
