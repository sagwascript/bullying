import { http } from './server'

const PORT = 3000

http.listen(PORT, () => {
  console.log("I'm listening")
})
