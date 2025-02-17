module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("css");

    eleventyConfig.addPassthroughCopy("fonts");

    eleventyConfig.addCollection("post", function(collectionApi) {
        return collectionApi.getFilteredByTag("post").sort((a, b) => {
            return b.date - a.date; // Sort newest first
        });
    });
};