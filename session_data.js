// SESSION DATA are also used for storing as BACK UP, if the SERVER goes down the session data is stored
// adn that is sent over as the response through the DB 

//  it is stored in diff location depending upon the DATABASE uses
// MEMORY (default, not for production)
// MONGODB-(CONNECT-MONGO)
// REDIS-(best for production)
// SQL-(Databases)

// SERVER SENDS THE COOKIE ONLY WHEN CREATING,UPDATING, LOGGING IN the sessions,after that, the browser automatically 
//includes that cookie in subsequent requests 

// SERVER sends the COOKIE to browser (carrying the SESSION ID) and once the client accepts it then 
// the Browser sends the cookie back to server on every requesT JUST LIKE A VISITOR SLIP
// if the client does not accept the COOKIE then for every login the SERVER sends the cookie to the browser
