import styled from 'styled-components'

export const ContentGroup = styled.div`
  width: 100%;
  max-width: 100vw;
  height: 450px;

  /* background-color: lightblue; */
  margin: 0;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ContentBox = styled.div`
  width: 300px;
  height: 400px;

  margin: 0px 30px;
  background-color: white;

  border: 2px inset #240000;
  box-shadow: 5px 10px #240000;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-y: auto;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;