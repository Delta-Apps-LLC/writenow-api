const app = require('./server.js')
const cors = require('cors')

const port = process.env.PORT || 3001

app.use(cors({
  // Change to hosted website url
  origin: 'https://comforting-elf-62983d.netlify.app'
}))

app.listen(port, () => {
  console.log('server is running on port ' + port);
})
