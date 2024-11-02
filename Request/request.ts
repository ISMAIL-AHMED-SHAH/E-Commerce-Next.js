export async function getAllCategory(): Promise<string[]>{
    const categoryRes = await fetch('https://fakestoreapi.com/products/categories');
    return categoryRes.json()
}

export async function getAllProducts() {
    const productRes = await fetch('https://fakestoreapi.com/products');
    return productRes.json()
}

export async function getSingleProduct(id:string){
    const singleProductRes = await fetch(`https://fakestoreapi.com/products/1${id}`)
    return singleProductRes.json()
}