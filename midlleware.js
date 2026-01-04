// like a function that can have logic
// Request handler as well
// used to return response too

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
