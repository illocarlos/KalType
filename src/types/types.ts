// tipamos la entrada del category
export type listCategory = {
    id: number,
    name: string
}

// tipamos el objeto del formulario 
export type Activity = {
    id: string,
    category: string,
    name: string,
    calories: number,
}
