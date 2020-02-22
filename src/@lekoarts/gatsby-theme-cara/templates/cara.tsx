import React from "react"
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Articles from "../components/articles"
import About from "../components/about"
import Contact from "../components/contact"

const Cara = () => (
  <Layout>
    <Parallax pages={3.5}>
      <Hero offset={0} />
      <About offset={1} />
      <Articles offset={1.5} />
      <Contact offset={2.5} />
    </Parallax>
  </Layout>
)

export default Cara
