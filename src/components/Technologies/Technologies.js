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
            I Have experience with Firebase, Firestore, and Cloud Functions. I have used Firebase for the backend of my projects.
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>React</ListTitle>
          <ListParagraph>
            I Have experience with RaectJS. I have built a variety of small React applications.
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiJavascript size="3rem" />
        <ListContainer>
          <ListTitle>Javascript && Typescript</ListTitle>
          <ListParagraph>
            I currently use Javascript more than any other languege and i have decent experince with typescript..
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiSqllite size="3rem" />
        <ListContainer>
          <ListTitle>SQLite</ListTitle>
          <ListParagraph>
            I Have experience with SQLite. I have used SQLite for the backend of my academic projects.
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiJava size="3rem" />
        <ListContainer>
          <ListTitle>Java</ListTitle>
          <ListParagraph>
            I have alot of academicexperience using Java.
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiHtml5 size="3rem" />
        <ListContainer>
          <ListTitle>HTML && CSS</ListTitle>
          <ListParagraph>
            I have a great amount of experince using Html5 and CSS3. 
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiNodejs size="3rem" />
        <ListContainer>
          <ListTitle>NodeJS</ListTitle>
          <ListParagraph>
            I have good experince with Node. 
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
