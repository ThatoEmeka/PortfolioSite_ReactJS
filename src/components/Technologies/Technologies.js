import React from "react";
import {
  DiFirebase,
  DiHtml5,
  DiJava,
  DiJavascript1,
  DiNodejs,
  DiPhotoshop,
  DiReact,
  DiSqllite,
  DiCodepen,
} from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
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
            I Have experience with Firebase, Firestore, and Cloud Functions. I
            have used Firebase for the backend of my projects.
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>React</ListTitle>
          <ListParagraph>
            I Have experience with RaectJS. I have built a variety of small
            React applications.
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiJavascript1 size="3rem" />
        <ListContainer>
          <ListTitle>Javascript && Typescript</ListTitle>
          <ListParagraph>
            I currently use Javascript more than any other language and i have
            decent experience with typescript..
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiSqllite size="3rem" />
        <ListContainer>
          <ListTitle>SQLite</ListTitle>
          <ListParagraph>
            I Have experience with SQLite. I have used SQLite for the backend of
            my academic projects.
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiJava size="3rem" />
        <ListContainer>
          <ListTitle>Java</ListTitle>
          <ListParagraph>
            I have a lot of academic experience using Java.
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiHtml5 size="3rem" />
        <ListContainer>
          <ListTitle>HTML && CSS</ListTitle>
          <ListParagraph>
            I have a great amount of experience using Html5 and CSS3.
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiNodejs size="3rem" />
        <ListContainer>
          <ListTitle>NodeJS</ListTitle>
          <ListParagraph>I have good experience with Node.</ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiPhotoshop size="3rem" />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            I have experience prototyping software like photoshop, adobeXD and
            Figma.
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiCodepen size="3rem" />
        <ListContainer>
          <ListTitle>C#</ListTitle>
          <ListParagraph>
            I have experience with C#. I have created full stack client
            applications using C#.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
