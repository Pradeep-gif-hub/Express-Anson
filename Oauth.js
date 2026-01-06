// The username and Password is mainly used for the login but here for teh AUTHENTIFICATION 
// it never SAVES the PASSWORD 

// the PASSPORT IS A LIBRARY THAT ACTUALLY USES OAUTH2.0 (Open Authorization)

// Passport provides this via Passport OAuth strategic 
// passport -google -oauth20
// passport -discord
// passport -github2

// Ur App trusts Google/Discorded to verify the user, and Google/Discord send back proof...

// user clicks the Login with Google
// Redirects the provider
// user gives the permission
// Provider send the Oauth Code
// Passport exchange code token- Sends ClientID, ClientSecret and get access to the Tokens 
// with those tokens fetches user profile 


// Passport Oauth uses mainly Passport.use,Passport.authenticate,serializeUser, deserializeUser adn req.isAuthenticated
// to implement third party authentification

//Passport.use( new strategy - defines how OAuth Works)
// passport.authenticate-(Triggers the OAuth flow)
// Passport.serialize (stores user in session)
// passport.deserialize (restores user from session)
// req.isAuthenticated-(protect Routes)
// 