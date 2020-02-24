import React from "react"
import { graphql } from "gatsby"
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Layout from "../components/layout"
import ArticleWrapper from "../components/article-wrapper"
import Article from "../components/article"

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


const Post = ({ data }) => {
  const post = data.ghostPost
  return (
    <>
    <Layout>
      <Parallax pages={1}>
        <ArticleWrapper offset={0}/>
      </Parallax>
      <Article post={post} />
    </Layout>
    </>
  )
}

export default Post