import {Router} from "express";
import { validationResult,query } from "express-validator";




const MockUsers=[{id: 1, name:"Peter", displayName: "Anson"},
        {id: 2,name:"Andrew ",displayName:"Harry"},
        {id: 3,name:"Robert ",displayName:"Hook"},
        {id: 4, name:"Rajdeep ",displayName:"Yadav"},
      {id: 5, name: "Stephen ",displayName:"Hawkins"}]

      

const router= Router();

router.get("/api/users",
    query("filter")
    .isString()
    .notEmpty()
    .withMessage("Must not be Empty")
    .isLength({min:3,max:10})
    .withMessage("Must be at least 3-10 Characters"),
    (request,response)=>{
        const result=validationResult(request);
        console.log(result);
        const {query:{filter,value},}=request;
        if(filter && value){
            return response.send(MockUsers.filter((user)=>user[filter].includes(value)))
        }
        return response.send(MockUsers);
    }
);

export default router;
