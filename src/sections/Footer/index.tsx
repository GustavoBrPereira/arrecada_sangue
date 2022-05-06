import { FooterComponent } from './components'
import logo from '../../assets/img/logo.jpeg'

export function Footer() {
  return (
    <FooterComponent>
      <img src={logo} alt="" />
    </FooterComponent>
  );
}