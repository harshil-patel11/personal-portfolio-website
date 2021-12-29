import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { RiBuilding2Fill } from 'react-icons/ri';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href = "/">
        <a style = {{display: "flex", alignItems: "center", color: "white", marginBottom: "17px"}}>
					<RiBuilding2Fill size = "3rem" /><Span> Harshil Rajesh Patel </Span>
        </a>
      </Link>
    </Div1>
		<Div2>
			<li>
				<Link href = "#projects">
					<NavLink>Technical Projects</NavLink>
				</Link>
			</li>
			<li>
				<Link href = "#skills">
					<NavLink>Technical Skills</NavLink>
				</Link>
			</li>
			<li>
				<Link href = "#about">
					<NavLink>About Me</NavLink>
				</Link>
			</li>
		</Div2>
		<Div3>
			<SocialIcons href = "https://github.com/harshil-patel11">
				<AiFillGithub size = "3rem" />
			</SocialIcons>
			<SocialIcons href = "https://www.linkedin.com/in/harshilrajeshpatel/">
				<AiFillLinkedin size = "3rem" />
			</SocialIcons>
		</Div3>
  </Container>
);

export default Header;
