/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import SVG from "./svg"
import { UpDown, UpDownWide } from "../styles/animations"
// @ts-ignore
import AboutMDX from "../sections/about"

const About = ({ offset }: { offset: number }) => (
  <div>
    <Divider bg="divider" clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)" speed={0.2} offset={offset} />
    <Divider speed={0.1} offset={offset}>
      <UpDown>
        <SVG icon="triangle" hiddenMobile width={6} color="icon_brightest" left="50%" top="75%" />
        <SVG icon="triangle" hiddenMobile width={8} color="icon_darkest" left="70%" top="20%" />
        <SVG icon="triangle" width={8} stroke color="icon_darkest" left="25%" top="5%" />
        <SVG icon="triangle" hiddenMobile width={24} color="icon_darkest" left="80%" top="80%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="triangle" hiddenMobile width={16} color="icon_darkest" left="5%" top="80%" />
        <SVG icon="triangle" width={12} stroke color="icon_brightest" left="95%" top="50%" />
        <SVG icon="triangle" hiddenMobile width={6} color="icon_brightest" left="85%" top="15%" />
        <SVG icon="triangle" hiddenMobile width={8} color="icon_darkest" left="45%" top="10%" />
      </UpDownWide>
      <SVG icon="triangle" hiddenMobile width={6} color="icon_brightest" left="4%" top="20%" />
      <SVG icon="triangle" width={12} color="icon_darkest" left="70%" top="60%" />
      <SVG icon="triangle" width={6} color="icon_darkest" left="10%" top="10%" />
      <SVG icon="triangle" width={12} color="icon_darkest" left="20%" top="30%" />
      <SVG icon="triangle" width={8} stroke color="icon_darkest" left="80%" top="70%" />
    </Divider>
    <Content speed={0.4} offset={offset} factor={1.5}>
      <Inner>
        <AboutMDX />
      </Inner>
    </Content>
  </div>
)

export default About
