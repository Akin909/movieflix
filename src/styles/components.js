import styled from 'styled-components';

export const MainTitle = styled.h1`
  text-decoration: none;
  text-align: center;
  font-weight: 800;
  color: red;
  display:flex;
`;

export const Container = styled.div`
  display: grid;
  background-color:#141414;
`;

export const Card = styled.li`
  padding: 0.5rem;
  margin: 0.5rem;
  height: 20em;
  background-color: #848380;
  box-shadow: 3px 3px 1px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  &:hover {
    
  }
`;
export const Blurb = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  margin: 0.3rem;
  padding: 0.3rem;
  background: hsla(0, 0%, 0%, 0.6);
  height: 100%;
`;

export const CardContainer = styled.ul`
  padding: 0;
  margin: 0.5rem;
  display: grid;
  list-style-type: none;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  justify-content: space-evenly;
  align-items: center;
  grid-gap: 1em;
`;

export const Title = styled(MainTitle)`
  color: white;
  text-shadow: 0 1px 1px black,
                0 1.4px 1.4px black;
  text-align: center;
  padding-left: 0.4rem;
`;

export const Loading = styled.div`
  box-shadow: 0 1px 1px grey;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  height: 90vh;
`;

export const Iframe = styled.iframe`
  width: 95%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0.5rem;
  height: 30em;
  border: 0;
`;

export const Button = styled.button`
  border:none;
  box-shadow: 0 1px 1px grey;
  width: 50%;
`;

export const Input = styled.input`
  border: none;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.5);
  margin: 1rem 0rem;
  width: 50%;
  height: 2rem;
`;
