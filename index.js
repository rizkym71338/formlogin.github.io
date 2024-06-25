const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <style>
          body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f2f2f2;
          }
          
          .container {
            background-color: #fff;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
            text-align: center;
            max-width: 400px;
            width: 100%;
          }
          
          .container h2 {
            color: #333;
            margin-bottom: 20px;
          }
          
          .container label {
            display: block;
            margin-bottom: 10px;
            color: #333;
            font-weight: bold;
            text-align: left;
          }
          
          .container input[type="text"],
          .container input[type="password"] {
            width: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 3px;
            margin-bottom: 20px;
          }
          
          .container input[type="submit"] {
            background-color: #333;
            color: #fff;
            padding: 10px 20px;
            border: none;
            cursor: pointer;
          }
          
          .container button {
            background-color: #333;
            color: #fff;
            padding: 10px 20px;
            border: none;
            cursor: pointer;
          }
          
          .container button:hover {
            background-color: #555;
          }
          
          @media (min-width: 768px) {
            body {
              height: auto;
            }
            
            .container {
              max-width: 400px;
            }
          }
        </style>
      </head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
      <body>
        <div class="container">
          <h2>Login</h2>
          <form action="/" method="post">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required><br><br>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required><br><br>
            <input type="submit" value="Login">
          </form>
          <br>
          <button onclick="location.href='/register'">Daftar</button>
        </div>
      </body>
    </html>
  `)
})

app.post('/', (req, res) => {
  //   const username = req.body.username
  //   const password = req.body.password

  const data = fs.readFileSync('./datauser.json')
  const users = JSON.parse(data)
  //   const user = users.find((user) => user.username === username && user.password === password)

  //   if (!user) {
  //     res.send('Username atau password salah. Silakan coba lagi.')
  //     return
  //   }

  //   if (!user.verified) {
  //     res.send('Akun Anda belum diverifikasi. Silakan verifikasi terlebih dahulu.')
  //     return
  //   }

  //   res.redirect('/')

  res.send(users)
})

app.listen(3000, () => console.log('Server ready on port 3000.'))

module.exports = app
