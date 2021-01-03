const path = require("path"); //библиотека path из node.js позволяет указывать пути
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // импорт классов
const HtmlWebpackPlugin = require("html-webpack-plugin"); // импорт классов

module.exports = {
  mode: "development", //Указываем в какой стадии проект
  entry: ["@babel/polyfill", "./src/index.jsx"], //указываем путь к HTML файлу, входная точка
  output: {
    //куда сам webpack будет собирать файлы
    path: path.resolve(__dirname, "dist"), // указываем название папки куда webpack будет собирать файлы
    filename: "[name].[hash].js", //имя файла куда webpack будет делать сборку всех js файлов,регулярное выражение поможет избавиться от проблем с хэшированием
    publicPath: "/", //чтобы не было проблем с хэшированием
  },

  devServer: {
    port: 3000, //указываем порт.
    historyApiFallback: true, //Чтобы не возникало проблем с роутами
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./src/index.html" }), // создаём экземпляр объекта и передаём ему объект с полем template и путь к html файлу
    new CleanWebpackPlugin(),
  ],

  module: {
    // Модуль для правил стилей
    rules: [
      //Правила для стилей
      {
        test: /\.(css|less)$/, //регулярка для обработки css и less файлов
        use: ["style-loader", "css-loader", "less-loader"], // какие лоадеры используем,работает с права на лево
      },
      {
        test: /\.(jpg|jpeg|png|svg)/, // указываем расширение файлов
        use: ["file-loader"],
      },
      {
        //Правило для babel
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        //Правило для пресета jsx,    polyfill
        test: /\.m?jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
};
