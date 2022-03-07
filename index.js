const server = require('./server')
const PORT = process.env.PORT || 3030
server.listen(PORT, () => {
    console.log(`This app running on https://localhost:${PORT}`)
})