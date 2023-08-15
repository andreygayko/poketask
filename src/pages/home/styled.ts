import styled from "@emotion/styled";

export const Wrapper = styled.div`
  padding: 1rem;
  gap: 1rem;
  display: flex;
  flex-direction: column;
  background: linear-gradient(red, transparent),
    linear-gradient(to top left, lime, transparent),
    linear-gradient(to top right, blue, transparent);
  background-blend-mode: screen;
  min-height: 100vh;
`;

export const Message = styled.h1`
  margin: auto;
`;
