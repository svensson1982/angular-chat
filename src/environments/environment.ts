// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase:  {
      apiKey: 'AIzaSyALUrS81BnI04JT6hba9dYVQ3atg0r0ajo',
      authDomain: 'angularchat-90696.firebaseapp.com',
      databaseURL: 'https://angularchat-90696.firebaseio.com',
      projectId: 'angularchat-90696',
      storageBucket: 'angularchat-90696.appspot.com',
      messagingSenderId: '641073065133'
  }
};
