import styled from 'styled-components'
import { Text } from '@/global/css'
import { FaInstagram, FaFacebook } from "react-icons/fa";

export const TopHeader = styled.div`
  width: (100vw - 150px);
  height: 35px;

  background-color: #9B0107;

  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 0px 150px;
`;

export const TopHeaderText = styled(Text)`
  font-size: 15px;
`;

export const InstagramIcon = styled(FaInstagram)`
  color: #FFF;
  margin-left: 10px;
`;

export const FacebookIcon = styled(FaFacebook)`
  color: #FFF;
  margin-left: 10px;
`;