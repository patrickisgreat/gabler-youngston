import CMS from "decap-cms-app";
// import uploadcare from "netlify-cms-media-library-uploadcare";
import cloudinary from "netlify-cms-media-library-cloudinary";

import AboutPagePreview from "./preview-templates/AboutPagePreview";
import BlogPostPreview from "./preview-templates/BlogPostPreview";
import IndexPagePreview from "./preview-templates/IndexPagePreview";
import ContactPagePreview from "./preview-templates/ContactPagePreview";
import WorkPagePreview from "./preview-templates/WorkPagePreview";
import TeamPagePreview from "./preview-templates/TeamPagePreview";

// CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("blog", BlogPostPreview);
CMS.registerPreviewTemplate("contact", ContactPagePreview);
CMS.registerPreviewTemplate("project", WorkPagePreview);
CMS.registerPreviewTemplate("team", TeamPagePreview);
