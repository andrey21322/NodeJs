const {Router} = require('express')
const router = Router()

router.post('/', async (req, res) => {
  
    try{
        const data = {
            name: req.body.name,
            surname: req.body.surname,
            txt: req.body.txt
          }
          console.log(data)
    } catch(e) {
        console.log(e)
    }
})

module.exports = router