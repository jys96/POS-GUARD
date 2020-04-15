module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/POS-GUARD/'
        : '/',
        outputDir: 'docs'
};