import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <Image
            src="https://user-images.githubusercontent.com/105147266/201548285-02a21eb2-4989-48d3-9f2f-4f41c66c3f36.JPG"
            alt="man-svgrepo"
          />
          <div className="AboutBio">
            Hello! My name is Rhowen Raju, a 20 year old full-stack web developer! I currently attend UC Riverisde as a third year Political Science major! I first became interested in Software Engineering after taking an Intro to CS course, from there I enrolled in UC Riverside's Engineering Bootcamp and completed a 6 month course to earn my certification as a Full-Stack Web Developer!
            I now operate as a Freelance Engineer and look forward to making your web development dreams a reality! 
          </div>
          <div className="AboutBio tagline2">
            I have become confident using the following technologies.
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
