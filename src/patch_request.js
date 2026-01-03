// Put and Patch Request are mainly used for the UPDATING 

// Patch request updates partial things like name or username


// Patch Request 
// app.patch("/api/users/:id",(request,response)=>{
//     const {
//       body,
//       params:{id},
//     }=request;
//     const parseId=parseInt(id);
//     if(isNaN(parseId)) return response.sendStatus(400);
//     const findUserIndex=MockUsers.findIndex((user)=> user.id===parseId);
//     if(findUserIndex===-1) return response.sendStatus(404);
//     MockUsers[findUserIndex]={...MockUsers[findUserIndex],...body};
//     return response.sendStatus(200);
// });
