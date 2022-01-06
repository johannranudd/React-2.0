import React, { useState } from 'react';

const Forms = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [addPerson, setAddPerson] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && email) {
      const personObject = {
        id: new Date().getTime().toString(),
        firstName,
        email,
      };
      setAddPerson((prev) => {
        return [...prev, personObject];
      });
      setFirstName('');
      setEmail('');
    } else {
      console.log('empty');
    }
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
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className='form-control'>
          <label htmlFor='email'>Email : </label>
          <input
            type='text'
            id='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type='submit' onClick={handleSubmit}>
          Click
        </button>
      </form>
      {addPerson.map((item) => {
        const { id, firstName, email } = item;
        return (
          <div key={id} className='listItem'>
            <h4>{firstName}</h4>
            <p>{email}</p>
          </div>
        );
      })}
    </article>
  );
};

export default Forms;

//
//
//
//
//
//
//
//

//
//
//
//

//
//
//
//
//
//
//
//

//
//
//
//

//
//
//
//
//
//
//
//

//
//
//
//

//
//
//
//
//
//
//
//

//
//
//
//

// const Forms = () => {
//   const [firstName, setFirstName] = useState('');
//   const [email, setEmail] = useState('');
//   const [addPerson, setAddPerson] = useState([]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (firstName && email) {
//       const person = { id: new Date().getTime().toString(), firstName, email };
//       setAddPerson((prev) => {
//         return [...prev, person];
//       });
//       setFirstName('');
//       setEmail('');
//     } else {
//       console.log('empry');
//     }
//   };
//   return (
//     <article>
//       <form action='' className='form'>
//         <div className='form-control'>
//           <label htmlFor='firstName'>Name : </label>
//           <input
//             type='text'
//             id='firstName'
//             name='firstName'
//             value={firstName}
//             onChange={(e) => setFirstName(e.target.value)}
//           />
//         </div>

//         <div className='form-control'>
//           <label htmlFor='email'>email : </label>
//           <input
//             type='text'
//             id='email'
//             name='email'
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>

//         <button type='submit' onClick={handleSubmit}>
//           add person
//         </button>
//       </form>
//       {addPerson.map((item) => {
//         const { id, firstName, email } = item;
//         return (
//           <div className='listItem' key={id}>
//             <h4>{firstName}</h4>
//             <p>{email}</p>
//           </div>
//         );
//       })}
//     </article>
//   );
// };
