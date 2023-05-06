let express = require('express');
let app = express();

console.log('Hello World');

app.listen(process.env.PORT, () => {
 console.log("app running on port :" + process.env.PORT )
})

































 module.exports = app;
