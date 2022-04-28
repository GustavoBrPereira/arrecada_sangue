import styled from "styled-components";

interface TextProps {
  readonly sizeIsSmall: boolean;
}

export const Text = styled.p<TextProps>`
  color: #FFF;
  font-family: 'Dotum';
  font-weight: 100;

  padding: 0;
  margin: 0;
`;