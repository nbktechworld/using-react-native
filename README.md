# Using React Native

Video: <https://www.youtube.com/watch?v=eX2zw7JzA4Q>

## Running

```
npm start
```

Scan the QR code with your smartphone.

## Problem (macOS): `npm start` crashes due to watching too many files

Make sure you have Brew installed. See <https://brew.sh>

Install watchman:

```
brew install watchman
```

## Problem: "Something went wrong" 

Your smartphone must be connected to the same WiFi network as your computer that runs `npm start`. If you get an error like `Something went wrong`, make sure both devices are connected to the same network and there are no firewalls blocking the connection.

If you can't get it to work, you can do the following:

Go to `package.json` and locate property `scripts.start`. Then you add `--tunnel` option to `expo start` command, like this:

```
"scripts": {
    "start": "expo start --tunnel",
```

Save the file. Then try `npm start`.  Say (y)es to install `ngrok`. Then you will see something like

```
› Metro waiting on exp://bh9n2wm-anonymous-8081.exp.direct
```

Scan QR code again. Tunnel means it kind of creates a public link on the internet to your development server, so your phone can access it, without the need for the two devices be on the same network. 
