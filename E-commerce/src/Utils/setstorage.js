export const  WISHLIST_STORAGE_KEY = 'v_shop_wishlist'

export let setdata = (key,value)=>{
    if(!key||!value){
        return "Reuired data fill"
    }else{
    localStorage.setItem(key,JSON.stringify(value))
    }
 }