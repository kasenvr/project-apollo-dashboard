
process.env.VUE_APP_VERSION = require('./package.json').version

module.exports = {
    publicPath: process.env.BASE_URL,
    // publicPath: "./",
    // assetsDir: "./",
    transpileDependencies: [
        'vuetify'
    ],
    configureWebpack: {
        devServer: {
            headers: { 'Access-Control-Allow-Origin': '*' }
        }
    }
}
