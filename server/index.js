const express = require("express")

const app = express()
//全局JWT密钥
app.set('secret', 'abcdfg')


app.use(require('cors')())
app.use(express.json())
app.use('/uploads', express.static(__dirname + '/uploads'))

require('./plugins/db')(app)
require('./routes/admin')(app)


app.listen(3000, () => {
  console.log('http://localhost:3000')
});

