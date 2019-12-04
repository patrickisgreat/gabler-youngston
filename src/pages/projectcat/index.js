import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'

const CatsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>
    <section className="section">
      <Helmet title={`Project Category | ${title}`} />
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
                  <Link to={`/projectcat/${kebabCase(category.fieldValue)}/`}>
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

export default CatsPage

export const catsPageQuery = graphql`
  query CatsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___projectcategory) {
        fieldValue
        totalCount
      }
    }
  }
`
