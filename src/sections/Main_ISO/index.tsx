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
          <b>Âmbito: </b> faz referência às metas e resultados, de acordo com as especificidades da indústria determinada e o contexto da organização.
        </SubtTitle>

        <SubtTitle>
          <b>Referências Normativas: </b> menciona publicações pertinentes que possam servir para orientar a empresa.
        </SubtTitle>

        <SubtTitle>
          <b>Termos e definições: </b> explica os detalhes de termos e define a aplicação de determinada norma, de forma a facilitar o entendimento.
        </SubtTitle>

        <SubtTitle>
          <b>Contexto: </b> esta cláusula é composta por quatro subcláusulas:
        </SubtTitle>

        <ul>
          <ListItem>
          Compreender a organização e o contexto em que está inserida;
          </ListItem>
        
          <ListItem>
          Compreender necessidades e expectativas de todos os stakeholders e partes interessadas: colaboradores, fornecedores, proprietários e clientes.
          </ListItem>
        
          <ListItem>
          Determinar a atuação e o âmbito do Sistema de Gestão da Qualidade.
          </ListItem>

          <ListItem>
          Observar e otimizar o Sistema de Gestão da Qualidade e seus processos.
          </ListItem>
        </ul>

        <SubtTitle>
          <b>Liderança: </b> Esta cláusula tem por finalidade definir uma gestão de topo e está constituída por três subcláusulas. 
        </SubtTitle>

        <ul>
          <ListItem>
          Liderança e compromisso: A gestão deixa de ter apenas um representante e passa a ser chamada de gestão de topo, com o objetivo de comunicar sua importância, ampliar a conscientização e o envolvimento de todos os colaboradores.
          </ListItem>
        
          <ListItem>
          Política: Maior foco na satisfação e no relacionamento com os clientes, identificar e evitar riscos, oportunidades, analisar forças, fraquezas e impactos nas organizações. 
          </ListItem>
        
          <ListItem>
          Autoridades organizacionais, funções e responsabilidades: Alinhamento da política de qualidade e metas estratégicas que integrem os requisitos do sistema de gestão.
          </ListItem>
        </ul>
        
        <SubtTitle>
          <b>Planejamento: </b> Na busca pelas melhorias da gestão, a cláusula seis personaliza o pensamento de risco por meio de três subcláusulas:
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
          <b>Suporte: </b> Remete ao suporte que atuará em conjunto com a busca por atingir as metas planejadas, composta por cinco subcláusulas:
        </SubtTitle>

        <ul>
          <ListItem>
          Recursos: Gestão dos recursos para o atendimento da norma e das mudanças a ela inerentes.
          </ListItem>
        
          <ListItem>
          Competências: Posicionar cada colaborador a atuar de acordo com a sua competência.
          </ListItem>
        
          <ListItem>
          Conscientização: Definir que todos estejam de acordo e cientes com as necessidades de mudanças e as políticas demandadas pela norma.
          </ListItem>

          <ListItem>
          Comunicação: Comunicar sempre planejamento, metas e resultados.
          </ListItem>

          <ListItem>
          Informação documentada: Monitorar, atualizar e manter de acordo cada registro, informação e documentação, de forma que os dados estejam seguros.
          </ListItem>
        </ul>

        <SubtTitle>
          <b>Operacionalização: </b> Refere-se à gestão dos processos externos e internos, mudança planejada e dos critérios para controlá-los. Está dividida em sete subcláusulas:
        </SubtTitle>

        <ul>
          <ListItem>
          Planejamento e controle operacional;
          </ListItem>
        
          <ListItem>
          Requisitos para serviços e produtos;
          </ListItem>
        
          <ListItem>
          Design e seguimento de produtos e serviços;
          </ListItem>

          <ListItem>
          Controle de processos, serviços de fornecedores externos e produtos;
          </ListItem>

          <ListItem>
          Prestação de serviços e produção;
          </ListItem>

          <ListItem>
          Liberação de produtos e serviços;
          </ListItem>

          <ListItem>
          Controle de saídas.
          </ListItem>
        </ul>

        <SubtTitle>
          <b>Avaliação do Desempenho: </b> Composta por três subcláusulas, visa ajudar as empresas a avaliarem o que, como e quando deve avaliar, medir, monitorar e analisar, como uma auditoria interna apta a assegurar que a gestão atenda aos requisitos da organização.
        </SubtTitle>

        <ul>
          <ListItem>
          Monitorar, medir, analisar e avaliar;
          </ListItem>
        
          <ListItem>
          Auditoria interna;
          </ListItem>
        
          <ListItem>
          Revisão realizada pela gestão.
          </ListItem>
        </ul>

        <SubtTitle>
          <b>Melhoria: </b> Como deve ser a busca pelas ações corretivas com situações que estejam fora das conformidades da empresa:
        </SubtTitle>

        <ul>
          <ListItem>
          Generalidades;
          </ListItem>
        
          <ListItem>
          Não conformidade com a ação corretiva;
          </ListItem>
        
          <ListItem>
          Melhoria contínua.
          </ListItem>
        </ul>
        
      </ContentContainer>
    </ContentSelectedContainer>
  );
}
