let moment = require("moment");
let faker = require("faker");

let pre = document.createElement('pre');
pre.innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a') + '<br>' + faker.internet.email();
document.body.appendChild(pre);
