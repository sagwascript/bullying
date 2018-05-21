import express from 'express'
import recastai from 'recastai'
import httpLib from 'http'
import socketIo from 'socket.io'

import setupMidware from './middleware'

const app = express()
export const http = httpLib.Server(app)
const io = socketIo(http)

setupMidware(app)
const client = new recastai.build('55cb6cf097c4704b0441c7e70273f7c5')

io.on('connection', socket => {
  console.log('user connected')
  // socket.on('chat message', msg => console.log(msg))
  socket.on('chat_bot', message => {
    client
      .dialog({ type: 'text', content: message }, { conversationId: 'CONVERSATION_ID' })
      .then(res => {
        // const resMsg = res.messages.length > 0 ? res.messages[0].content : "Sorry, I don't understand"

        console.log('you: ' + message)
        console.log('bot: ' + res.messages[0].content)
        // Do your code
      })
      .catch(err => console.error('Something went wrong', err))
  })
})

app.get('/chat', (req, res) => {
  res.sendFile('/run/media/natasha/Emerald/PROGRAMMING/Projects/bullying/dist/index.html')
})

// app.post('/bot', function(req, res) {
//   client
//     .dialog({ type: 'text', content: 'what is your name ?' }, { conversationId: 'CONVERSATION_ID' })
//     .then(res => {
//       console.log(res.messages)
//       // Do your code
//     })
//     .catch(err => console.error('Something went wrong', err))
// })

app.all('*', (req, res) => {
  res.send('someday somewhere')
})

export default app
