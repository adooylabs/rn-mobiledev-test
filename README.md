# Mobile Dev Test

*Note:*
  - This boilerplate comes pre-configured with Redux, Axios, and Redux-Saga

*Code Submission:*
  - Create a private fork to your github account [https://github.com/inkblot-therapy/rn-mobiledev-test]
  - Create a branch with your username and feature e.g [audee-user-login]
  - When the feature is finished, create a Pull Request so we can begin the Code Review.

The task is to complete the login feature for the Test Mobile App,
and display some user details if the user has successfully logged in.

When the user clicks the login button, 
dispatch a event that creates an AXIOS request 
and hit inkblot backend API (staging):

[POST] https://api.inkblottherapy.com/api/

*Schema (with example value):* 
{
  email: "user@domain.com"
  password: "userpass"
}

*Test Login Credentials:*
  u: audee+test@inkblottherapy.com
  p: pass123
  (or)
  u: ben+client@inkblottherapy.com
  p: password

If response 200 (OK) is received, load up user data in REDUX state using a reducer;
This should trigger a render event for the private page/component that shows
user fullname and email, and a greeting. 

