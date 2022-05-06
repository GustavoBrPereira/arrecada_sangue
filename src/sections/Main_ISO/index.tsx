import React from 'react'
import { ContentSelectedContainer } from '@/sections/Main/components';
import { ContentContainer, ListItem, SubtTitle } from './components';
import { Title } from "@/global/css";

export function MainISO() {

  return(
    <ContentSelectedContainer style={{height: 'auto'}}>
      <ContentContainer>
        <Title isSelected>Topicos sobre a ISO 9001</Title>

        <SubtTitle>
          <b>Planejamento:</b> Na busca pelas melhorias da gestão, a cláusula seis personaliza o pensamento de risco por meio de três subcláusulas:
        </SubtTitle>

        <ul>
          <ListItem>
            Ações para tratar riscos e oportunidades: Com os riscos e oportunidades identificados, o próximo passo é definir como a gestão tratará cada um destes itens, na busca de mais eficácia, já que elimina necessidades de ações corretivas.
          </ListItem>
        
          <ListItem>
            Objetivos da qualidade e planejamento para atingi-los: É importante destacar que estes objetivos devem ser comunicados aos colaboradores e alinhados com as políticas de gestão. Da mesma forma, devem ser mensuráveis e monitorizados constantemente.
          </ListItem>
        
          <ListItem>
            Planejamento das alterações: Planejar as devidas alterações, comunicando à equipe e alinhando com os processos de “risk thinking” (pensamento de risco).
          </ListItem>
        </ul>

        <SubtTitle>
          <b>Suporte:</b> Remete ao suporte que atuará em conjunto com a busca por atingir as metas planejadas, composta por cinco subcláusulas:
        </SubtTitle>

        <ul>
          <ListItem>
            Recursos: Gestão dos recursos para o atendimento da norma e das mudanças a ela inerentes.
          </ListItem>
        </ul>
      </ContentContainer>
    </ContentSelectedContainer>
  );
}
