export const PRODUCTS_STORAGE_KEY = "v_shop_products"   // store all products
export const CART_STORAGE_KEY = 'v_shop_cart'        // store add to cart data
export let getdata = (key)=>{
    if(!key){
        return null
    }else{
       let data = localStorage.getItem(key)
       return JSON.parse(data)
    }
}