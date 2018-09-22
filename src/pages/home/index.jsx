import React from "react";
import {
  HeroContainer,
} from "./index.styled.js";
import GreetingBlock from "./greeting-header/index.jsx";


const Home = () => (
  <HeroContainer>
    <GreetingBlock/>
  </HeroContainer>
);

export default Home;
