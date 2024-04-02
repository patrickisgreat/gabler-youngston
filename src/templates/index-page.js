import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import Layout from "../components/Layout";
import { gsap } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { Controller, Scene } from "react-scrollmagic";
import geoShape from "../../static/img/home/geo_shape.png";
import leftArrow from "../../static/img/home/left_arrow.png";
import rightArrow from "../../static/img/home/right_arrow.png";
import Slider from "react-slick";
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";

gsap.registerPlugin(useGSAP);

const scrollTopButtonStyle = {
  backgroundColor: "#EE4423",
  fill: "#fff",
  width: "55px",
  height: "55px",
  bottom: "350px",
  border: 0,
  boxShadow: "none",
  "&:hover": {
    border: 0,
  },
  outline: "none",
};

// Reusable Animated GeoShape component

const FlippyGeoShape = ({ progress }) => {
  const geoShapeRef = useRef(null);

  useGSAP(() => {
    const timeline = gsap.timeline({ paused: true });

    timeline.fromTo(
      geoShapeRef.current,
      { rotationY: 0 },
      {
        rotationY: 180,
        ease: "Strong.easeOut",
        duration: 1,
      }
    );

    timeline.totalProgress(progress);
  }, [progress]);

  return <img src={geoShape} alt="" ref={geoShapeRef} />;
};

export const IndexPageTemplate = ({
  image,
  title,
  slides,
  recentWorks,
  footerWorks,
}) => {
  console.log("slides", slides);
  const slide2 = slides[0];
  const slide3 = slides[1];
  const slide4 = slides[2];

  const [value, setValue] = useState(0);
  useEffect(() => {
    function reRender() {
      setValue((prevValue) => prevValue + 1);
    }
    window.addEventListener("resize", reRender);
    return () => {
      window.removeEventListener("resize", reRender);
    };
  }, []);
  const NextArrow = (props) => (
    <div
      role="button"
      className="slick-next-arrow slick-arrow"
      onClick={props.onClick}
      onKeyDown={props.onClick}
      tabIndex={0}
    >
      <img src={rightArrow} alt="next-arrow" />
    </div>
  );
  const PrevArrow = (props) => (
    <button
      className="slick-prev-arrow slick-arrow"
      onClick={props.onClick}
      onKeyDown={props.onClick}
    >
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
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const ScollTopButtonSettings = {
    StopPosition: 0,
    ShowAtPosition: 3000,
    EasingType: "easeOutCubic",
    AnimationDuration: 500,
    style: scrollTopButtonStyle,
  };

  const GallerySlider = ({ progress }) => {
    const galleryContainerRef = useRef(null);

    useEffect(() => {
      const tween = gsap.fromTo(
        galleryContainerRef.current,
        {
          marginTop: 500,
        },
        {
          marginTop: 100,
          duration: 1,
          paused: true,
        }
      );

      tween.totalProgress(progress * 2);
    }, [progress]);

    return (
      <div ref={galleryContainerRef}>
        <div className="slideDescription">
          <p>
            <Link className="homeBottomGalleryLink" to="/works">
              {slide4.sidebarDescription}
            </Link>
          </p>
        </div>
        <div className="galleryContainer">
          <Slider {...sliderSettings}>
            {footerWorks.map((image, i) => {
              return (
                <div className="hvrbox" key={image.fields.slug}>
                  <img
                    src={
                      image.frontmatter.projectimage.childImageSharp.fluid.src
                    }
                    alt="Our Team"
                    style={{ display: "block", width: "100%" }}
                    className="hvrbox-layer_bottom"
                  />
                  <Link to={image.fields.slug} className="hvrbox-layer_top">
                    <div className="hvrbox-text">
                      <h5>{image.frontmatter.projectname}</h5>
                    </div>
                  </Link>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
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
                  width: "500px",
                },
              }}
            />
            <span>
              <span className="scroll-bob">SCROLL</span>
            </span>
          </div>
        </Scene>
        {/* SLIDE 2  */}
        <Scene pin pinSettings={{ pushFollowers: false }} duration="900">
          {(progress) => (
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
                  {recentWorks.map((image, i) => {
                    return (
                      <Link key={image.fields.slug} to={image.fields.slug}>
                        <div className="slider-works">
                          <div className="slider-img">
                            <PreviewCompatibleImage
                              key={i}
                              className="gallery-img"
                              imageInfo={{
                                image: !!image.frontmatter.projectimage
                                  .childImageSharp
                                  ? image.frontmatter.projectimage
                                      .childImageSharp.fluid.src
                                  : image.frontmatter.projectimage
                                      .childImageSharp,
                                alt: `Gallery Test`,
                                style: {
                                  borderRadius: "0px",
                                },
                              }}
                            />
                          </div>
                          <div className="sidebar slider-sidebar">
                            <p className="sidebar-hero">
                              {image.frontmatter.projectname}
                            </p>
                            {/*<p className="sidebar-desc">-</p>
                          <a href="#">
                            <img className="portfolio-link" src="" />
                          </a>
                          */}
                          </div>
                        </div>
                      </Link>
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
          </div>
        </Scene>

        {/* SLIDE 4 GALLERY */}
        <Scene pin pinSettings={{ pushFollowers: false }} duration="700">
          {(progress) => (
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
                <div className="spacer"></div>
                <div className="slidingElementsContainer">
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
  recentWorks: PropTypes.array,
  footerWorks: PropTypes.array,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        slides={frontmatter.slides}
        recentWorks={data.recentWorks.nodes}
        footerWorks={data.footerWorks.nodes}
      />
    </Layout>
  );
};
IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
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
      }
    }

    recentWorks: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "Projectdetail/index" } } }
      limit: 3
    ) {
      nodes {
        frontmatter {
          projectname
          projectimage {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          projectscope
        }
        fields {
          slug
        }
      }
    }

    footerWorks: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "Projectdetail/index" } } }
    ) {
      nodes {
        frontmatter {
          projectname
          projectimage {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          projectscope
        }
        fields {
          slug
        }
      }
    }
  }
`;
