# Impacting Group Test


This is a test for the fullstack developer position at Impacting Group. The challenge was to build an api with static data and consume this data with React Native.
The API was made using Node.js, Typescript and Express.
The app was made using React Native, Expo and Typescript.

## Requirements
This application needs Node.js version 16.13.0.
If you are on a different version, you can use **nvm** to change the version or download it by clicking [here](https://nodejs.org/ru/blog/release/v16.13.0/).
You will also need to provide your IP address for the app to recognize the API.
To do this, open a terminal and type:

Windows:
```bash
  ipconfig
```

Linux:
```bash
  ip addr
```

Mac:
```bash
  ifconfig
```

After finding your IP address, paste it into the env.json file inside /app. It must be before `:8000` and after `http://`
Example: `http://127.0.0.1:8000`

## Run locally

Clone the project

```bash
  git clone https://github.com/fgouvea10/impacting-group-test.git
```

Go to the project directory

```bash
  cd impacting-group-test
```

### Running the backend

Go to the backend directory
```bash
  cd backend
```

Install the dependencies

```bash
  npm i 
```

Start the app
```bash
  npm run dev
```

### Running the app

Go to the app directory
```bash
  cd app
```

Install the dependencies

```bash
  npm i 
```

Start the app
```bash
  npx expo start
```

You can use the app using an emulator or by scanning the QR Code that the expo will generate. You must have the Expo app installed on your mobile device to use this application.

## Documentation
You can access the api documentation by running the backend locally and accessing http://localhost:8000/docs
