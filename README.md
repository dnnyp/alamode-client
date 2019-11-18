# À LA MODE

À LA MODE is a reporting tool that scrapes product data from fashion e-commerce sites and generates interactive web and CSV reports. This application is designed and built for use within the fashion wholesale industry.

Authenticated users can generate product reports from a selection of fashion e-commerce sites. Reports are presented in an interactive table format with the ability to sort and filter by any data column. Reports can also be exported in CSV format.

A future release will introduce the ability to schedule reports to run at configured time intervals and to send reports to specified email addresses.

This is the repository for the client application. For the server repository and deployed applications please see the links below.

![Application Screenshot](https://github.com/dnnyp/alamode-client/blob/master/public/A%20LA%20MODE%20screenshot.png?raw=true)

## Setup and Installation
- ```Fork``` and ```clone``` this repository
- To contribute, please ```checkout``` to a new branch and submit ```pull``` requests
- Install depdendencies by running ```npm install```
  - *Depedencies can be found in the package.json file*
- To launch the app in your local browser, run ```npm start```

## Links
- [API Repo](https://github.com/dnnyp/alamode-api)
- [Deployed API](https://quiet-thicket-71875.herokuapp.com)
- [Client Repo](https://github.com/dnnyp/alamode-client)
- [Deployed Client](https://dnnyp.github.io/alamode-app-client)

## Technologies Used
- HTML5
- CSS3/SASS
- React.js
- React Bootstrap
- react-bootstrap-table-2
- Express.js
- Node.js
- Axios
- Passport.js
- Node Osmosis
- MongoDB/Mongoose

## Future Features
- Ability to schedule reports
- Ability to send reports to an email address
- Additional e-commerce sites
- Additional product data columns

## Process
The idea for this reporting tool came from observing the manual effort done by my partner at her fashion job to create product reports from her accounts' websites. I also drew inspiration from my prior experience working on the project team for a new financial reporting tool. My initial wireframes and ERD were created using Balsamiq. I utilized a GitHub project board to manage and prioritze my features.

The front end application was built using React.js and a Bootstrap library adapted for use within the framework. This was my first full application built using React so a lot of trial and error went into laying out the different Bootstrap UI components. I encountered quite a few setbacks while debugging the responsiveness of the UI stemming from the default stylings that came with the React Bootstrap components. The Chrome Inspect utilities aided me significantly in resolving these issues.

A major component of this application is the interactive table which displays the actual report data. This table was built using react-bootstrap-table-2. This extension of Bootstrap is highly configurable and comes with many built-in tools for data manipulation. I utilized the provided documentation to experiment with different features to enhance the usefulness of the reports for my end users.

## Wireframes
![Sign Up](https://github.com/dnnyp/alamode-client/blob/master/public/Sign%20Up.png?raw=true)
![Create Report](https://github.com/dnnyp/alamode-client/blob/master/public/Create%20Report.png?raw=true)
![Reports List](https://github.com/dnnyp/alamode-client/blob/master/public/Reports%20List.png?raw=true)
![Report Page](https://github.com/dnnyp/alamode-client/blob/master/public/Report%20Page.png?raw=true)


## User Stories
- As an unregistered user, I would like to sign up with email and password.
- As a registered user, I would like to sign in with email and password.
- As a signed in user, I would like to change password.
- As a signed in user, I would like to sign out.
- As a signed in user, I would like to create a report from a list of available e-commerce sites.
- As a signed in user, I would like to update my report's title.
- As a signed in user, I would like to delete my report.
- As a signed in user, I would like to see all reports.
- As a signed in user, I would like to export a report to CSV format.
- As a signed in user, I would like to see the following data for any report:
  - Report title
  - Report timestamps (created & updated)
  - Product name
  - Product price
  - Product sale price
- As a signed in user, I would like to sort and filter the products in a report.
- As a signed in user, I would like to navigate to the e-commerce site the report was generated from.
- As a signed in user, I would like to navigate to the product page on the e-commerce site for each product.
- As a signed in user, I would like to schedule a report to be executed at specified time intervals.
- As a signed in user, I would like to send reports to a specified email address.

## License
This project is licensed under the terms of the GNU GPLv3. See the LICENSE file for details.
