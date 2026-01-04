// Delete Request


// app.delete("/api/users/:id",(request,response)=>{
//   const {
//     body,
//     params:{id},
//   }=request
//   const parseId=parseInt(id);
//   if(isNaN(parseId)) return response.sendStatus(400);
//   const findUserIndex=MockUsers.findIndex((user)=> user.id===parseId);
//   if(findUserIndex===-1) return response.sendStatus(404)
//   MockUsers.splice(findUserIndex);
// })