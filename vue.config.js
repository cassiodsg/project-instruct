module.exports = {
    chainWebpack: config => {
        config.module.rules.delete('eslint');
    },
    css: {
        loaderOptions: {
          
          sass: {
            data: `@import "@/sass/variables.scss";`
          },
          // scss: {
          //   data: `@import "~@/variables.scss";`
          // },
          
        }
    }
}