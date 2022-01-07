import React, { useState } from 'react';

const MultipleInputs = () => {
  const [person, setPerson] = useState({ firstName: '', email: '', age: '' });
  const [peopleList, setPeopleList] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.firstName && person.email && person.age) {
      const newPerson = { ...person, id: new Date().getTime().toString() };
      setPeopleList([...peopleList, newPerson]);
      setPerson({ firstName: '', email: '', age: '' });
    }
  };

  return (
    <article>
      <form action=''>
        <div className='form-control'>
          <label htmlFor='firstName'>Name : </label>
          <input
            type='text'
            id='firstName'
            name='firstName'
            value={person.firstName}
            onChange={handleChange}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='email'>Email : </label>
          <input
            type='text'
            id='email'
            name='email'
            value={person.email}
            onChange={handleChange}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='age'>Age : </label>
          <input
            type='text'
            id='age'
            name='age'
            value={person.age}
            onChange={handleChange}
          />
        </div>

        <button type='submit' onClick={handleSubmit}>
          submit
        </button>
      </form>
      {peopleList.map((item) => {
        const { id, firstName, email, age } = item;
        return (
          <div key={id} className='listItem'>
            <h4>{firstName}</h4>
            <p>{email}</p>
            <p>{age}</p>
          </div>
        );
      })}
    </article>
  );
};

export default MultipleInputs;

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

// const MultipleInputs = () => {
//   const [person, setPerson] = useState({ firstName: '', email: '', age: '' });
//   const [people, setPeople] = useState([]);

//   const changeHandler = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     setPerson({ ...person, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (person.firstName && person.email && person.age) {
//       const newPerson = { ...person, id: new Date().getTime().toString() };
//       setPeople([...people, newPerson]);
//       setPerson({ firstName: '', email: '', age: '' });
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
//             value={person.firstName}
//             onChange={changeHandler}
//           />
//         </div>
//         <div className='form-control'>
//           <label htmlFor='email'>Email : </label>
//           <input
//             type='text'
//             id='email'
//             name='email'
//             value={person.email}
//             onChange={changeHandler}
//           />
//         </div>
//         <div className='form-control'>
//           <label htmlFor='age'>Age : </label>
//           <input
//             type='text'
//             id='age'
//             name='age'
//             value={person.age}
//             onChange={changeHandler}
//           />
//         </div>

//         <button type='submit' onClick={handleSubmit}>
//           submit
//         </button>
//       </form>
//       {people.map((item) => {
//         const { id, firstName, email, age } = item;
//         return (
//           <div className='listItem' key={id}>
//             <h4>{firstName}</h4>
//             <p>{age}</p>
//             <p>{email}</p>
//           </div>
//         );
//       })}
//     </article>
//   );
// };
