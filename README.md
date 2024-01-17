# Discord.js and Next.js With Typescript

## This repository is a full stack application using `DiscordBot` and `Next.js`. In other words, it is designed to run on Heroku

## Web process

Next.js is used to build the frontend and backend for Discord authentication and smooth solidarity.

## Worker process

Set up events in Discord.js to monitor `Discord` and communicate with `Next.js` smoothly.

## Directory

```markdown
├─ .github/ --> infrastructure configuration file
│
├─ shere/ --> Shared files between web and worker
│ └─ utils/
│
├─ web/ --> Full Stack Project
│ ├─ src/
│ │ │
│ │ ├─ test/
│ │ │ └─ ...Tests
│ │ │
│ │ ├─ app/
│ │ │ └─ ... PageRoutings
│ │ │
│ │ ├─ components/
│ │ │ └─ ... MyCompnents
│ │ │
│ │ ├─ config/
│ │ │ └─ ... NextAuthOptions
│ │ │
│ │ ├─ constants/
│ │ │ └─ ... Constants (ErrorMessage and EndPoint ...)
│ │ │
│ │ ├─ hooks/
│ │ │ └─ ... MyCustomHooks
│ │ │
│ │ ├─ store
│ │ │ └─ ... ReduxStoreFiles
│ │ │
│ │ ├─ utils
│ │ │ └─ ... HelperFunctions With ESModule and CommonModule
│ │ │
│ │ └─ ... Setting Files
│
│
├─ worker/ --> DiscordBot
│ ├─ src/
│ │ │
│ │ ├─ test/
│ │ │ └─ ...Tests
│ │ │
│ │ ├─ components/
│ │ │ └─ ... MyCompnents (Button, SelectMenu, Embed, TextInput, Modal, ActionRow)
│ │ │
│ │ ├─ config/
│ │ │ └─ ... IntentOptions
│ │ │
│ │ ├─ constants/
│ │ │ └─ ... Constants (ErrorMessage and EndPoint ...)
│ │ │
│ │ ├─ events/
│ │ │ ├─ onGuildMemberAdd/
│ │ │ │ └─ ... Actions
│ │ │ │
│ │ │ ├─ onGuildMemberUpdate/
│ │ │ │ └─ ... Actions
│ │ │ │
│ │ │ ├─ onGuildScheduledEventCreate/
│ │ │ │ └─ ... Actions
│ │ │ │
│ │ │ ├─ onGuildScheduledEventDelete/
│ │ │ │ └─ ... Actions
│ │ │ │
│ │ │ ├─ onGuildScheduledEventUpdate/
│ │ │ │ └─ ... Actions
│ │ │ │
│ │ │ ├─ onInteractionCreate/
│ │ │ │ ├─ onButtons/
│ │ │ │ │ └─ ... Actions
│ │ │ │ │
│ │ │ │ ├─ onInteractions/
│ │ │ │ │ └─ ... Actions
│ │ │ │ │
│ │ │ │ ├─ onModalSubmits/
│ │ │ │ │ └─ ... Actions
│ │ │ │ │
│ │ │ │ ├─ onSelectMenus/
│ │ │ │ │ └─ ... Actions
│ │ │ │
│ │ │ ├─ onMessageCreate/
│ │ │ │ └─ ... Actions
│ │ │ │
│ │ │ ├─ onMessageDelete/
│ │ │ │ └─ ... Actions
│ │ │ │
│ │ │ ├─ onMessageReactionAdd/
│ │ │ │ └─ ... Actions
│ │ │ │
│ │ │ ├─ onMessageReactionRemove/
│ │ │ │ └─ ... Actions
│ │ │ │
│ │ │ ├─ onReady/
│ │ │ │ └─ ... Actions
│ │ │
│ │ │
│ │ ├─ utils
│ │ │ └─ ... HelperFunctions With ESModule and CommonModule
│ │ │
│ │ └─ ... Setting Files
│
└─ ... Root Setting Files
```

## Project Setup

### ⚠️ Run in the Root directory of the project

### 1. Install

```bash
npm ci
```

### 2. Set environment variables for the repository

1. [Web](./web/README.md)

2. [Worker](./worker/README.md)

3. HEROKU_API_KEY

    - `Require`: true
    - `description`: Heroku ApiKey provided for each account
    - `GetStep`
        - Step1: Access [HerokuDashboard](https://dashboard.heroku.com/account)
        - Step2: Scroll to the bottom and find 'ApiKey' and copy it

4. HEROKU_APP_NAME

    - `Require`: true
    - `description`: Name of Heroku app to be automatically deployed
    - `GetStep`
        - Step1: Access [HerokuMyApps](https://dashboard.heroku.com/apps)
        - Step2: Set a name for your app (create one if you don't have one)

5. HEROKU_EMAIL
    - `Require`: true
    - `description`: Email address of the Heroku account you are using

### 3. Run

```bash
## mode = start or dev
## process = web or worker
npm run ${mode}:${process}
```
