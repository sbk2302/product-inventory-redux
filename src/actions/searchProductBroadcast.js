const searchProductBroadcast = function(products){
    console.log(products)
    return ({
        type:'SEARCH_PRODUCTS',
        payload:products
    })
}
export default searchProductBroadcast;