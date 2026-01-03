// http://localhost:3000/api/users?filter=displayName&value=o

 // Query Params (Parameter) is mainly as of ?key1=value1&key2=value2 ( works mainly as filtering) 
// app.get('/api/users',(request, response)=>{
//     console.log(request.query);
//     const{
//       query:{ filter,value},
//     }=request;
//     if(!filter && !value) response.send(MockUsers);
//     if(filter && value){
//       return response.send(MockUsers.filter((user)=> user[filter].includes(value)))
//     }

// });