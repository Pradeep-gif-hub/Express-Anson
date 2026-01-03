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
