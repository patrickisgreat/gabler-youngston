import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import Layout from '../components/Layout';
import { Tween, Timeline } from 'react-gsap';
import { Controller, Scene } from 'react-scrollmagic';
import geoShape from '../../static/img/home/geo_shape.png';
import leftArrow from '../../static/img/home/left_arrow.png';
import rightArrow from '../../static/img/home/right_arrow.png';
import Slider from "react-slick";
import {TinyButton as ScrollUpButton} from "react-scroll-up-button";

const tweenProps = {
  ease: 'Strong.easeOut',
  to: {
    rotationY: 180,
  }
}
const scrollTopButtonStyle = {
  backgroundColor: '#EE4423',
  fill: '#fff',
  width: '40px',
  height: '40px'
};

const FlippyGeoShape = ({progress}) => {
  return (
    <Timeline
      totalProgress={progress * 2}
      paused
    >
      <Tween {...tweenProps}>
        <img src={geoShape} />
      </Tween>
    </Timeline>
  );
};

export const IndexPageTemplate = ({
  image,
  title,
  slides,
  galleryImages,
  gallery2Images,
}) => {
    const slide2 = slides[0];
    const slide3 = slides[1];
    const slide4 = slides[2];
    const slide5 = slides[3];
    const NextArrow = (props) => (
      <div className="slick-next-arrow slick-arrow" onClick={props.onClick}>
        <img src={rightArrow} />
      </div>
    );
    const PrevArrow = (props) => (
      <button className="slick-prev-arrow slick-arrow" onClick={props.onClick}>
        <img src={leftArrow} />
      </button>
    );
    const sliderSettings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };
    const ScollTopButtonSettings = {
      StopPosition:0,
      ShowAtPosition:150,
      EasingType:'easeOutCubic',
      AnimationDuration:500,
      style:scrollTopButtonStyle
    };
    return (
    <div className="home-slides">
      <Controller globalSceneOptions={{ triggerHook: 'onLeave' }}>
        <Scene pin>
          <div className="panel panel-1">
              <PreviewCompatibleImage
                imageInfo={{
                  image: !!image.childImageSharp ? image.childImageSharp.fluid.src : image,
                  alt: `featured image thumbnail for logo`,
                  style: {
                    width: '500px',
                  }
                }}
              />
              <span>
                <span className="scroll-bob">SCROLL</span>
              </span>
          </div>
        </Scene>
        <Scene pin pinSettings={{ pushFollowers: false }} duration="900">
          {(progress) => (
          <div className="panel panel-2">

            <div className="sidebar">
              <p className="purpose">
                {slide2.sidebarHero}
              </p>
            </div>

            <div className="right">
              <div className="slideText">
                <p>
                  {slide2.slideBlurb}
                </p>
              </div>
              <span>
                <span className="scroll-bob">SCROLL</span>
              </span>
            </div>
            <div className="animatedGeoShape">
              <FlippyGeoShape progress={progress} />
            </div>
          </div>
          )}
        </Scene>
        <Scene pin>
          <div className="panel panel-3">
            <div className="left">
                <PreviewCompatibleImage
                  className="slide-bg"
                  imageInfo={{
                    image: !!slide3.slideImg.childImageSharp ? slide3.slideImg.childImageSharp.fluid.src : slide3.slideImg,
                    alt: `Himitsu Lounge Featured Image`,
                  }}
                />
              <div className="slideText">
                <p>
                  {slide3.slideBlurb}
                </p>
              </div>
              <span>
                <span className="scroll-bob">SCROLL</span>
              </span>
            </div>
            <div className="sidebar">
                <p className="sidebar-hero">
                  {slide3.sidebarHero}
                </p>
                <p className="sidebar-desc">
                  {slide3.sidebarDescription}
                </p>
            </div>
          </div>
        </Scene>
        <Scene pin>

          <div className="panel panel-4">
              <div className="sidebar">
                <p className="sidebar-hero">
                  {slide4.sidebarHero}
                </p>
              </div>

              <div className="right">
                <div className="slideText">
                  <p>
                    {slide4.slideBlurb}
                  </p>
                </div>
                <div className="animatedGeoShape">
                  <FlippyGeoShape progress="20" />
                </div>
                <div className="slideDescription">
                  <p>{slide5.sidebarDescription}</p>
                </div>
                <div className="galleryContainer">
                  <Slider {...sliderSettings}>
                    {galleryImages.map((image, i) => {
                      return <PreviewCompatibleImage
                                key={i}
                                className="gallery-img"
                                imageInfo={{
                                  image: !!image.image.childImageSharp ? image.image.childImageSharp.fluid.src : image.image,
                                  alt: `Gallery Test`,
                                  style: {
                                    borderRadius: '0px',
                                  }
                                }}
                            />
                    })}
                  </Slider>
                </div>
              </div>
          </div>
        </Scene>
        <Scene pin>

          <div className="panel panel-4">
              <div className="sidebar">
                <p className="sidebar-hero">
                  {slide5.sidebarHero}
                </p>
              </div>

              <div className="right">
                <div className="slideText">
                  <p>
                    {slide5.slideBlurb}
                  </p>
                </div>
                <div className="animatedGeoShape">
                  <FlippyGeoShape progress="20" />
                </div>
                <div className="slideDescription">
                  <p>{slide5.sidebarDescription}</p>
                </div>
                <div className="galleryContainer">
                  <Slider {...sliderSettings}>
                    {gallery2Images.map((image, i) => {
                      return <PreviewCompatibleImage
                                key={i}
                                className="gallery-img"
                                imageInfo={{
                                  image: !!image.image.childImageSharp ? image.image.childImageSharp.fluid.src : image.image,
                                  alt: `Gallery Test`,
                                  style: {
                                    borderRadius: '0px',
                                  }
                                }}
                            />
                    })}
                  </Slider>
                </div>
              </div>
          </div>
        </Scene>
        <ScrollUpButton {...ScollTopButtonSettings} />
      </Controller>
    </div>
    )
  }


IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  slides: PropTypes.array,
  galleryImages: PropTypes.array,
  gallery2Images: PropTypes.array,
}


const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout location="/">
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        slides={frontmatter.slides}
        galleryImages={frontmatter.galleryImages}
        gallery2Images={frontmatter.gallery2Images}
      />
    </Layout>
  )
}
IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        slides {
          slideBlurb
          slideImg {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
              }
            }
          }
          sidebarHero
          sidebarDescription
        }
        galleryImages {
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
              }
            }
          }
        }
        gallery2Images {
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
