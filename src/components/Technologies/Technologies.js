import React from 'react';
import { DiFirebase, DiHtml5, DiJava, DiJavascript, DiNodejs, DiPhotoshop, DiReact, DiSqllite, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have experience working with the following technologies:
    </SectionText>
    <List>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Firebase</ListTitle>
          <ListParagraph>
            I Have experience with Firebase, Firestore, and Cloud Functions.
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>React</ListTitle>
          <ListParagraph>
            I Have experience with RaectJS.
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiJavascript size="3rem" />
        <ListContainer>
          <ListTitle>Javascript && Typescript</ListTitle>
          <ListParagraph>
            I Have experience with Firebase, Firestore, and Cloud Functions.
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiSqllite size="3rem" />
        <ListContainer>
          <ListTitle>SQLite</ListTitle>
          <ListParagraph>
            I Have experience with SQLite.
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiJava size="3rem" />
        <ListContainer>
          <ListTitle>Java</ListTitle>
          <ListParagraph>
            I Have alot of experience using Java.
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiHtml5 size="3rem" />
        <ListContainer>
          <ListTitle>HTML && CSS</ListTitle>
          <ListParagraph>
            I have great experince using Html5 and CSS3.
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiNodejs size="3rem" />
        <ListContainer>
          <ListTitle>NodeJS</ListTitle>
          <ListParagraph>
            I have good experince using NodeJS.
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiPhotoshop size="3rem" />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            I have experince prototyping software like photoshop, adobeXD and Figma.
          </ListParagraph>
        </ListContainer>
      </ListItem>

    </List>

  </Section>
);

export default Technologies;
