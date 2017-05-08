import styled from 'styled-components';

export const MainTitle = styled.h1`
  text-decoration: none;
  text-align: center;
  font-weight: 800;
  color: red;
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
