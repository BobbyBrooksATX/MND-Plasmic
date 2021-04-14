
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['t7iishVHzzmwtanur9Xcox'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  