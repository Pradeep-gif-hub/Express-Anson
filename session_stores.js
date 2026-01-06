// A session is a way for a server to remember a user across multiple requests
// since HTTP is stateless ( each request is independent),session help maintain state
// session stores specific data on server and the user is identified by the SESSION ID ( sent via cookie)

// USER LOGINS
// SERVER CREATES A SESSION AND STORES USE DATA after verifying the credentials
// SERVER SENDS A SESSION ID to the BROWSER(INSIDE A COOKIE FORMAT)- cookie only stores session ID- (name,value,timeline of expiry) 
// BROWSER SENDS that SESSION ID with EVERY REQUEST
// SERVER USES THe ID to fetch session DATA
// USER STAYS LOGGED IN UNTIL SESSION EXPIRES or LOGGED OUT 

// it has an instance as SECRET,SAVEUNINTIALIZED,RESAVE,COOKIE,STORE,