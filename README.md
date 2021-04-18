# Application Title: QuitCigs

QuitCigs is an application where a user can log a day to day journal on the experience they face, quitting smoking.  As a former smoker myself, I face an uphill battle every day, and will probably face for the rest of my life.  Quitting smoking is a day to day battle and it's never officially won.  But the goal of this app is to help a user reflect on the struggles they've faced in the past and see how far they've come along the way.

![MainPage1/2](https://i.imgur.com/WJUqggB.png)
![MainPage2/2](https://i.imgur.com/jHOy8np.png)

## Set Up and Installation

1. [Download](../../archive/master.zip) this template.
1. Move the .zip file to your chosen directory and Unzip it (creating a
   folder) -- **NOTE:** if the folder was already unzipped, use the `mv` command
   line to move it to the chosen directory.
1. Rename the directory from QuitCigs_Api -> your-app-name.
1. Move into the new project and `git init`.
1. Replace all instances of `'QuitCigs_Api'` with your app name.
1. Install dependencies with `npm install`.
1. Ensure that you have `nodemon` installed by running `npm install -g nodemon`.
1. Ensure the API is functioning properly by running `npm run server`.
1. Once everything is working, make an initial commit.
1. Follow the steps in [express-api-deployment-guide](https://git.generalassemb.ly/ga-wdi-boston/express-api-deployment-guide)


## Important Links

- [Other Repo](https://github.com/aqbased/QuitCigs)
- [Deployed API](https://secure-journey-73529.herokuapp.com/)
- [Deployed Client](https://aqbased.github.io/QuitCigs/#/)

## Planning Story

After coming up with the app idea, I needed to develop a new resource, which I thought a journal entry would work great for the purpose of this app.  The user would create journal entries and then reflect on past entries to see progress.  The first task was then setting up my back-end to work properly with my new resource.  After confirming it worked properly, the plan was to then move to the front end and make sure the user can interact with the new resource.  Finally after finishing those steps, I decided a good route to take would be to enhance the styling a bit.  All in all that was the plan for my mvp.

### User Stories

- As an unregistered user, I would like to sign up with email and password.
- As a registered user, I would like to sign in with email and password.
- As a signed in user, I would like to change password.
- As a signed in user, I would like to sign out.
- As a signed in user, I would like to create journal entries about my quitting journey.
- As a signed in user, I would like to view/update/delete journal entries.
- As a signed in user, I would like to see how long I haven't smoked for.

### Technologies Used

React
HTML/CSS
Bootstrap
Javascript
React Router
Mongoose
MongoDB

### Catalog of Routes

Verb         |	URI Pattern
------------ | -------------
GET | /journal
GET | /journal/:id
POST | /journal
PATCH | /journal/:id
DELETE | /journal/:id

### Unsolved Problems

- I need to improve the location of the forms and some of the main page.
- I want to improve styling.
- I want to have a user stats section, where they can see more than just how long it's been since they smoked.  Such as money saved/health recovery/etc.

## Images
#### Wireframe:
![wireframe](https://i.imgur.com/HPx187i.png)

#### ERD
![ERD](https://i.imgur.com/nZIm5hI.png)
