import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import '../pages/resources/resources.css'
import { HTMLContent } from '../components/Content'

const DownloadCards = ({cards}) => {
  let JSX = [];
  const rows = cards.length / 2;
  for (let i = 0; i < rows; i++) {
    JSX.push(
      <Row className="card-row">
        {cards.map((card, index, array) => {
          let imageSrc;
          if (card.cardImage.childImageSharp) {
            imageSrc = card.cardImage.childImageSharp.original.src;
          } else {
            imageSrc = card.cardImage;
          }
          if (index <= 1) {
            return (
              <Col className="download-card">
                <img
                  src={imageSrc}
                  alt={card.cardName}
                />
                <h3>{card.cardName}</h3>
                <a class="download-link" href={card.cardFile} download>Download</a>
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
      <Container className="inner-container">
        <Row className="top-header"> 
          <h1>{frontmatter.topHeaderText}</h1>
        </Row>
        <DownloadCards cards={frontmatter.topDownloadCards} />
        <Row className="mid-header"> 
          <h1>{frontmatter.middleHeader}</h1>
        </Row>
        <Row className="body-text">
          <HTMLContent content={frontmatter.bodyText} className="body-text" />
        </Row>
        <Row className="bottom-header">
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
      middleHeader
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