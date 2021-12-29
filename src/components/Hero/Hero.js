import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hey There, <br />
        I'm Harshil Rajesh Patel
      </SectionTitle>
      <SectionText>
        I am a Third Year Computer Engineering student at The University of British Columbia, Vancouver.<br />
        I am open to discuss new opportunities and am looking to secure an internship in the Summer of 2022.
      </SectionText>
      <Button onClick = {() => window.location = "https://github.com/harshil-patel11/harshil-patel11"}> Learn More </Button>
    </LeftSection>
  </Section>
);

export default Hero;