# operator-dashboard
A learning project to visualize data in a dashboard application for operators

# Setup

## Install Node.js
This project is built using Node.js, and to do development or testing requires an install of Node.js v12.3 or higher. Instructions for installation can be found at https://nodejs.org/en/.

## Install project
Open a command line terminal, navigate to where you want to store the project, and execute the following command:
```
git clone https://github.com/jon-a-nygaard/operator-dashboard.git &&
cd operator-dashboard &&
npm i
```

## Add .env file
The `.env` file contains all secrects required for the application. These will automatically be loaded and made available as environment variables.

Create a new file in the project folder, name it `.env`, add the following content, and replace the values with the correct credentials:
```
REACT_APP_API_DOMAIN=add-api-domain-here
REACT_APP_API_OCP_APIM_SUBSCRIPTION_KEY=add-subscription-key-here
REACT_APP_API_AUTHORIZATION_KEY=add-api-key-here
```

## Start the development server
Run `npm start`.
The command will take care of cloning the repository, install dependencies, and then start the development server. The development should automatically open http://localhost:3000/ for you.

# Tools
- [Bootstrap](https://getbootstrap.com/), a front-end component library to easily develop responsive and mobile-first websites.
- [Create-React-App](https://github.com/facebook/create-react-app), a tool to quickly setup a [React](https://reactjs.org/) development environment.
- [Highcharts JS](https://www.highcharts.com), a simple and battle tested JavaScript library for data visualization. A natural choice for me as I have been a Highcharts developer for many years.
- [React JS](https://reactjs.org/), a JavaScript library for building user interfaces.

# Todo
- Tests - skipped to speed up development.
- Document code - skipped to speed up development.
- Add linting and code formatting. Use ESLint, and or Prettier to format the code. Check first if Create-React-App comes with another preffered solution, or if ReactJS has an opinion about this.
- Create a compare view where it is possible to select two units and compare their values.
- Update unit sensor data with regular intervals. I assume `/v1/sensors/units/{unitId}` will return the last data for each sensor, and I chose this over `/v1/basic/environment` because the request responded faster.
- Add support for static pages.
