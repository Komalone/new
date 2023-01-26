import './Store.css'

const StoreItem=(props)=>{
    
    return (
        <div className='album' id={props.id}>
            <h3>{props.name}</h3>
            <div className="image-container">
                <img className="prod-images" src={props.imageURL} alt=""/>
            </div>
            <div className="prod-details">
                <span>$<span>{props.price}</span></span>
                <button className="shop-item-button" type='button' onClick={props.addToCart}>ADD TO CART</button>
            </div>
        </div>
    );
};
export default StoreItem