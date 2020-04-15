module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/posguard/'
        : '/',
        outputDir: 'docs'
};