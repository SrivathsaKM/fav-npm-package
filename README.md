# Web application that allows users to bookmark their favourite npm package

# Application is built using Vite (React Js) for client side, Node js & Exprees for Server side & MongoDb for database

# Feature:

> * users are able to search their favourite npm package in search box.
> * user can bookmark their favorite npm packages.
> * user cannot have same bookmark same npm packages.
> * user can get all the bookmarked npm packages.
> * user can add, update and delete npm packages from their bookmarked list.
> * user can can able to view details of selected npm package.


# Deployment:

> * Client side is deployed on Netlify.[https://lambent-marshmallow-e87cbb.netlify.app/fav-npm-packages](https://lambent-marshmallow-e87cbb.netlify.app/fav-npm-packages). 
> * Server side is deployed on Render. [https://fav-npm-package-g91p.onrender.com/api/list](https://fav-npm-package-g91p.onrender.com/api/list)

# API Details:

> * To get all list -> /list
> * To add/bookmark -> /list/add
> * To update bookmark -> /list/update/:id
> * To delete bookmark -> /list/delete/:id
> * To search npm package => /search-list/:name/

Note: 
> * name refer to the query with support for filters and other modifiers

# Packages used:

> * Client: React, Material UI, React-router-dom, Axios
> * Server: Express, cors, mongoose, Axios, dotenv

# To Run on your Local:

# Client:
> * npm install to install node modules
> * npm run dev to run react application
> * npm build to build the application

# Server:
> * npm install to install node modules
> * npm run dev to run server
