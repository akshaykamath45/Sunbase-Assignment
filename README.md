- In this assignment, I faced a few challenges.Firstly, there was a CORS error during authentication. I tried different solutions like using a proxy server and browser extensions, but they didn't work. Eventually, I found a workaround by disabling Chrome web security through a command in the prompt.

- Later, I ran into an issue with API responses. The success response was in JSON format, but the invalid authentication response was in text. After testing using Postman, I identified the problem and adjusted my code accordingly.

- Lastly, managing the global context for the bearer access token was tricky. To solve this, I used the useContext hook to handle global state efficiently.


- Tech Stack Used : React,JavasScript,HTML,CSS.
- Library : Chakra UI (For Designing UI).
- Concepts/Hooks : useState,useContext(for maintaining the accessToken,as state management),useEffect(for preventing re-renders),useNavigate(for navigating to specific routes).

# Project Setup Guide

## Download or Fork the Repository
Clone the repository to your local machine or fork it on GitHub.
```bash
git clone https://github.com/akshaykamath45/Sunbase-Assignment.git
```

## Install Dependencies and Start the Project
Navigate to the project directory and install dependencies using npm. Then, start the project.
```bash
cd Sunbase-Assignment 
npm install
npm start
```

## Disable Web Security for Handling CORS
To handle Cross-Origin Resource Sharing (CORS) during development, disable web security for Chrome. Open a command terminal and execute the following commands:
```bash
cd "C:\Program Files\Google\Chrome\Application"
chrome.exe --disable-web-security --user-data-dir="c:/ChromeDevSession"
```

## Access the Localhost:3000 URL
Open a new Chrome tab and enter the following URL:
```bash
http://localhost:3000
```
## Login with Test Credentials
Use the following credentials for logging in:
- Email: test@sunbasedata.com
- Password: Test@1234
  
## Login Screen/Page

### Show Password
![Show Password](https://github.com/akshaykamath45/Sunbase-Assignment/assets/73344382/b901b42d-af1d-4c3e-afb5-7bac7e91545d)

### Hide Password
![Hide Password](https://github.com/akshaykamath45/Sunbase-Assignment/assets/73344382/c6539c6c-da2f-48c2-b03b-4a48b4568960)

## User Authenticated Response
![Authenticated Response](https://github.com/akshaykamath45/Sunbase-Assignment/assets/73344382/779aa72c-55a3-4114-9517-62e2c9cd0791)

If the user is authenticated, it will move to the customer details page.

### User Invalid Response
![Invalid Response](https://github.com/akshaykamath45/Sunbase-Assignment/assets/73344382/1c785b93-6af7-4721-9531-410f4bcfc8cb)

## Customer Details Page
![Customer Details 1](https://github.com/akshaykamath45/Sunbase-Assignment/assets/73344382/3af1ea0f-3049-422b-8bd8-454958675170)
![Customer Details 2](https://github.com/akshaykamath45/Sunbase-Assignment/assets/73344382/5d4bb677-6aa6-4d56-b3e7-01ac3c35e86d)

## Add/Create new customer
![Add New Customer](https://github.com/akshaykamath45/Sunbase-Assignment/assets/73344382/48d123ac-a1cf-45ef-970a-d9e9dc82b683)
![image](https://github.com/akshaykamath45/Sunbase-Assignment/assets/73344382/87653fe2-99ca-41aa-81f9-09069f7aef1d)



