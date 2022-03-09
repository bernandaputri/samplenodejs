const app = require('./server') // Link to your server file
const supertest = require('supertest')
const request = supertest(app)


it('Call the /group endpoint', async done => {
    const res = await request.get('/group')
    expect(res.status).toBe(200)
    expect(res.text).toBe('Ready to win! - HAI MP32')
    done()
})
it('Call the / endpoint', async done => {
    const res = await request.get('/')
    expect(res.status).toBe(200)
    expect(res.text).toBe('This web app is created by HAI MP32')
    done()
})
it('Call the /greet endpoint', async done => {
    const res = await request.get('/greet')
    expect(res.status).toBe(200)
    expect(res.text).toBe('Hi!')
    done()
})