import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 8, text: 'Commercial Clinets'},
  { number: 6, text: 'Projects currently being used by clients', },
  { number: 155, text: ' Github Contributions in 2021', },
  { number: 5, text: 'Years Software Engineer Expreince', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Milestones</SectionTitle>

    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
