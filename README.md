<div style="display: flex; justify-content: center; width: 100%; align-items: center; flex-direction: column;">
<img src="./public/imgs/logo.svg" width="150" heigth="150">
<h1>NodeJs Process Manager API</h1>
</div>

> This project provides a powerful API that deploy nodejs web services apps, through child_process tools. You will have a rest API application to call resources and do it dynamically.

**Requirements:**<br/>
- Nodejs >= 14
- npm >= 6.*

**Start Local:**<br/>
```bash
npm run start:dev
```

**Start Prod:**<br/>
```bash
npm run start
```

**Api Resources:**<br/>
- List all apps:
  - **http://localhost/status**
- Start a new app:
  - **http://localhost/up/< app-name >**

<hr/>

Repository:
- https://github.com/Ricardo-Costa/nodejs-pm-api

References:
- https://nodejs.org/api/child_process.html

Credits Logo:
- https://iconfinder.com/alla.afanasenko
- https://www.iconfinder.com/icons/1931211/api_integration_interaction_communication_connection_network_it_icon