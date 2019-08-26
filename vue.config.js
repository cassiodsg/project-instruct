module.exports = {
    chainWebpack: config => {
        config.module.rules.delete('eslint');
    },
    css: {
        loaderOptions: {
          
          sass: {
            data: `@import "~@/sass/variables.sass"`
          },
        //   scss: {
        //     data: `@import "~@/variables.scss";`
        //   },
          
        }
    }
}