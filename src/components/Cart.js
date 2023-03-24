import '../styles/Cart.css'

function Cart(){
    const monstera = 8
    const lierre = 10
    const bouquet_fleurs = 15

    return(
        <div className='lmj-cart'>
        <h2>Panier</h2>
        <ul>
            <li>monstera : {monstera}</li> 
            <li>lierre :{lierre}</li>
            <li>bouquet_fleurs: {bouquet_fleurs}</li>
        </ul>
        <p>Total du Panier: {monstera + lierre + bouquet_fleurs} </p>
        </div>
    )
}

export default Cart;