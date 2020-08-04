## Monitoring

A performance monitoring library that can be included in any web page to collect information about the page rendering performance, network requests, and responses. It will provide an overview of that page with general statistics about things like what is slow and what is fast.

## How to use
To use the library, copy the code below, replace yourAppId by the ID provided in the dashboard
Register in <a href="https://website-monitoring.vercel.app/login">the dashboard </a> to get an Id for your app

Download <a href="https://github.com/ArmanSarkisov/monitoring-lib/blob/es5-lib/index.js">the library</a>

Or

npm install --save 'monitoring-lib'

```javascript
import Monitoring from 'monitoring-lib' 

const monitoring = new Monitoring(yourAppId); 
monitoring.use(yourAppId); 
```
