1.create src and build folders 
2. initialize  git and create .gitignore file 
3. initialize package.json 
4.install react and react-dom 
5. install typescript @types/react @types/react-dom as dev dep 
6. create tsconfig.json and copy the conf into it
7. create index.tsx and App.tsx 
8. install as dev dep :  @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript
9. add babel conf file .babelrc
10. install  webpack webpack-cli webpack-dev-server html-webpack-plugin as dev dep
11. install babel-loader as dev dep 
12. create webpack conf 
13. add the command : "npm start" :  "webpack serve --config <configFile> --open" 
14. install webpack-merge to merge conf files
15. create two command start and build for dev and production server in package.json 

eslint : for parsing and detecting issue in the code 

1. install all these package as dev dep : eslint eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/parser @typescript-eslint/eslint-plugin
2. add .eslint.js file with configurations 
3. add the command eslint --fix \"./src/**/*.{js,jsx,ts,tsx,json}\" 

prettier : for formating the code : 

1. install prettier vs code extension
2. install as dev dep : prettier  eslint-config-prettier eslint-plugin-prettier
3. add the command to package.json :    prettier --write \"./src/**/*.{js,jsx,ts,tsx,json,css,scss,md}\"
4. for formating : npm run format 
5. go to settings and change formatOnSave to true

prevent linting errors and auto formating the code before commiting to git repo  : 
1. install package as dev dep : husky@4 lint-staged
2. add configuration to package.json 
