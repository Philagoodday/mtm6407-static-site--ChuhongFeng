module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");

  return {
    markdownTemplateEngine: "njk",
    // HTML use Nunjucks
    htmlTemplateEngine: "njk",
    // default
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site",
    },
  };
};