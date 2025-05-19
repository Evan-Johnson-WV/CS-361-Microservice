function scaleQuantities(ingredients, scale){
    try{
        let i = 0
        const scaledIngredients = []
        while (i < ingredients.length){
            scaledIngredients[i] = ingredients[i]
            scaledIngredients[i].quantity = ingredients[i].quantity * scale
            i += 1 
        }
        return (scaledIngredients)
    } catch {
        return (0)
    }
}

export { scaleQuantities }