var router = require('express').Router();
var mongojs = require('mongojs'),
    db = mongojs('mongodb://distres117:distres117@ds019936.mlab.com:19936/mean_todos_app', ['todos'])

function getReponse(err, res){
    if (err) this.send(err);
    else this.json(res);
}

function findOne(id, callback){
    db.todos.findOne({_id: mongojs.ObjectId(id)}, callback);
}

//Get all todos
router.get('/', function(req,res,next){
    db.todos.find(getReponse.bind(res))
});

//Get single todo
router.get('/:id', function(req,res,next){
    findOne(req.params.id, getReponse.bind(res));
});

router.post('/', function(req,res,next){
    var todo = req.body;
    todo.isCompleted = false;
    if (!todo.text) res.status(400).json({'error': 'invalid data'})
    else db.todos.save(todo, getReponse.bind(res));
});

router.put('/:id', function(req,res,next){
    var todo = req.body;
    db.todos.update(
        {_id: mongojs.ObjectId(req.params.id)},{
            $set: {
                text: todo.text,
                isCompleted: todo.isCompleted === "true" ? true : false
            }
        },
        {}, function(){
            res.sendStatus(200);
        });
});

router.delete('/:id', function(req,res,next){
    db.todos.remove({_id: mongojs.ObjectId(req.params.id)}, getReponse.bind(res));
})

module.exports = router;