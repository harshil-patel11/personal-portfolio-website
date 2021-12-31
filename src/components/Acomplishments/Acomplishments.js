import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: "CPEN 211", text: 'Intro. to Microcontrollers'},
  { number: "CPEN 221", text: 'Principles of Software Development', },
  { number: "CPSC 221", text: 'Intro. to Algorithms and Data Structures', },
  { number: "CPEN 291", text: 'Computer Engineering Design Studio I', },
  { number: "CPEN 311", text: 'Digital Systems and Design', },
  { number: "CPEN 331", text: 'Operating Systems', },
  { number: "CPEN 322", text: 'Software Development II', },
  { number: "CPSC 320", text: 'Intermediate Algorithms and Data Structures', },
];

const data2 = [
  { number: "2019", text: 'UBC OIS Scholarship Award'},
  { number: "2020", text: `Dean's Honor List`, },
];

const Acomplishments = () => (
  <Section>
  <SectionTitle>Relevant Courses</SectionTitle>
  <Boxes>
    {data.map((card, index) => (
      <Box key={index}>
        <BoxNum>{`${card.number}`}</BoxNum>
        <BoxText>{card.text}</BoxText>
      </Box>
    ))}
  </Boxes>
  <SectionDivider/>
  <br />
  <SectionTitle>Awards and Honors</SectionTitle>
  <Boxes>
    {data2.map((card, index) => (
      <Box key={index}>
        <BoxNum>{`${card.number}`}</BoxNum>
        <BoxText>{card.text}</BoxText>
      </Box>
    ))}
  </Boxes>

</Section>
);

export default Acomplishments;
