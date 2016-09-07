var router = require('express').Router(),
    todoRoutes = require('./todos');

router.use('/api/v1/todos', todoRoutes);

// router.get('/', function(req,res,next){
//     res.render('index');
// });

module.exports = router;