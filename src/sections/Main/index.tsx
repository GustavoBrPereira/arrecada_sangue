import { Title, ContentText } from "@/global/css";
import { ContentGroup, ContentSelectedContainer, MainImg, 
  ContentBox, ContentSelected } from "./components";
import { data } from '@/assets/data/data'
import { useState } from "react";


export function Main() {
  const [contentToShow, setContentToShow] = useState(data.projeto)

  // @ts-ignore
  const contents = JSON.stringify(contentToShow.content).replace(/"/g,'').split(/\\n/g)
  


  const imgUrl = `https://hospital-luziania.org.br/wp-content/uploads/2020/11/WhatsApp-Image-2020-11-25-at-15.53.01.jpeg`
  
  return(
    <>
      <MainImg src={imgUrl} alt="Image" />

      <ContentGroup>
        <ContentBox onClick={
          () => setContentToShow(data.projeto)
        }>
          <Title isSelected={false}>
            {data.projeto.simple_tilte}
          </Title>

          <ContentText>
            {data.projeto.summary}
          </ContentText>
        </ContentBox>
        
        <ContentBox onClick={
          () => setContentToShow(data.org)
        }>
          <Title isSelected={false}>
            {data.org.simple_tilte}
          </Title>

          <ContentText>
            {data.org.summary}
          </ContentText>
        </ContentBox>

        <ContentBox onClick={
          () => setContentToShow(data.objetivo)
        }>
          <Title isSelected={false}>
            {data.objetivo.simple_tilte}
          </Title>

          <ContentText>
            {data.objetivo.summary}
          </ContentText>
        </ContentBox>
      </ContentGroup>
      
      <ContentSelectedContainer>
        <ContentSelected>
          
          <Title isSelected={true}>{
            contentToShow.full_title
          }</Title>

          {contents.map(content => (
            <ContentText isSelected>
              {content}
            </ContentText>
          ))}
          
        </ContentSelected>
      </ContentSelectedContainer>
    </>
  );
}