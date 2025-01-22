### This is a sample application to demonstrate how to use Okta for authentication and authorization in a React application. This app is cloned and modified from sample react app provided by Okta at https://github.com/okta/okta-auth-js.git

# Pre-requisites

- Okta developer account with a registered application (Make sure OIDC is enabled). Easiest way to setup is once you have a developer account, follow the steps mentioned at https://developer.okta.com/docs/guides/sign-in-to-spa-authjs/react/main/#create-an-okta-app-integration
- Two groups created in Okta (loyalty_view and loyalty_admin)
- Application is configured to return groups via claim in the token. 

# How to run?

- Make sure you have proper value set for environment variables defined in .env file
- Run following command
  ```
  npm run dev
  ```
- Open browser and navigate to http://localhost:5173
- You should see the login page

# How to test?
- Assuming you have setup the application and groups in Okta, you can test the application by logging in with the user who is part of loyalty_view group. You should see the home page as well as profile page. But if you try to access /admin page, you should see an error message.
- If you login with the user who is part of loyalty_admin group, you should see the home page, profile page as well as admin page.