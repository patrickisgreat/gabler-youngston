import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import '../pages/resources/resources.css'

const DownloadCards = ({cards}) => {
  let JSX = [];
  const rows = cards.length / 2;
  for (let i = 0; i < rows; i++) {
    JSX.push(
      <Row>
        {cards.map((card, index, array) => {
          if (index <= 1) {
            return (
              <Col>
                <img
                  src={card.cardImage.childImageSharp.original.src}
                  alt={card.cardName}
                />
                <h3>{card.cardName}</h3>
              </Col>
            )
          }
          array.shift(2);
        })}
      </Row>
    )
  }
  return JSX;
}

export const ResourcesPageTemplate = ({frontmatter}) => {
  return (
    <section className="resources-page">
      <Container>
        <Row> <h1>{frontmatter.topHeaderText}</h1></Row>
        <DownloadCards cards={frontmatter.topDownloadCards} />
        <Row>
          <p>{frontmatter.bodyText}</p>
        </Row>
        <Row>
            <h1>{frontmatter.bottomHeaderText}</h1>
        </Row>
        <DownloadCards cards={frontmatter.bottomDownloadCards} />
      </Container>          
    </section>
  );
}

ResourcesPageTemplate.propTypes = {
  frontmatter: PropTypes.array,
}

class ResourcesPage extends React.Component {
  render() {
    const { data } = this.props
    const { frontmatter } = data.markdownRemark
    
    return (
      <Layout>
         <ResourcesPageTemplate frontmatter={frontmatter} />
      </Layout>
    )
	}
}
ResourcesPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  }),
}

export default ResourcesPage;

export const ResourcesQuery = graphql
`query ResourcesPageQuery($id: String!) {
	markdownRemark(id: {eq: $id}) {
		frontmatter {
			topHeaderText
      topDownloadCards {
        cardImage {
          childImageSharp {
            original {
              src
            }
          }
        }
        cardName
        cardFile {
          id
        }
      }
      bodyText
      bottomHeaderText
      bottomDownloadCards {
        cardImage {
          childImageSharp {
            original {
              src
            }
          }
        }
        cardName
        cardFile {
          id
        }
      }
		}
	}
}
`