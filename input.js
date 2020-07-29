let connection;

const setupInput = function(conn) {
  const stdin = process.stdin;
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

const handleUserInput = function(key)  {
  if (key === '\u0003') {
    process.exit();
  } else if (key === "w") {
    connection.write("Move: up");
  } else if (key === "e") {
    connection.write("Say: Hello");
  } else if (key === "a") {
    connection.write("Move: left");
  } else if (key === "d") {
    connection.write("Move: right");
  } else if (key === "s") {
    connection.write("Move: down");
  }
};

module.exports = setupInput;