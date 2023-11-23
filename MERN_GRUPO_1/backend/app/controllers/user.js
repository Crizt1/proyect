
//Insertar Data en la BD;
/*exports.insertData = (req, res) => {
    const data = req.body;
    model.create(data, (err, docs) =>{
        if (err) {
            res.send({ error: "Error"}, 422);
        } else{
            res.send([data: docs]);
        }
        res.send({ data: docs});
    });
};*/
/*
exports.getData = (req, res)=>{
    //obtener la data
    model.find({}, (err, docs)=>{
        res.send({docs,});
    });
};
//parsear el id
const parseId = (id) => { 
//Transformamos el String que viene de la URL(navegador) por medio de la función ParseId
return mongoose.Types.ObjectId(id);
}
//Validamos que el valor del parametro que se esta pasando sea un objeto_i


exports.updateSingle = (req, res) =>{
    const {id} = req.params;
    const body = req.body;
    model.updateOne({_id: parseId(id) }, body, (err, docs) =>{
        res.send({
           items: docs, 
        });
    });
};

*/
