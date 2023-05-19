import React from 'react'

const Product = ({title,description,price,brand,image}) => {
   
    return (
        <div>
            <div className='p-4'>

                <div className='rounded bg-gray-200  shadow drop-shadow-sm overflow-hidden'>
                    <img src={image} className='h-24 w-full' alt="" />
                    <div className='p-2 space-y-2'>
                        <p className='font-bold '>{title.length>20?title.substring(0,20)+'...':title}</p>
                        <p className='text-sm'>
                            {description.length>20?description.substring(0,20)+'...':description}
                            </p>
                        <p className='text-sm font-bold'>Price:${price}</p>
                        <p className='text-sm'>Brand:{brand.length>20?brand.substring(0,20)+'...':brand}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
