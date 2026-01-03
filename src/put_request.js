// Put and Patch Request are mainly used for the UPDATING 
// Updating the entire field or datasets 


// app.put("/api/users/:id", (req, res) => {
    
//   const oldId = Number(req.params.id);
//   const { id, name, displayName } = req.body;

//   const index = MockUsers.findIndex(user => user.id === oldId);
//   if (index === -1) return res.status(404).send({ msg: "User not found" });

//   // prevent duplicate IDs
//   if (id && MockUsers.some(u => u.id === id && u.id !== oldId)) {
//     return res.status(400).send({ msg: "ID already exists" });
//   }

//   MockUsers[index] = {
//     id: id ?? oldId,
//     name,
//     displayName
//   };

//   res.send(MockUsers[index]);
// });
