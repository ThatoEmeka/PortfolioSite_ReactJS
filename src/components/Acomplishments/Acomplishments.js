import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 2, text: 'Commercial Clinets'},
  { number: 4, text: 'Projects currently being used by clients', },
  { number: 155, text: ' Github Contributions in 2021', },
  { number: 3, text: 'Years as a developer', }
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
