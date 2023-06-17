
# TrendGit

The Trending GitHub Users Web Application is a modern and user-friendly platform built with React.js, a popular JavaScript library for building user interfaces. The application leverages the power of Tailwind CSS, a utility-first CSS framework, to create a sleek and responsive design.

The primary purpose of the web application is to showcase the details of GitHub users who are currently trending. The trending information is obtained by making requests to a third-party API using the fetch function, a built-in browser API for making HTTP requests.

To enhance user experience and provide personalized features, the application integrates OAuth authentication. OAuth allows users to securely authenticate and authorize the application to access their GitHub account information, ensuring privacy and data security.

Upon successful authentication, the application retrieves trending user data from the API using fetch. This data includes essential details such as the user's ID, name, email, and address. The fetched information is then displayed in a table format, making it easy for users to scan and browse through the trending users' details.

The combination of React.js, Tailwind CSS, OAuth authentication, and the fetch function results in a seamless and visually appealing web application. 

Overall, the Trending GitHub Users Web Application provides an intuitive and efficient platform for users to discover and learn more about the individuals currently trending on GitHub. Its integration of modern technologies ensures a smooth and enjoyable user experience while prioritizing data security and privacy through OAuth authentication.

## Installation
To set up the project locally, please follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone [repository_url]

2.Navigate to the project directory:

cd TrendGit

3.Install the dependencies:

npm install

Usage:
To run the project locally, execute the following command:

npm run dev 
The application will be available at http://127.0.0.1:5173

Authentication
The project uses OAuth for authentication.

Data Access
The project uses the Fetch API to access data from a remote server.

Displaying Data
The project uses the filter function to display data in a table. 

