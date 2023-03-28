const addToDb =(id) => {
    const getCart = getShoppingCart()
    console.log(getCart);
    if(getCart) {

    }
    else{
        localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart))
    }
}

const getShoppingCart = () => {
    let shoppingCart = {}
    const storedCart = localStorage.getItem("shoppingCart")
    if(storedCart){
        shoppingCart = JSON.parse(storedCart)
    } 
    return shoppingCart
}

export {addToDb}