import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
import Typewriter from "typewriter-effect";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
        Welcome To <br />
        My Portfolio Site
      </SectionTitle>
      <SectionText>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "Hi ! I am Emeka Thato Nwamadi. A inspired and passionate Software Engineer."
              )
              .start();
          }}
        />
      </SectionText>
      <br />
      {/* <Button onClick={() => window.open = "https://emekathatonwamadi.netlify.app/", "_blank" }> My HTML5 Site </Button> */}
    </LeftSection>
  </Section>
);

export default Hero;
