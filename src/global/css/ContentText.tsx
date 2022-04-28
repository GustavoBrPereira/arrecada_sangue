import styled from "styled-components";

interface ContentTextProps {
  isSelected?: boolean;
}

export const ContentText = styled.p<ContentTextProps>`
  color: #000;
  font-family: 'Bahnschrift';
  font-size: 16px;
  font-weight: 500;

  padding: 0;
  margin: ${props => props.isSelected ? '0' : '0 15px'};
`;
