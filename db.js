const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'myapp'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database: ', err);
    return;
  }
  console.log('Connected to database!');

  // INSERT example
  const newUser = { username: 'john', email: 'john@example.com' };
  connection.query('INSERT INTO users SET ?', newUser, (error, results, fields) => {
    if (error) {
      console.error('Error inserting user: ', error);
      return;
    }
    console.log('New user inserted with ID: ', results.insertId);
  });

  // SELECT example
  connection.query('SELECT * FROM users', (error, results, fields) => {
    if (error) {
      console.error('Error retrieving users: ', error);
      return;
    }
    console.log('Users:', results);
  });
});
