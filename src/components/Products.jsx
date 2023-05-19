import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Product from './Product'


const Products = () => {


    const [products, setProducts] = useState([
      
    ])
    useEffect(() => {
        axios.get('https://dummyjson.com/products').then((response) => {
           console.log(response.data.products);
            setProducts(response.data.products)
        }).catch(() => {
            console.log("error in fetching data");
        })
    }, [])
    return (

        <div>
            {/* product__container */}

            {
                products.length > 0 ?
                    <div className='grid grid-cols-2 max-w-4xl mx-auto md:grid-cols-3'>
                        {
                            products.map(({title,id,description,brand,price,thumbnail})=>
                             <Product key={id} title={title} brand={brand} description={description} price={price} image={thumbnail} />
                             )
                        }
                       
                    </div>
                    :
                    <div className='p-2'>
                        <p className='text-xs bg-red-500 rounded text-white text-center font-bold p-2'>please wait loading....</p>
                    </div>
            }

        </div>
    )
}

export default Products
