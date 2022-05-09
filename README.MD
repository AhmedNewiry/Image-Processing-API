# Image Processing API

### Author: Ahmed Abd Al-Fattah Abd Al-Sattar

# You can test my API by visiting the following link and changing the parameter values of the query string after starting the server:
http://localhost:3000/api/footage?imagename=fjord&width=500&height=200


# You can start the server containing the API  by executing the following code:
node ./build/main.js

# You can find images available for resizing in "/Image Processing API/images" which contains the following images:
* encenadaport.jpg
* fjord.jpg
* icelandwaterfall.jpg
* palmtunnel.jpg
* santamonica.jpg

# You can compile the typescript code and perform jasmine testing by executing the following code:
npm run test

# You can run prettier by executing the following code:
npm run prettier

# You can run eslint by executing the following code:
npm run lint

# You can run nodemon by executing the following code:
npm run start

# You can run jasmine framework only by executing the following code:
npm run jasmine


## Project Description:
This project focuses on creating a RESTful API that is responsible for resizing images using a node.js module called sharp by creating an endpoint using express module and performing unit testing with jasmine to see if an operation is correct. Throughout this project, we depend on typescript to minimize errors and make our code maintainable which increases the overall code quality.


## Dependencies:
* "express": "^4.17.3",
* "jasmine": "^4.0.2",
* "readline": "^1.3.0",
* "sharp": "^0.30.3",
* "supertest": "^6.2.2"
* "rimraf": "^3.0.2",
# Dev-dependencies:
* "@types/express": "^4.17.13",
* "@types/jasmine": "^3.10.3",
* "@types/lodash": "^4.14.179",
* "@types/node": "^17.0.21",
*  "@types/rimraf": "^3.0.2",
* "@types/sharp": "^0.30.0",
* "@types/supertest": "^2.0.11",
* "@typescript-eslint/eslint-plugin": "^5.13.0",
* "@typescript-eslint/parser": "^5.13.0",
* "eslint": "^8.10.0",
* "eslint-config": "^0.3.0",
* "eslint-plugin-prettier": "^4.0.0",
* "lodash": "^4.17.21",
* "nodemon": "^2.0.15",
* "prettier": "^2.5.1",
* "ts-node": "^10.7.0",
* "typescript": "^4.4.4"
* "jasmine-spec-reporter": "^7.0.0",
* "jasmine-ts": "^0.4.0",

# Resources:
* https://jasmine.github.io/tutorials/async
* https://nodejs.org/api/fs.html
* https://nodejs.org/api/process.html
* https://docs.npmjs.com/cli/v7/configuring-npm/package-json
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN
