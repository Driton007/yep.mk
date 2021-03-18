const pluginTailwind = require("eleventy-plugin-tailwindcss");

module.exports = (config) => {

    config.addPlugin(pluginTailwind);

    config.setDataDeepMerge(true);

    config.addPassthroughCopy("src/assets/js/**/*");
    config.addPassthroughCopy("src/assets/img/**/*");
    config.addPassthroughCopy("src/assets/favicon/**/*");

    // Alpine JS
    config.addPassthroughCopy({"./node_modules/alpinejs/dist/alpine.js": "./assets/js/alpine.js"});

    config.addLayoutAlias('default', 'layouts/default.njk');

    return {
        dir: {
            input: "src",
            output: "dist"
        },
        templateFormats: ["md", "njk", "html"],
        dataTemplateEngine: "njk",
        markdownTemplateEngine: "njk"
    }

}
