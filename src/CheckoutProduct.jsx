import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import './CheckoutProduct.css';


function CheckoutProduct({id, title, image, price,rating}){
    let halfRating=(rating-Math.floor(rating))*10;
    let outline=0;
    halfRating>0
    ?(outline=5-Math.ceil(rating))
    :(outline=5-Math.floor(rating));
    return(
        <div className='CheckoutProduct'>
            <img className='CheckoutProduct__image'
            src={image}
             alt=''
             />

            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>

                <p className='checkoutProduct_price'>
                    <small>$</small>
                    <strong>{price}</strong>

                </p>
                <div className="CheckoutProduct_Rating">
                                {/* For Full Star */}
                                {Array(Math.floor(rating))
                                .fill()
                                .map((_, index)=>(
                                    <StarIcon key={index}/>
                                ))}
                                {/*For Half Star */}
                                {halfRating>0?<StarHalfIcon/>:<></>}
                                {outline > 0 ? Array(outline).fill().map((_, index)=>
                                    <StarOutlineIcon key={index}/>
                                
                                ):""}
                            </div>

                            <button>
                                Remove from Basket
                            </button>

            </div>
        </div>
    )
}

export default CheckoutProduct;