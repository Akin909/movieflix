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
  box-shadow: 1px 1px 0px white;
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
  align-items: center;
  grid-gap: 1em;
`;

export const Title = styled(MainTitle)`
  color: white;
  text-shadow: 0 1px 1px black,
                0 1.4px 1.4px black;
`;

export const Loading = styled.div`
  background-color: white;
  box-shadow: 0 1px 1px grey;
`;

export const Iframe = styled.iframe`
  width: 100%;
  margin: 0;
  height: 30em;
  border: 0;
`;

export const Button = styled.button`
  border:none;
  box-shadow: 0 1px 1px grey;
  width: 50%;
`;
