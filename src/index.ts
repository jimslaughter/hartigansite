import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>Hartigan Project Management</title>
        <link rel="stylesheet" href="/style.css" />
      </head>
      <body>
        <h1>Welcome to Hartigan Project Management</h1>
        <p>This page is styled with CSS served from the public folder.</p>
      </body>
    </html>
  `)
})

export default app
