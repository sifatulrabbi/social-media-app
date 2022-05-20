## Run the back-end

**Requirements**

- Node.js
- MySQL / MariaDB

Install Node.js

```zsh
brew install node
```

Now, extract the .zip file, navigate to the application's folder and open terminal into the same directory. Then run the following command

```zsh
# this is for the development view
# in development view the application will frequently print messages to the console screen
npm run start:dev

# or
# production view
PORT=8080 npm run start
```

You can now test the running node.js server with `curl` or `wget`

```zsh
curl localhost:8080/api/v1/

# result {success: true, message: 'Hello, world'}
```
