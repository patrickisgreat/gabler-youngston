import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import NewsList from '../components/Newslist/newslist'
import NewsTypefilter from '../components/newstypesfilter'


const NewsPage = ({ data }) => {
    
    return (
        <Layout>
             <div className="all_news">
                <NewsTypefilter />
                <NewsList />
            </div>
        </Layout>
    )
}

NewsPage.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            nodes: PropTypes.array,
        }),
    }),
}

export default NewsPage


