module.exports = {
    configureWebpack: {
        resolve:{
            alias: {
                'common': 'components/common',
                'components':'@/componenets',
                'network':'@/network',
                'views':'@/views',
                'assets':'@/assets'
            }
        }
    }
}