export interface Product{
    id: number,
    name: string,
    ingredients?: string,
    allergens?:string,
    information?: string,
    image: string,
    description?: string,
    category?: Category
}

export interface Category{
    id: number,
    name: string,
    subcategory: Subcategory
}

export interface Subcategory{
    id: number,
    name: string
}
