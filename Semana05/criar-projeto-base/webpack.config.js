const path = require("path")

module.exports={
    entry: {
        index: './src/index.js',
        galaxy: './src/galaxy.js'
    },
    output:{
        //gera esse arquivo e coloca dentro de dist
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module:{
        rules:[
            {
                //todos os aquivos que terminam com js
                test: /\.js$/,
                use: ['babel-loader']
            }
        ]
    },
    watch: true,

    devServer: {
        contentBase: path.join(__dirname, "dist"),
        watchContentBase:true,
        liveReload: true
    }
}