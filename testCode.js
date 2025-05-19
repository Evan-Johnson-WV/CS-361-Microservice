// Creating an recipe that will be scaled up
const recipeList1 = {
    id: "chickenAlfredo",
    scale_factor: 3,
    ingredients: [
        {
            name: "fettucini",
            quantity: 1,
            unit: "lbs"
        },
        {
            name: "chicken",
            quantity: 1,
            unit: "breast"
        },
        {
            name: "alfredo sauce",
            quantity: 16,
            unit: "oz"
        },
        {
            name: "milk",
            quantity: 0.5,
            unit: "c"
        },
    ]
}

// Creating a recipe that will be scaled down
const recipeList2 = {
    id: "torillaSoup",
    scale_factor: -2,
    ingredients: [
        {
            name: "ground beef",
            quantity: 4,
            unit: "lbs"
        },
        {
            name: "salsa",
            quantity: 24,
            unit: "oz"
        },
        {
            name: "black beans",
            quantity: 8,
            unit: "cans"
        },
        {
            name: "frozen corn",
            quantity: 3,
            unit: "lbs"
        },
        {
            name: "beef broth",
            quantity: 10,
            unit: "c"
        },
    ]
}

fetch('http://localhost:3001/scale', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(recipeList1)
})
.then(response => {
        if (response.ok) {
            return response.json(); 
        } else {
            throw new Error('Network response was not ok'); 
        }
    })
    .then(data => console.log(data))
    .catch(error => console.error('There was a problem with the fetch operation:', error));

fetch('http://localhost:3001/scale', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(recipeList2)
})
.then(response => {
        if (response.ok) {
            return response.json(); 
        } else {
            throw new Error('Network response was not ok'); 
        }
    })
    .then(data => console.log(data))
    .catch(error => console.error('There was a problem with the fetch operation:', error));
