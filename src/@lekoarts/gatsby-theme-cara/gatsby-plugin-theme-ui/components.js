import React from "react"
import ArticleCard from "../components/article-card"

export default {
  // eslint-disable-next-line react/display-name
  ArticleCard: ({ link, title, bg, children }) => (
    <ArticleCard link={link} title={title} bg={bg}>
      {children}
    </ArticleCard>
  ),
}
