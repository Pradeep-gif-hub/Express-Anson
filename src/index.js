import express, { response } from "express";

const app = express();

app.use(express.json());

const middleWare= (request,response,next)=>{
      console.log(`${request.method}-${request.url}`);
      next();
};

app.use(middleWare);



const PORT = process.env.PORT || 3000;


app.get("/", (req, res) => {
  res.status(200).send({msg : "Pradeep Awasthi"});
});

const MockUsers=[{id: 1, name: " Peter", displayName: "Anson"},
        {id: 2,name:"Andrew ", displayName:"Harry"},
        {id: 3,name:"Robert ", displayName:"Hook"},
        {id: 4, name:"Rajdeep ", displayName:"Yadav"},
      {id: 5, name: "Stephen ", displayName:"Hawkins"}]


// Query Parameter 
app.get('/api/users',(request, response)=>{
    console.log(request.query);
    const{
      query:{ filter,value},
    }=request;
    if(!filter && !value) response.send(MockUsers);
    if(filter && value){
      return response.send(MockUsers.filter((user)=> user[filter].includes(value)))
    }

});


// Post  Request
app.post('/api/users',(request,response)=>{
  const {body}=request;
  const newUser={id: MockUsers[MockUsers.length-1].id+1,...body};
  MockUsers.push(newUser);
  return response.status(201).send(newUser);
  
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

// Put Request

app.put("/api/users/:id", (req, res) => {
  const oldId = Number(req.params.id);
  const { id, name, displayName } = req.body;

  const index = MockUsers.findIndex(user => user.id === oldId);
  if (index === -1) return res.status(404).send({ msg: "User not found" });

  // prevent duplicate IDs
  if (id && MockUsers.some(u => u.id === id && u.id !== oldId)) {
    return res.status(400).send({ msg: "ID already exists" });
  }

  MockUsers[index] = {
    id: id ?? oldId,
    name,
    displayName
  };

  res.send(MockUsers[index]);
});


// Patch Request 
app.patch("/api/users/:id",(request,response)=>{
    const {
      body,
      params:{id},
    }=request;
    const parseId=parseInt(id);
    if(isNaN(parseId)) return response.sendStatus(400);
    const findUserIndex=MockUsers.findIndex((user)=> user.id===parseId);
    if(findUserIndex===-1) return response.sendStatus(404);
    MockUsers[findUserIndex]={...MockUsers[findUserIndex],...body};
    return response.sendStatus(200);
});

// Delete Request

app.delete("/api/users/:id",(request,response)=>{
  const {
    body,
    params:{id},
  }=request
  const parseId=parseInt(id);
  if(isNaN(parseId)) return response.sendStatus(400);
  const findUserIndex=MockUsers.findIndex((user)=> user.id===parseId);
  if(findUserIndex===-1) return response.sendStatus(404)
  MockUsers.splice(findUserIndex);
})

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});

