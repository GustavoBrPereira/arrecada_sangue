import { Title, ContentText } from "@/global/css";
import { ContentGroup, ContentSelectedContainer, MainImg, 
  ContentBox, ContentSelected } from "./components";
import { data } from '@/assets/data/data'


export function Main() {
  const contents = JSON.stringify(data.org.content).replace(/"/g,'').split(/\\n/g)

  
  console.log(contents)
  return(
    <>
      <MainImg src="src/assets/img/mainImg.jpg" alt="Image" />

      <ContentGroup>
        <ContentBox>
          <Title isSelected={false}>Sobre</Title>
          <ContentText>
            {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
          </ContentText>
        </ContentBox>
        
        <ContentBox>
          <Title isSelected={false}>Pró-Sangue</Title>
          <ContentText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ContentText>
        </ContentBox>

        <ContentBox>
          <Title isSelected={false}>Objetivo</Title>
          <ContentText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ContentText>
        </ContentBox>
      </ContentGroup>
      
      {
        <ContentSelectedContainer>
          <ContentSelected>
            <Title isSelected={true}>{data.org.full_title}</Title>

            {contents.map(content => (
              <ContentText isSelected>
                {content}
              </ContentText>
            ))}
            
          </ContentSelected>
        </ContentSelectedContainer>
      }
    </>
  );
}