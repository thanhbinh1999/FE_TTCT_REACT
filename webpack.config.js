const path = require('path') // lấy đường dẫn tuyệt đối của thư mục
const Dotenv = require('dotenv-webpack');

const config = {
  plugins: [
    new Dotenv({
      path: './.env'
    })
  ],

  entry: {
    newfile: [
      './src/vendor/jquery/jquery.min.js',
      './src/vendor/bootstrap/js/bootstrap.bundle.min.js',
      './src/vendor/jquery-easing/jquery.easing.min.js',
      './src/vendor/OwlCarousel2-2.3.4/dist/owl.carousel.min.js',
      './src/vendor/lazyload-1.x/jquery.lazyload.min.js',
      './src/vendor/lazyload-1.x/jquery.scrollstop.min.js',
      './src/js/start.js'
    ]
  },
  
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'public/static/js')
  }
}
module.exports = config;
