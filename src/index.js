import express, { response } from "express";
import {query,body,validationResult} from "express-validator";


const app = express();

app.use(express.json());

const middleWare= (request,response,next)=>{
      console.log(`${request.method}-${request.url}`);
      next();
};

const resolveIndexByUserId=(request,response,next)=>{
  const {
    body,
    params:{
      id
    },
  }=request;
  const parseId=parseInt(id);
  if(isNaN(parseId)) return response.sendStatus(400);
  findUserIndex=MockUsers.findIndex(id);
  if(findUserIndex===-1) return response.sendStatus(404);
  request.findUserIndex=findUserIndex;
  next();
}

app.use(middleWare);

const PORT=process.env.PORT || 3000;
app.get("/",(request,response,next)=>{
  console.log("Base URL");
  next();
},
(request,response,next)=>{
  console.log("Base URL");
  next();
},
(request,response,next)=>{
  console.log("Base URL");
  next();
},
(request,response,next)=>{
  console.log("Base URL");
  next();
},
(request,response)=>{
  response.status(201).send({msg:"Hello"});
});


app.get("/", middleWare,(req, res) => {
  res.status(200).send({msg : "Pradeep Awasthi"});
});


const MockUsers=[{id: 1, name:"Peter", displayName: "Anson"},
        {id: 2,name:"Andrew ",displayName:"Harry"},
        {id: 3,name:"Robert ",displayName:"Hook"},
        {id: 4, name:"Rajdeep ",displayName:"Yadav"},
      {id: 5, name: "Stephen ",displayName:"Hawkins"}]

      

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
app.use(middleWare,(request,response,next)=>{
  console.log("Finished Logging");
  next();  
});


app.get(
  "/api/users",
  query("filter").optional().isString().notEmpty(),
  (req, res) => {
    console.log(req["express-validator#contexts"]);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { filter, value } = req.query;
    if (filter && value) {
      return res.send(
        MockUsers.filter(user => user[filter]?.includes(value))
      );
    }

    return res.send(MockUsers);
  }
);


// Post  Request
// app.post('/api/users',(request,response)=>{
//   const {body}=request;
//   const newUser={id: MockUsers[MockUsers.length-1].id+1,...body};
//   MockUsers.push(newUser);
//   return response.status(201).send(newUser);
// });


app.post(
  "/api/users",
  body("displayName")
  .isString().withMessage("username must be a string").bail()
  .notEmpty().withMessage("username cannot be empty").bail()
  .isLength({ min: 5, max: 32 })
  .withMessage("username must be 5–32 characters long"),
  (req, res) => {
    console.log("Validator Context:");
    console.log(req["express-validator#contexts"]);

    const errors = validationResult(req);
    console.log(" Validation Result :-");
    console.log(errors);
    console.log("Error Array :-");
    console.log(errors.array());

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      });
    }
    const newUser = {
      id: MockUsers[MockUsers.length - 1].id + 1,
      username: req.body.username
    };
    MockUsers.push(newUser);
    return res.status(201).json(newUser);
  }
);


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
app.put("/api/users/:id", resolveIndexByUserId,(req, res) => {
  const {body,findUserIndex}=request;
  MockUsers[findUserIndex]={id:MockUsers[findUserIndex].id,...body};
  return response.sendStatus(200);
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

