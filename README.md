# Node-ProxyServer-Template
A node.js proxy server boilerplate that hides api keys, caches data, and limits api calls.

## Running the server:
 1. Install dependencies using `yarn` or `npm install`
 2. Run `npm run dev` which runs nodemon on a development environment.
 3. Create a `.env` file and add enviorment varaiables 
 4. Modify the `routes.js` file to redirect to the api 

### Notes
You can modify the cache rate and time window in `index.js`. You can also add a database caching layer to your proxy server for better modularity instead of using `apicache`.
  
