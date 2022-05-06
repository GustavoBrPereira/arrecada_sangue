import { TopHeader, MainHeader, TopHeaderText, 
  InstagramIcon, FacebookIcon } from "./components";

export function Header() {
  return (
    <>
      <TopHeader>
        
        <TopHeaderText>Entre em contato conosco: </TopHeaderText>
        <a href="https://www.instagram.com/arrecadasangue22/"><InstagramIcon /></a>
        <a href="https://www.facebook.com/Arrecada-Sangue-2022-106280258721144/"><FacebookIcon /></a>

      </TopHeader>
      {/* <MainHeader /> */}
    </>
  );
}