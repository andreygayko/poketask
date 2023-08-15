import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  width: 100%;
  height: 420px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
`;

export const Image = styled.img`
  object-fit: cover;
  max-width: 300px;
  max-height: 300px;
  width: 100%;
  margin: 0 auto;
`;

export const Title = styled.h3`
  text-align: center;
`;

export const Description = styled.p`
  margin-block-start: 0.2rem;
  margin-block-end: 0.2rem;
  margin-inline-start: 1rem;
`;
