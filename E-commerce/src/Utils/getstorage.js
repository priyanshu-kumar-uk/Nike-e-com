export const PRODUCTS_STORAGE_KEY = "v_shop_products"
export const CART_STORAGE_KEY = 'v_shop_cart'
export const SINGLE_CART_STORAGE_KEY  = 'v_view-cart'
export let getdata = (key)=>{
    if(!key){
        return null
    }else{
       let data = localStorage.getItem(key)
       return JSON.parse(data)
    }
}