import React from 'react';
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP
} from './HeroElements';


const Hero = () => {

  return (
    <HeroContainer>
      <HeroContent>
        <HeroItems>
          <HeroH1>Michelin Starred *****</HeroH1>
          <HeroP>Food Ready in 7 mins</HeroP>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
