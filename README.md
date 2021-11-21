
# S13-HW-E-COMMERCE-BACK-END    

[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)
        
##  Description
This program uses back end set up to manipulate an existing database through sequelize models and requests made to specific routes. The application connects to a database using my sql and establishes models for four distinct tables, category, product, tag, and product_tag. Each category has many products associated with it and each product belongs to one category, each product also has many associated tags and each tag has many associated products through the product_tag model. The program then leverages sequilize to respond with data about each table through CRUD based requests for the catagory, product, and tag tables. Each table has an api route that ends in its name which allows the user to make get requests to view existing elements, post requests to create new instances, put requests to edit attributes on existing elements, and delete requests to remove one based on its id. These methods are available for all models except product_tags since that table was established as the connector for relations between the product and tag tables. 

-----

## Table of Contents
-[Installation](#installation)
-[Usage](#usage)
-[Testing](#testing)
-[Contributing](#contributing)
-[Questions](#questions)
-[License](#license)

---

### Installation

The application uses mysql, express, and sequelize along with a hand full of other dependancies to run correctly. All these dependancies can be found in the package.json included in the directory so if the user wishes to install the modules they need only run the npm install command from a terminal. There is also no user interface provided by the app directly so the user will have to use a third party application such as insomnia to help them make get,post,put, and delete requests to the server once it is up and listening. The user will also need access to a mysql account in order to create, populate, and use the database.

---

### Usage

Once the application and database are established this application can be used as a starter template for how to implement inventory management on a smaller scale.

---

### Testing

 Once all the requirements are met the user can use platform apps like insomnia to test and run requests on all the established routes. The user can expriment with how to manipulate the attributes through put requests and how relational connections are made or altered through these requests.

 ---

 ### Contributing

No contribution is needed at the moment.

---

### Questions

If you'd like to see more of my work feel free to check out my [GitHub](https://github.com/joe-toni) account.
Or if you have any questions you can contact me at this [Email](mailto:joefaburrieta@gmail.com) Address.

---

### License

Licensed under The Unlicense
For more details visit: https://unlicense.org/

