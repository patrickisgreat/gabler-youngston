import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const PreviewCompatibleImage = ({ imageInfo, className }) => {
  let imgStyle = { borderRadius: "5px" };

  let userDefinedStyles = {};

  if (imageInfo.style !== "undefined") {
    userDefinedStyles = imageInfo.style;
  }

  const imageStyle = { ...imgStyle, ...userDefinedStyles };

  const { alt = "", childImageSharp, image } = imageInfo;

  let imageSrc = image?.childImageSharp
    ? getImage(image.childImageSharp)
    : getImage(childImageSharp);

  if (imageSrc) {
    return (
      <GatsbyImage
        style={imageStyle}
        image={imageSrc}
        alt={alt}
        className={className}
      />
    );
  } else if (!!image && typeof image === "string") {
    return (
      <img style={imageStyle} src={image} alt={alt} className={className} />
    );
  }

  return null;
};

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }).isRequired,
  className: PropTypes.string,
};

export default PreviewCompatibleImage;
