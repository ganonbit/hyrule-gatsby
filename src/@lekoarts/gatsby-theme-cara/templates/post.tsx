import React from "react"
import { graphql } from "gatsby"
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Layout from "../components/layout"
import Article from "../components/article"


const Post = ({ data }) => {
  const post = data.ghostPost
  return (
    <Layout>
      <Parallax pages={2}>
        <Article post={post} offset={.5} />
      </Parallax>
    </Layout>
  )
}

export default Post

export const postQuery = graphql`
  query($slug: String!) {
    ghostPost(slug: { eq: $slug }) {
      title
      slug
      feature_image
      html
    }
  }
`