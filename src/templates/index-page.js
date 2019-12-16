import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import Layout from "../components/Layout";
import { Tween, Timeline } from "react-gsap";
import { Controller, Scene } from "react-scrollmagic";
import geoShape from "../../static/img/home/geo_shape.png";
import leftArrow from "../../static/img/home/left_arrow.png";
import rightArrow from "../../static/img/home/right_arrow.png";
import Slider from "react-slick";
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";

// Tween to flip the shape around 180deg
const flippyGeoShapeTweenProps = {
  ease: "Strong.easeOut",
  to: {
    rotationY: 180
  }
};

// Tween to animate the gallery up into the view
const galleryTweenProps = {
  from: {
    marginTop: 500
  },
  to: {
    marginTop: 20
  }
};

const scrollTopButtonStyle = {
  backgroundColor: "#EE4423",
  fill: "#fff",
  width: "55px",
  height: "55px",
  bottom: "350px",
  border: 0,
  boxShadow: "none",
  "&:hover": {
    border: 0
  },
  outline: "none"
};

// Reusable Animated GeoShape component
const FlippyGeoShape = ({ progress }) => {
  return (
    <Timeline totalProgress={progress * 2} paused>
      <Tween {...flippyGeoShapeTweenProps}>
        <img src={geoShape} alt="" />
      </Tween>
    </Timeline>
  );
};


export const IndexPageTemplate = ({ image, title, slides, galleryImages, gallery2Images }) => {
  const slide2 = slides[0];
  const slide3 = slides[1];
	const slide4 = slides[2];

	
	// slides get wonky on window resize
	// this seems hacky but it works
	const [value, setValue] = useState(0);
	useEffect(() => {
		function reRender() {
			return () => setValue(value => ++value);
		}
		window.addEventListener('resize', reRender());
	}, []);

  const NextArrow = props => (
    <div className="slick-next-arrow slick-arrow" onClick={props.onClick}>
      <img src={rightArrow} alt="next-arrow" />
    </div>
  );
  const PrevArrow = props => (
    <button className="slick-prev-arrow slick-arrow" onClick={props.onClick}>
      <img src={leftArrow} alt="prev-arrow" />
    </button>
  );

  const largeSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const ScollTopButtonSettings = {
    StopPosition: 0,
    ShowAtPosition: 2500,
    EasingType: "easeOutCubic",
    AnimationDuration: 500,
    style: scrollTopButtonStyle
  };

  // Reusable Animated Gallery Slider Component
  const GallerySlider = ({ progress }) => {
    return (
      <Timeline totalProgress={progress * 2} paused>
        <Tween {...galleryTweenProps}>
          <div className="slideDescription">
            <p>{slide4.sidebarDescription}</p>
          </div>
          <div className="galleryContainer">
            <Slider {...sliderSettings}>
              {galleryImages.map((image, i) => {
                return (
                  <PreviewCompatibleImage
                    key={i}
                    className="gallery-img"
                    imageInfo={{
                      image: !!image.image.childImageSharp
                        ? image.image.childImageSharp.fluid.src
                        : image.image,
                      alt: `Gallery Test`,
                      style: {
                        borderRadius: "0px"
                      }
                    }}
                  />
                );
              })}
            </Slider>
          </div>
        </Tween>
      </Timeline>
    );
  };
  return (
    <div className="home-slides">
      <Controller globalSceneOptions={{ triggerHook: "onLeave" }}>
        {/* SLIDE 1 */}
        <Scene pin>
          <div className="panel panel-1 site-logo">
            <PreviewCompatibleImage
              imageInfo={{
                image: !!image.childImageSharp
                  ? image.childImageSharp.fluid.src
                  : image,
                alt: `featured image thumbnail for logo`,
                style: {
                  width: "500px"
                }
              }}
            />
            <span>
              <span className="scroll-bob">SCROLL</span>
            </span>
          </div>
        </Scene>
        {/* SLIDE 2  */}
        <Scene pin pinSettings={{ pushFollowers: false }} duration="900">
          {progress => (
            <div className="panel panel-2">
              <div className="sidebar">
                <p className="purpose">{slide2.sidebarHero}</p>
              </div>

              <div className="right">
                <div className="slideText">
                  <p>{slide2.slideBlurb}</p>
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

        {/* SLIDE 3 FULL BLEED PREVIEWS */}
        <Scene pin>
          <div className="panel panel-3">
            <div className="left">
              <div className="largeGalleryContainer">
              <Slider {...largeSliderSettings}>
                {gallery2Images.map((image, i) => {
                  return (
                    <PreviewCompatibleImage
                      key={i}
                      className="gallery-img"
                      imageInfo={{
                        image: !!image.image.childImageSharp
                          ? image.image.childImageSharp.fluid.src
                          : image.image,
                        alt: `Gallery Test`,
                        style: {
                          borderRadius: "0px"
                        }
                      }}
                    />
                  );
                })}
              </Slider>
              </div>
              <div className="slideText">
                <p>{slide3.slideBlurb}</p>
              </div>
              <span>
                <span className="scroll-bob">SCROLL</span>
              </span>
            </div>
            <div className="sidebar">
              <p className="sidebar-hero">{slide3.sidebarHero}</p>
              <p className="sidebar-desc">{slide3.sidebarDescription}</p>
              <a href="#">
                <img className="portfolio-link" src="" />
              </a>
            </div>
          </div>
        </Scene>

        {/* SLIDE 4 GALLERY */}
				<Scene pin pinSettings={{ pushFollowers: false }} duration="700">
          {progress => (
            <div className="panel panel-4">
              <div className="sidebar">
                <p className="sidebar-hero">{slide4.sidebarHero}</p>
              </div>

              <div className="right">
                <div className="topContainer">
                  <div className="slideText">
                    <p>{slide4.slideBlurb}</p>
                  </div>
                  <div className="animatedGeoShape">
                    <FlippyGeoShape progress={progress} />
                  </div>
                </div>
								<div class="spacer"></div>
                <div class="slidingElementsContainer">
                  <GallerySlider progress={progress} />
                </div>
              </div>
            </div>
          )}
        </Scene>
        <ScrollUpButton {...ScollTopButtonSettings} />
      </Controller>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  slides: PropTypes.array,
  galleryImages: PropTypes.array,
  gallery2Images: PropTypes.array
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        slides={frontmatter.slides}
        galleryImages={frontmatter.galleryImages}
        gallery2Images={frontmatter.gallery2Images}
      />
    </Layout>
  );
};
IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

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
`;