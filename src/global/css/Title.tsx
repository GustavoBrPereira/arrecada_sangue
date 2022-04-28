import styled from "styled-components";

interface TitleProps {
  isSelected: boolean;
}

export const Title = styled.p<TitleProps>`
  color: #700201;
  font-family: 'Bahnschrift';
  font-size: ${props => props.isSelected ? '80px' : '50px'};
  font-weight: ${props => props.isSelected ? 500 : 700};

  margin: 20px 0px;
  padding: 0;
`;