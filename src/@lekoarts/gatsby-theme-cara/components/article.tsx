/** @jsx jsx */
import { jsx } from "theme-ui"
import styled from "@emotion/styled"

const ArticleContent = styled.article`
  position: relative;
  padding: 100px;
  max-width: 1200px;
`

const ArticleImage = styled.img`
  height:100%;
  width:100%;
`


const Article = ({ post }) => {
  return (
    <div>
      <ArticleContent>
        {post.feature_image ? (
          <ArticleImage src={post.feature_image} alt={post.title} />
        ) : null}
        <h1>{post.title}</h1>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
      </ArticleContent>
    </div>
)
  }
export default Article
