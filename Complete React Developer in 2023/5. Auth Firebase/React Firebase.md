#Authentication With React + Firebase
When you open up an app on your phone or go to a website from your browser, the content that you see by default is what everyone else sees. But once you sign in or sign up into the application, you are provided with content based on your information, interests and preferences. This authentication process not only creates a tailored user experience but also acts as a security layer for users. No one else can access your profile without the credentials that you have set for the application. Building such an authentication system used to be a tedious task but with Firebase it gets much easier. It essentially should take you not more than 5 steps to put everything together and I’m here to show you exactly that.

I’ll be posting a series of articles that’ll cover individual Firebase services coupled with ReactJS so that you get an idea of how to practically use them in all your projects.

* Step 1 : Setup your React + Firebase project.

* Step 2 : Enabling the type of authentication services that you’ll be using from Firebase console. (For this article we’ll be going with the regular “Email + Password” login.)

* Step 3 : Creating basic react components.

* Step 4 : Using simple cloud functions provided by Firebase for authentication.

### Step 1 : Setup your project
I have an article that’ll help you with the setup. It covers the basics on how to get a simple React + Firebase project set up in under 10 minutes. Super simple read, click here.

### Step 2 : Enabling the Firebase Services

To enable your authentication services, log in to your Firebase account and go to your project console. In the authentication tab, click on “Sign-In Method” and enable “Email/Password” . That’s pretty much it.




### Step 3 : Creating necessary React components.
Now, the primary elements that we’ll be using in our React project would be :

* Login + Register Component
* Home Page (Page rendered once user is authenticated)
* Firebase config file that we get from Step 1.

The Login/Register components are your typical input fields + submit button type of components. I’ve used react hooks to maintain state for the input fields but you can use anything for managing your state.


Sign In Component

Sign Up Component
Open it on your browser. They’ll look something like this(I’ve added basic styles to the application. You can get it from the source code that I’ve shared at the end of this article.)


Sign In page

Sign up page
There’s also a Home page which can be accessed once the user is authenticated. It’s just some text with a logout button.


Home page
Now the firebase config file that you get after completing the setup from Step 1 exports an auth function from the firebase instance.

export const auth = firebase.auth()
This auth constant will be imported to all those components that will perform authentication related actions. So in our case we’ll be importing it to SignIn, SignUp and Home Page. Once you’ve imported the auth firebase function, you simply call the “createUserWithEmailAndPassword” in case of signUp component and “signInWithEmailAndPassword” in case of signIn component. It’s that simple! This returns a promise so append a then or a catch to do any follow up operations. In our case we’ll be the user to the Home page, so we make use of the useHistory hook provided by “react-router-dom”(if not installed, install it to your project by typing “npm i react-router-dom”). This useHistory hook can be used to push routes to the global history instance. So now your signIn and signUp components would look like this


Modified Sign In component

Modified Sign Up component
There’s one small thing that’s left with our project now. If the user is authenticated, he/she has to be redirected directly to the home page and if the user is not authenticated then, he/she shouldn’t be allowed to go to the home page i.e redirected to the login page. You can do that by making use of “onAuthStateChanged”, a listener provided by firebase. This function let’s you check the current status of the user and based on that you can redirect him/her to either login page(if unauthenticated) or home page(if authenticated).

```
useEffect(() => {
   auth.onAuthStateChanged(user => {
      if (user) history.push('/main')
   })
}, []) // THIS BLOCK SHOULD BE ADDED IN SIGNIN AND SINGUP PAGES
```

I have used the useEffect hook for this purpose with an empty dependency list so that this block of code runs exactly once on mount.

```
useEffect(() => {
   auth.onAuthStateChanged(user => {
      if (!user) history.push('/auth');
   })
},[]) // THIS BLOCK SHOULD BE ADDED IN HOME PAGE
```

And that’s it. You have now set up email + password authentication for your React project with the help of firebase. Firebase also provides social media based logins which also make use of similar authentication functions. I might cover them in a follow up article.

