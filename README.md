# CS-361-Microservice

## Instructions:

Requesting Data:
You can request the microservice by sending a PUT HTTP request with the recipe to be changed in the body of the request. The microservice will send back the updated recipe with the new ingredient quantities.

EX:

PUT '/scale'
Necessary parameters: scale_factor, ingredients with quantities.
If scaling up, scale_factor must be positive. If scaling down, scale_factor must be negative.

Example body:
{
   recipe_id: ####,
   scale_factor: #,
   ingredients: [
     {
       name: "flour"
       quantity: 1.5
       unit: "c"
     },
     {
       name: "milk"
       quantity: 0.5
       unit: "c"
     }
   ]
}

Example call:
fetch('http://localhost:3001/scale', {
  method: 'PUT',
  headers: {
    'content-type': 'application/json'
    }
  body: JSON.stringify(recipeObject)
.then(response => response.json)
.then(data => console.log(data))
.catch(error => console.error('Error adjusting recipe:', error));

![UML Diagram](https://github.com/user-attachments/assets/a4c7c330-0bee-4a16-a629-5ebd607b7850)
