const {app} = require('./app.js');
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Okay, it's running now! And your proof is that you can see this in the terminal. Example app listening at http://localhost:${port}`);
});
