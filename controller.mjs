import express from 'express'
import asyncHandler from 'express-async-handler'
import * as model from './model.mjs'

const app = express()
app.use(express.json())
const PORT = 3001

app.put('/scale', asyncHandler(async(req, res)=>{
    let scale = 0
    const recipe = req.body
    if (req.body.scale_factor < 0){
        scale = Math.abs(1 / recipe.scale_factor)
    } else {
        scale = req.body.scale_factor
    }
    const revisedIngredients = model.scaleQuantities(recipe.ingredients, scale)
    if (revisedIngredients !== 0){
        recipe.ingredients = revisedIngredients
        res.status(200)
        res.json(recipe)
    } else {
        res.status(400)
        res.json({"Error": "Incorrect information received"})
    }
}))

app.listen(PORT, async () => {
    console.log(`Server listening on port ${PORT}...`);
});
