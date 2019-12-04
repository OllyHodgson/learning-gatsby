import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const latestPostMarkup = html => {
  return { __html: html }
}

const LatestPost = () => {
  const data = useStaticQuery(graphql`
    {
      allWordpressPost(limit: 1) {
        edges {
          node {
            id
            date(formatString: "Do MMMM YYYY")
            link
            excerpt
            title
          }
        }
      }
    }
  `)
  const { date, excerpt, id, link, title } = data.allWordpressPost.edges[0].node
  const postMarkup = latestPostMarkup(excerpt)
  return (
    <div className="post" id={id}>
      <div className="post-header">
        <h5 className="post-title">{title}</h5>
        <p className="post-date">{date}</p>
      </div>
      <p className="post-content" dangerouslySetInnerHTML={postMarkup} />
      <p className="post-link-container">
        <a className="cta" href={link} rel="external me">
          Read the rest…
        </a>
      </p>
    </div>
  )
}

export default LatestPost
