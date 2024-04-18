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
      My expertise spans a variety of technologies, including these highlights:
    </SectionText>
    <List>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>AWS && Firebase</ListTitle>
          <ListParagraph>
            DevOps Pro skilled in CI/CD automation, infrastructure as code (IaC), and containerization on Firebase, AWS, and more
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>React</ListTitle>
          <ListParagraph>
          I'm a ReactJS developer passionate about creating engaging web and native applications
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiJavascript1 size="3rem" />
        <ListContainer>
          <ListTitle>Javascript && Typescript</ListTitle>
          <ListParagraph>
          A seasoned JavaScript developer with 5+ years of experience, I've built numerous projects using both JavaScript and TypeScript
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiSqllite size="3rem" />
        <ListContainer>
          <ListTitle>SQL</ListTitle>
          <ListParagraph>
          Experienced with database design and integration, having built multiple projects with SQL backends
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiJava size="3rem" />
        <ListContainer>
          <ListTitle>Java</ListTitle>
          <ListParagraph>
          Proficient in Java with 4 years of experience, including expertise in Spring Framework and REST API development
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiHtml5 size="3rem" />
        <ListContainer>
          <ListTitle>HTML && CSS</ListTitle>
          <ListParagraph>
          Front-end expert with deep HTML5 and CSS3 proficiency, including advanced techniques like CSS Grid, Flexbox, and responsive design
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiNodejs size="3rem" />
        <ListContainer>
          <ListTitle>NodeJS</ListTitle>
          <ListParagraph>Experienced Node.js developer well-versed in popular libraries and frameworks (Express, MongoDB, etc.)</ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiPhotoshop size="3rem" />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
          UI/UX design enthusiast with experience using industry-leading tools like Photoshop, Adobe XD, and Figma to bring ideas to life
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiCodepen size="3rem" />
        <ListContainer>
          <ListTitle>C#</ListTitle>
          <ListParagraph>
          Experienced C# developer with a focus on building full-stack .NET applications
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
