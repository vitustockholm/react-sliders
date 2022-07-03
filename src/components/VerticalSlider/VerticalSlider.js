import React from "react";
// JSX
import HeroSlider, { Slide, SideNav, Nav, OverlayContainer } from "hero-slider";
import Wrapper from "../UI/Wrapper/Wrapper";
import Title from "../UI/Title/Title";
import Subtitle from "../UI/Subtitle/Subtitle";

// Images
const salta = "https://i.imgur.com/PWYw2wn.jpg";
const scharbeutz = "https://i.imgur.com/jxtxPMu.jpg";
const selvaDiValGardena = "https://i.imgur.com/jEdUeMb.jpg";
const seoraksanMountains = "https://i.imgur.com/vZKOfl1.jpg";

const app = () => {
  return (
    <HeroSlider
      slidingAnimation="top_to_bottom"
      orientation="vertical"
      initialSlide={1}
      onBeforeChange={(previousSlide, nextSlide) =>
        console.log("onBeforeChange", previousSlide, nextSlide)
      }
      onChange={nextSlide => console.log("onChange", nextSlide)}
      onAfterChange={nextSlide => console.log("onAfterChange", nextSlide)}
      style={{
        backgroundColor: "#000"
      }}
      settings={{
        slidingDuration: 400,
        slidingDelay: 100,
        shouldAutoplay: true,
        shouldDisplayButtons: true,
        autoplayDuration: 8000,
        height: "100vh"
      }}
    >
      <OverlayContainer>
        <Wrapper>
          <Title>Vertical Slider</Title>
          <Subtitle>
            Try switching to a display that supports touch, then swipe
            vertically
          </Subtitle>
        </Wrapper>
      </OverlayContainer>

      <Slide
        shouldRenderMask
        navDescription="Black Widow"
        background={{
          backgroundAttachment: "fixed",
          backgroundColor: "#6D9B98",
          backgroundImage: salta
        }}
      />

      <Slide
        shouldRenderMask
        navDescription="Captain America"
        background={{
          backgroundAttachment: "fixed",
          backgroundColor: "#8A8A8A",
          backgroundImage: scharbeutz
        }}
      />

      <Slide
        shouldRenderMask
        navDescription="Iron Man"
        background={{
          backgroundAttachment: "fixed",
          backgroundColor: "#EA2329",
          backgroundImage: selvaDiValGardena
        }}
      />

      <Slide
        shouldRenderMask
        navDescription="Thor"
        background={{
          backgroundAttachment: "fixed",
          backgroundColor: "#2D7791",
          backgroundImage: seoraksanMountains
        }}
      />

      <Nav
        position={{
          bottom: "15%",
          left: "50%",
          transform: "translateX(-50%)"
        }}
      />
      <SideNav />
      <SideNav
        isPositionedRight={false}
        position={{
          top: "50%",
          left: "0",
          transform: "translateY(-50%)"
        }}
      />
    </HeroSlider>
  );
};

export default app;
