# AngularPetShelter

CRUD operations all working
Able to create new pets
All pets are displayed upon visiting the website
User may choose a pet to see its details
Able to edit each pet
Edit form is pre-populated with the pet’s existing data
Able to adopt each pet, which removes the pet from the database
Routing
Root route redirects to /pets and displays all pets
Route ‘pets/new’ displays the form to create a new pet
Successful creation and cancel redirect to the root route
Route ‘/pets/:id’ displays all the details of a particular pet
Route ‘/pets/:id/edit’ displays the pre-populated form to edit a pet
Successful edit and cancel redirect to the pet’s details page
Backend validations
All pets must have a name of at least 3 characters
All pets must have a type of at least 3 characters
All pets must have a description of at least 3 characters
All pets may have up to three skills
Error messages inform the user which requirements are not met when creating a pet
Error messages are custom-written (not the mongoose default messages)
HTML and CSS reflect the wireframe to at least 75% accuracy
For a black belt:
Deployed, and not on Heroku
ALL of the following four features:
Each pet’s like button is disabled after clicking it until the component is reloaded. Note: This does not necessarily mean that a user may only like a pet once, unless you want to take on that challenge. The button can be re-enabled by refreshing or otherwise reloading the component.
Do not allow duplicate pet names in the database. Display an error message if the user attempts to create a pet with a name that already exists in the database.
Sort the pets by type so that all the dogs are listed together, all the rabbits together, and so on.
Maintain the validations for creating a pet when editing a pet. Display error messages if requirements are not met when editing.
Also:
Create a short video walking through the features of your app. Show your validations working. There is no need to speak or show your code.
Remove your github repo after deploying.
The wireframe is available for download here.
Don’t worry about:
What the prompts are asking for. Just ask if you are unsure about what the goals are!# PetShelterAngular
