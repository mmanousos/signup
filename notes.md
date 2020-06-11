# Requirements

Below are the requirements for the tech assignment that I had mentioned, I just need you to build a sign-up flow with React/Redux (with NodeJS, express, and a Database of your choice for the backend). Below are the requirements, feel free to get this sent back to me within the next 48 hours (you can submit using Github or simply send a Zip Folder).

Setup React/React Router and create 3 pages

- Landing Page
- Verification Page
- Confirmation Page

LANDING PAGE will have a sign-up form consisting of the following fields:

- First Name
- Last Name
- Username
- Email
- Password
- Confirm Password

VERIFICATION PAGE will display the user's information and two options:

CORRECT INFORMATION
CONFIRM

If a user confirms that the information is correct, save the information to a database (via a NodeJS endpoint) and then take them to a simple confirmation page.

If a user clicks on 'correct the information' it will take them back to the home page, displaying the information already entered.

CONFIRMATION PAGE (Just a simple confirmation page... nothing fancy).

If you have any questions, please feel free to reach back out.

## Working notes

### Landing / Signup Page

- all fields are required
- verify email is valid syntax
- check password and confirmed password are the same before form is submitted

save user information into memory (redux store)

new / edit form are the same

- pass an empty user object to the new form
- pass populated user object to edit form
- controlled component for form entries
- use validator npm package to validate email addresses

### Verification Page

- display password in plaintext so user can verify all details
- only show password (no need for confirmation field here)
- **edit** button goes to edit page, populating exisiting details (including password confirmation)
- **confirm** button sends data to database and moves user forward to confirmation page once their data has been saved successfully

### Confirmation Page

Display success message.

## Database

### Schema

_Users_  
id Int PK  
first_name String  
last_name String  
username String  
email String  
password String (Hashed)  
timestamp Datetime

## Design

- make form labels bold
- header text changes on each page

## TODO

### functionality

- check password maches confirm password field if confirmpassword field is already filled

### design

- color of buttons
- layout of form: want labels next to fields
- header update on each page

### database

- install

### testing

- components
- api
