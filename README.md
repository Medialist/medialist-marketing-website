# ![](https://medialist-io.firebaseapp.com/img/icon.svg) medialist.io

<img width="1328" alt="screenshot 2018-02-15 17 37 47" src="https://user-images.githubusercontent.com/58871/36271611-f8fa0fb2-1276-11e8-8689-0535ae7892a4.png" />

## Getting started

This project builds out a static website to the `docs` directory. To work on the site locally run the following from the project directory.

```sh
npm run watch
```

This'll build out the site to the `docs` folder and run with a local dev server with hot-reloading at http://localhost:4000/

## Going live

The site is hosted on [Firebase](https://console.firebase.google.com/u/0/project/medialist-io/hosting/main).

You will need to install `firebase-tools` from npm and get added to the `medialist-io` project. Ask @olizilla about that.

Then run

```sh
# clear out the docs dir
npm run clean
# copy the static folder and build out the html and css
npm run build
# coax firebase into hosting the docs folder at https://medialist.io
npm run deploy
```

![](https://medialist-io.firebaseapp.com/img/logo.svg)
