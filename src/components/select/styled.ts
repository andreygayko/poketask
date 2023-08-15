import styled from "@emotion/styled";

export const Wrapper = styled.div``;

export const Input = styled.input`
  border-radius: 0.5rem;
  border: none;
  height: 100%;
  width: 300px;
  padding: 0.5rem;
  background-color: transparent;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
`;

export const Options = styled.ul`
  width: 280px;
  overflow: auto;
  max-height: 400px;
  position: absolute;
  background: rgba(0, 0, 0, 0.8);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
  color: #fff;
  cursor: pointer;
`;
