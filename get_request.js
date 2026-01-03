app.get("/", (req, res) => {
  res.status(200).send({msg : "Pradeep Awasthi"});
});

const MockUsers=[{id: 1, name: " Peter", displayName: "Anson"},
        {id: 2,name:"Andrew ", displayName: "Harry"},
        {id: 3,name: "Robert ", displayName: "Hook"},
        {id: 4, name: "Rajdeep ", displayName: "Yadav"}]

app.get('/api/users',(request, response)=>{
    response.send({msg:"hi"})

});

app.get('/api/users/:id',(request,response)=>{
    console.log(request.params);
    const parseId=parseInt(request.params.id);
    console.log(parseId);
    if(isNaN(parseId))
        return response.status(404).send({msg:"Bad Request. Invalid ID."});
    const findUser= MockUsers.find((user)=> user.id===parseId);
    if(!findUser) return response.sendStatus(404);
    return response.send(findUser)
    });

app.get('/api/products',(request,response)=>{
    response.send([{id: 123, Name: "Chicken Breast"}])
})