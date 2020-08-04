## How to use

### Register in <a href="https://website-monitoring.vercel.app/login">the dashboard </a> to get an Id for your app
### To use the library, copy the code below, replace yourAppId by the ID provided in the dashboard


Download <a href="https://github.com/ArmanSarkisov/monitoring-lib/blob/es5-lib/index.js">the library</a>

Or

npm install --save 'monitoring-lib'

```javascript
import Monitoring from 'monitoring-lib' 

const monitoring = new Monitoring(yourAppId); 
monitoring.use(yourAppId); 
```
