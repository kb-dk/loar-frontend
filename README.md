# LOAR Frontend

LOAR frontend is a KB-style frontend for [DSpace](https://dspace.org/), customized for the Library Open Access Repository (LOAR).

The frontend is based on the DSpace Angular frontend (`dspace-angular`) and uses the **RDL theme** for LOAR-specific styling, components, translations and configuration.

## How LOAR fits into DSpace

DSpace consists of two separate applications:

* **DSpace backend** — Java/Spring application exposing the REST API.
* **DSpace Angular frontend** — Angular application consuming the backend REST API.

The LOAR frontend is a customized version of the DSpace Angular frontend.

The frontend therefore **does not contain the DSpace backend**.
A running DSpace backend is required when developing and testing the complete application.

Also, when running this, the files from this repo (specifically the theme) need to be moved into the dspace-angular repo and the frontend started from there. This repo is just a shell, keeping it seperate from the dspace-angular repo to maintain and develop.

---

# Getting started

## Requirements

The project uses the Node.js version required by the corresponding DSpace Angular version.

For the current development setup, use:

* Node.js 18.x
* npm 10.x
* Git
* yarn 1.22.22

If you use `nvm`, select the appropriate Node version before installing dependencies.

Check your versions:

```bash
node --version
npm --version
```

---

# Get the DSpace Angular source

LOAR is built on top of the official DSpace Angular frontend.

Clone the DSpace Angular repository:

```bash
git clone https://github.com/DSpace/dspace-angular.git
cd dspace-angular
```

## Use the correct DSpace branch

The LOAR frontend must use the DSpace Angular branch/version it was developed against. It seems for this to run, we need the DSpace 7.5 version. Make sure you're in the dspace-angular repo, then check out the 7.5 version:

```bash
git checkout dspace-7.5
```

> **Important:** Do not automatically use `main` or the newest DSpace Angular release. The Angular frontend and DSpace backend need to be compatible with the DSpace version being used by LOAR.

You can verify the current branch with:

```bash
git status
```

---

# Install the DSpace Angular dependencies

From the `dspace-angular` directory:

This project uses yarn. If you don't have that in (like, who would have?):

```bash
npm install --global yarn@1.22.22
```

Then:

```bash
yarn install
```

If, for some reason, you've reach this point and nothing works, try:

```bash
rm -rf node_modules
rm -rf dist
yarn cache clean
yarn install --frozen-lockfile
```

This should force a full reinstall with new node_modules and no cached stuff anywhere.

---

# Add the LOAR/RDL theme + angular configuration files

This LOAR-specific code lives in the `RDL` theme.

The theme from this repo should be placed under src/themes/RDL/ dspace-angular repo:

```text
src/themes/RDL/ -> /dspace-angular/src/themes/RDL/
```

In the themes folder is also a eager-themes.module.ts file. This needs to replace file with the same name in the dspace-angular repo.

```text
/loar-frontend/config/angular.json -> /dspace-angular/angular.json
```

In the root folder of the dspace-angular project is a file called angular.json. This need to be replaced with the file of the same name in the LOAR-frontend repo in the config folder.

```text
/loar-frontend/src/themes/eager-themes.module.ts -> /dspace-angular/src/themes/eager-themes.module.ts.
```

**OPTIONAL:**
To make this run in your localhost, move content of the config.dev.yml into the config.yml in /config in the dspace-angular repo.

```text
/config/config.dev.yml -> /dspace-angular/config/confg.yml
```


The resulting structure should look roughly like:

```text
dspace-angular/
├── config/
│	 └── config.yml (optional - copied and updated from loar-frontend)
├── src/
│   ├── app/
│   ├── assets/
│   └── themes/
│       └── RDL/
│       │   ├── app/
│       │   ├── assets/
│       │   │   └── i18n/
│       │   ├── ...
│       │   └── ...
│       └── eager-themes.module.ts (copied and updated from loar-frontend)
├── package.json
└── angular.json (copied and updated from loar-frontend)
└── ...
```
# LOAR translations

LOAR overrides selected DSpace translations rather than maintaining a complete copy of the DSpace translation files.

The original DSpace translations are located in:

```text
src/assets/i18n/
```

LOAR-specific overrides are located in:

```text
src/themes/RDL/assets/i18n/
```

Merge the theme translations:

```bash
yarn merge-i18n -s src/themes/RDL/assets/i18n
```

This allows the RDL theme to override the relevant DSpace translations without maintaining a complete copy of the base translation file.

---

# Configure DSpace Angular for LOAR

Before being able to start and build the dspace-angular with the LOAR-frontend from our repo, we need to configure and set it up.

# Start the LOAR frontend

Once the DSpace Angular source, RDL theme and configuration are in place, start the development server using the script provided by the checked-out DSpace Angular version.

```bash
yarn run start:dev
```
The frontend will normally be available at:

```text
http://localhost:4000
```
---
