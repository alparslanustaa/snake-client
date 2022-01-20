const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",// IP address here,
    port: 50541,// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on('connect', () => {
    conn.write("Name: AUB")
    // conn.write("Move: up")
  });

  return conn;
};
const handleUserInput = function (specKey) {
// \u0003 maps to ctrl+c input
if (specKey === '\u0003') {
  process.exit();
}
else if (specKey === "s") {
 
  connection.write("Move: down")
} 
else if (specKey === "w") {
  
  connection.write("Move: up")
}
else if (specKey === "d") {
  
  connection.write("Move: right")
}
else if (specKey === "a") {
  
  connection.write("Move: left")
}
else {console.log ('enjoy no command!')};
};

module.exports = { connect };