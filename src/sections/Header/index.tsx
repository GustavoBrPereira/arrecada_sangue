import { TopHeader, MainHeader, TopHeaderText, 
  InstagramIcon, FacebookIcon } from "./components";

export function Header() {
  return (
    <>
      <TopHeader>
        <TopHeaderText sizeIsSmall>Entre em contato conosco: </TopHeaderText>
        <InstagramIcon
          // onClick={}
        /> 
        <FacebookIcon />
      </TopHeader>
      <MainHeader />
    </>
  );
}