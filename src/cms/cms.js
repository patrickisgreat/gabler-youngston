import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import ContactPagePreview from './preview-templates/ContactPagePreview'
import WorkPagePreview from './preview-templates/WorkPagePreview'
import TeamPagePreview from './preview-templates/TeamPagePreview'
import ResourcesPagePreview from './preview-templates/ResourcesPagePreview'

const config = {}
console.log('NODE_ENV');
console.log(process.env.NODE_ENV);

CMS.init({ config })

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('contact', ContactPagePreview)
CMS.registerPreviewTemplate('project', WorkPagePreview)
CMS.registerPreviewTemplate('team', TeamPagePreview)
CMS.registerPreviewTemplate('resources', ResourcesPagePreview)