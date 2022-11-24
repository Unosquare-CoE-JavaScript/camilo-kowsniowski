# Deploy to Netlify

### How to deploy React Apps in less than 30 Seconds

At Netlify we use React in production and are familiar with the challenges in deploying it to production as well. Up until today, React has had no opinions on what to use with tooling, which has made deploying a unique problem to each project.

Today Facebook announced their opinated boiler-plate for getting React projects started. This is great news, since the ecosystem around getting React projects started has been in a state of Flux (see what I did there?).

### Steps to deploying your React app

Now you can get a React project up and running with a few commands, and in less than 30 seconds you can have it deployed with Netlify. Here's how:

### Step 1: Install or create
Open your terminal and enter the following:

```
npm install -g create-react-app
create-react-app hello-world
cd hello-world
npm run build
```
```
npm install netlify-cli -g
netlify deploy
```

Or deploy a create-react-app site with Netlify Functions support with just 1 click:

## Deploy to Netlify

### Step 2: Choose a new project

If you are using the netlify CLI, follow command line prompts and choose yes for new project and ./build as your deploy folder and voila you have a production React app!

If that was too hard to follow, here is a gif of me doing it:

using the Netlify CLI command line prompts

You can also link to a GitHub repo for continuous deployment for specified branches and will grant you our nifty Deploy Preview feature.

Happy Hacking :)

Step 3: Redirect and rewrite rules
If you choose to use something for routing (like React Router for example), you will need to set up a redirect and rewrite rule for the single page app.


```
/*    /index.html   200
```

This redirect rule above will serve the index.html instead of giving a 404 no matter what URL the browser requests.