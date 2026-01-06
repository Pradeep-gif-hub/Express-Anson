// Passport is a MIDDLEWARE for NODE.JS 
//mainly has two methods one for the STORING OF THE SELECTED DATA and another one for returning the
// entire details on the basis of the SESSION STORE ID....

// passport.serialize()- DECIDES WHAT DATA OF THE USER WILL BE STORED IN THE SESSION (once user logins)
//(STORES USER IDENTIFIER IN SESSION)

// passport.deserialize()- GETS FULL USER DATA BACK USING SESSION INFO..(destructure every details 
// on the basis of session ID from the SERVER ),(FETCH FULL USER FROM DB USING SESSION DATA)

