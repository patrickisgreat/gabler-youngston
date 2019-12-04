import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'

const NewsCatsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>
    <section className="section">
      <Helmet title={`News Category | ${title}`} />
      <div className="container content">
        <div className="columns">
          <div
            className="column is-10 is-offset-1"
            style={{ marginBottom: '6rem' }}
          >
            <h1 className="title is-size-2 is-bold-light">Categories</h1>
            <ul className="taglist">
              {group.map(category => (
                <li key={category.fieldValue}>
                  <Link to={`/newscat/${kebabCase(category.fieldValue)}/`}>
                    {category.fieldValue} ({category.totalCount})
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default NewsCatsPage

export const newscatsPageQuery = graphql`
  query NewscatsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___newscategory) {
        fieldValue
        totalCount
      }
    }
  }
`
