const {Router} = require('express')
const router = Router()

router.get('/', async (req, res) => {
    try{
        const courses = 'asdddd'
        
        res.render('courses', {
          title: 'Курсы',
          isCourses: true,
          courses
        })
        console.log(courses)
    } catch(e) {
        console.log(e)
    }
})

module.exports = router