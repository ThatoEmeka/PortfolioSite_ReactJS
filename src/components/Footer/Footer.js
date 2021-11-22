import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:(+27) 83-282-2239">083-282-2239</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:thatonwamdi@gmail.com">thatonwamdi@gmail</LinkItem>
        </LinkColumn>
      </LinkList>

    <SocialIconsContainer>
        <CompanyContainer>Certified Blitz Boy</CompanyContainer>

      <SocialContainer>
        <SocialIcons href="https://github.com/ThatoEmeka">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/thato-nwamadi-991623189/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.youtube.com/watch?v=KNolO8B7XFY">
        <AiFillYoutube size="3rem" />
      </SocialIcons>
      </SocialContainer>

    </SocialIconsContainer>
      

    </FooterWrapper>
  );
};

export default Footer;
