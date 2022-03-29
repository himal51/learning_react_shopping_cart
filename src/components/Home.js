import React from 'react';
import { CartState } from '../context/Context';

const Home = () => {
    const { state: { products } } = CartState();
    console.log(products);

    return (
        <div className='home'>
            {/* <Filter></Filter> */}
            <div className='productContainer'>
                {
                    products.map((prod, i) => (
                        <span key={i}>{prod.name} <br /> </span>
                    ))
                }
            </div>

        </div>
    )
}

export default Home