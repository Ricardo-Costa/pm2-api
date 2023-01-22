<div style="display: flex; justify-content: center; width: 100%; align-items: center; flex-direction: column;">
<img src="./public/imgs/logo.svg" width="150" heigth="150">
<h1>PM2 API</h1>
<h4>A PM2 NodeJs Process Manager API</h4>
</div>

> This project provides a powerful API that deploy nodejs web services apps, through child_process tools. You will have a rest API application to call resources and do it dynamically.

**Requirements:**<br/>
- Nodejs >= 14.*
- npm >= 6.*

**Start Local:**<br/>
```bash
npm run start:dev
```

**Start Prod:**<br/>
```bash
npm run start
```
Application start at: `http://localhost:7000`

**APIs content:**<br/>
Put all your apis sources in folder `src/sub-apps`, then especify the main file of project in `appPath` of the payload to Route `/up/< app-name >` to start api correctly.

**Api Resources:**<br/>
- Start a new app:
  - POST
  - Route: **http://localhost/up/< app-name >**
  - Payload:
    ```json
    { "appPath":"<my-api/main/file/app.js>" }
    ```
- Status of all apps:
  - GET
  - Route: **http://localhost/status**
- Status of an apps:
  - GET
  - Route: **http://localhost/status/< app-name >**
- Down all apps:
  - GET
  - Route: **http://localhost/down**
- Down an app:
  - GET
  - Route: **http://localhost/down/< app-name >**

<hr/>

Repository:
- https://github.com/Ricardo-Costa/pm2-api

References:
- https://pm2.keymetrics.io/docs/usage/quick-start/
- https://nodejs.org/api/child_process.html

Credits Logo:
- https://iconfinder.com/alla.afanasenko
- https://www.iconfinder.com/icons/1931211/api_integration_interaction_communication_connection_network_it_icon