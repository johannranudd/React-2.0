import styled from 'styled-components';

export const StyledDiv = styled.div`
  width: 100%;
  max-width: 1500px;
  margin: auto;
  .controls {
    margin: 2rem;
    h2 {
      padding-right: 2rem;
      font-size: 2rem;
    }
    form {
      input {
        padding: 0.7rem 1rem;
        border: none;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        font-size: 1.2rem;
      }
      .error {
        border: 2px solid red;
      }
      button {
        padding: 0.7rem 1rem;
        background: lightblue;
        border: none;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        background: #49a6e9;
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
      }
    }
  }

  /* media */
  @media (min-width: 768px) {
    .controls {
      display: flex;
      align-items: center;
      h2 {
        font-size: 2rem;
      }
      form {
        input {
          width: 250px;
        }
      }
    }
  }

  /* colors */
  .color-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    .color-card {
      padding: 1rem;
      p {
        margin: 0;
      }
    }
  }
  /* media */
  @media (min-width: 660px) {
    .color-card {
      height: 80px;
    }
  }
  @media (min-width: 800px) {
    .color-card {
      height: 100px;
    }
  }
  @media (min-width: 1000px) {
    .color-card {
      height: 150px;
    }
  }
`;
