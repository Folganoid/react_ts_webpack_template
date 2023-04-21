### 1

- npm init
- mkdir src
- touch /src/index.html
- npm install react react-dom
- npm install -D typescript @types/react @types/react-dom
- touch tsconfig.json
- touch /src/App.tsx\
- touch /src/index.tsx
- npm install -D @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript\
- touch .babelrc
- npm install -D webpack webpack-cli webpack-dev-server html-webpack-plugin
- npm install -D babel-loader
- mkdir webpack
- touch /webpack/webpack.config.js
- add to package.json 

### 2
- npm install -D css-loader style-loader
- touch /src/styles.css
- touch /src/declarations.d.ts

### 3
- touch /webpack/webpack.dev.js
- touch /webpack/webpack.prod.js
- touch /webpack/webpack.common.js

### 4

- npm install -D @pmmmwh/react-refresh-webpack-plugin
- npm install -D eslint
- npm install -D eslint-plugin-react eslint-plugin-react eslint-plugin-react-hooks
- npm install -D @typescript-eslint/parser @typescript-eslint/eslint-plugin
- touch .eslintrc
- npm install --save-dev --save-exact prettier
- touch .prettierrc
- npm install -D eslint-config-prettier eslint-plugin-prettier
- npm install eslint-webpack-plugin --save-dev
