# guardChallenge

## Challenge Directions 

1. On the login page, create a username and password form with a login button. 
2. Pass the user's input from login to the userService, to simulate an actual backend verification, only set a loggedIn property on the service to true is the user inputted the username as 'user' and password as '1234'. 
3. Have the login button route to the home page, but create a guard to block this routing if the loggedIn property on the service is false.
4. Modify the home route to have a dynamic url, use the dynamic param to send the username from login to home and display it on home.

Bonus : Create a logout button on home and use a special guard which will block the user from leaving if they decline a window prompt. 
