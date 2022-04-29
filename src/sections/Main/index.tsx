import { Title, ContentText } from "@/global/css";
import { ContentGroup, ContentSelectedContainer, MainImg, 
  ContentBox, ContentSelected } from "./components";
import { data } from '@/assets/data/data'
import { useState } from "react";


export function Main() {

  // @ts-ignore
  const contents = JSON.stringify(data.objetivo.content).replace(/"/g,'').split(/\\n/g)
  


  
  return(
    <>
      <MainImg src="http://www.prosangue.sp.gov.br/uploads/banners/Banner%20site%20com%20postit.jpg" alt="Image" />

      <ContentGroup>
        <ContentBox>
          <Title isSelected={false}>Sobre</Title>
          <ContentText>
            {`Evento promovido por um grupo de  alunos do curso de Análise e desenvolvimento de Sistemas com o intuito  de promover e incentivar a doação de sangue entre os alunos da instituição de ensino, tendo como recompensa horas complementares.
Visando assim, arrecadar um número considerável de bolsas de sangue e ajudar a salvar vidas.`}
          </ContentText>
        </ContentBox>
        
        <ContentBox>
          <Title isSelected={false}>Pró-Sangue</Title>
          <ContentText>
            {data.org.summary}
          </ContentText>
        </ContentBox>

        {/* <ContentBox>
          <Title isSelected={false}>Objetivo</Title>
          <ContentText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ContentText>
        </ContentBox> */}
      </ContentGroup>
      
      <ContentSelectedContainer>
        <ContentSelected>
          
          <Title isSelected={true}>{
            data.objetivo.full_title
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