### 1

- npm init
- mkdir src
- touch index.html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React template</title>
</head>
<body>
  <div id="root"></div>
</body>
</html>

- npm install react react-dom
- npm install -D typescript @types/react @types/react-dom

- touch tsconfig.json
{
  "compilerOptions": {
    "target": "ES6",
    "lib": ["dom", "esnext", "dom.iterable"],
    "jsx": "react-jsx",
    "module": "esnext",
    "moduleResolution": "node",
    "noImplicitAny": true,
    "noFallthroughCasesInSwitch": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true,
    "baseUrl": "./src",
    "resolveJsonModule": true,
    //"allowJs": true,
    //"checkJs": true,
  },
  "include": [
    "./src/**/*",
    ".eslintrc",
  ]
}

- touch App.tsx\
import React from 'react';
export default function App() {
  return <h1>TEST !!!</h1>;
}

- touch index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

- npm install -D @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript\

- touch .babelrc
{
  "presets": [
    "@babel/preset-env",
    [
      "@babel/preset-react",
      {
        "runtime": "automatic"
      }
    ],
    "@babel/preset-typescript"
  ]
}

- npm install -D webpack webpack-cli webpack-dev-server html-webpack-plugin
- npm install -D babel-loader
- mkdir webpack

- touch webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  resolve: {
    extensions: ['.Tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          }
        ]
      },
    ]
  },
  output: {
    path: path.resolve(__dirname, '/build'),
    filename: 'bundle.js'
  },
  mode: 'development',
  plugins:[
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './src/index.html')
    })
  ]
}

- add to package.json 
"scripts": {
  "start": "webpack serve --config webpack/webpack.config.js"
},


### 2


