# Burger 2: Sequelize Edition
Same as burger 1, but using Sequelize models

## Approach
Using the original Burger app as a base, I went about converting it to a form which uses Sequelize through the following steps:
1. Replace the original models with a sequelized equivalent
2. Configure my databases to synchronize with Sequelize
3. Rewrite routes to use Sequelize methods
4. Add a customer association field to the application

## Challenges
I found a significant amount of challenge in dealing with using Sequelize methods. The documentation on the official site was very difficult to parse and digest, and a lot of external resources were required to understand how to set up the files and functions required. A big part of the challenge here was also determining which areas to update to function with Sequelize. Many parts of the app are dependent on other files, so I needed to ensure every file necessary was up to date and functional.

Debugging was also exceptionally difficult because handlebars struggles with providing debugging tools. While I was able to use console logs in the main.handlebars file, I was unable to check what the burger output was in the list without a proper console log, delaying the development process.

Originally I wanted to define a separate table for the customers eating the burgers. On attempting to do this, I found that Sequelize required a major restructure of the index to allow multiple file models to import properly for other parts of the app to use. In the end, adding a new column for the customer who ate the burger to the original burger table was much faster and simpler to implement.