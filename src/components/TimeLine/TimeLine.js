import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  // const [activeItem, setActiveItem] = useState(0);
  // const carouselRef = useRef();

  // const scroll = (node, left) => {
  //   return node.scrollTo({ left, behavior: 'smooth' });
  // }

  // const handleClick = (e, i) => {
  //   e.preventDefault();

  //   if (carouselRef.current) {
  //     const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));
      
  //     scroll(carouselRef.current, scrollLeft);
  //   }
  // }

  // const handleScroll = () => {
  //   if (carouselRef.current) {
  //     const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

  //     setActiveItem(index);
  //   }
  // }

  // // snap back to beginning of scroll when window is resized
  // // avoids a bug where content is covered up if coming from smaller screen
  // useEffect(() => {
  //   const handleResize = () => {
  //     scroll(carouselRef.current, 0);
  //   }

  //   window.addEventListener('resize', handleResize);
  // }, []);

  return (
    <Section id="about">
      <SectionTitle>About</SectionTitle>
      <SectionText> 
      Good day I'm not the best at writing about myself, nor am I a poet, but I'm a highly motivated Java Developer with extensive experience in the web development field.
I have worked on projects where I worked completely
on front-end development and others where I was in charge of the database infrastructure and
development. I pride myself on my ability to adapt and learn skills quickly, and I believe it is part of my inquisitive
nature to absorb information and make sense of that information timeously.
I have an aptitude for Agile methodologies and development as well as the propensity to go the extra mile
to ensure that my work is done to the best of my ability. I am goal-driven, focused and able to commit to
projects allocated to me no matter the size or difficulty. I hope this introductory paragraph about me finds
you well and that you will be impressed when meeting me in person.
      </SectionText>

      

    </Section>
  );
};

export default Timeline;
