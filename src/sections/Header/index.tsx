import { TopHeader, TopHeaderText, 
  InstagramIcon, FacebookIcon } from "./components";
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <>
      <TopHeader>

        <div>
        <TopHeaderText>Entre em contato conosco: </TopHeaderText>
        <a href="https://www.instagram.com/arrecadasangue22/"><InstagramIcon /></a>
        <a href="https://www.facebook.com/Arrecada-Sangue-2022-106280258721144/"><FacebookIcon /></a>
        </div>

        <Link to="/iso"><TopHeaderText>ISO 9001</TopHeaderText></Link>

      </TopHeader>
      {/* <MainHeader /> */}
    </>
  );
}