import React from 'react';
import { DiFirebase, DiReact, DiZend, DiNodejsSmall, DiTerminal } from 'react-icons/di';
import { IoHardwareChipSharp } from "react-icons/io5";
import { AiOutlineRadarChart } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id = "tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technical Skills</SectionTitle>
    <SectionText>
      I have worked with technologies relevant in software development, web development, and hardware
    </SectionText>
    <List>
      <ListItem>
        <IoHardwareChipSharp size="3rem" />
        <ListContainer>
          <ListTitle>FPGAs</ListTitle>
          <ListParagraph>
            Experience with: <br/>
            - Verilog/SystemVerilog and Simulation/Synthesis using Quartus/ModelSim <br />
            - Embedded Processors and Microcontrollers such as Nios/Qsys/PicoBlaze/PacoBlaze
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with: <br/>
            - HTML/CSS/JavaScript as well as programming languages like Java and Python <br />
            - Frameworks like <br />
            Next Js, React Js
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiNodejsSmall size="3rem" />
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>
            Experience with: <br/>
            - Node Js and its applications such as asynchronous AJAX messages to/from the server, file reads/writes, and interfacing with MongoDB databases  <br />
            - APIs such as Express Js, Fetch
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiTerminal size="3rem" />
        <ListContainer>
          <ListTitle>Terminal</ListTitle>
          <ListParagraph>
            Experience with: <br/>
            - Linux/Unix terminal command line interface using it for building C/C++ programs, running GDB, and for Git Version Control <br />
            - Libraries such as wget, bmake, libmpc
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <FiSettings size="3rem" />
        <ListContainer>
          <ListTitle>Operating Systems</ListTitle>
          <ListParagraph>
            Experience with: <br/>
            - Writing low level C code to implement synchronization primitives, threads, process, file systems, and virtual memory allocation <br />
            - MIPS / ARM / X86-64 architecture
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <AiOutlineRadarChart size="3rem" />
        <ListContainer>
          <ListTitle>Machine Learning</ListTitle>
          <ListParagraph>
            Experience with: <br/>
            - Python/PyTorch, Google Colab, Web Scraping, devising datasets <br />
            - Training my own models and adding FCC layers to pre-trained models for different purposes
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
