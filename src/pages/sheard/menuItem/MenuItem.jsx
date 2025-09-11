import React from 'react';

const MenuItem = ({ item }) => {
    const { name, recipe, image, price } = item
    return (
        <div className='flex'>
            <img className='w-[120px] rounded-[0_200px_200px_200px]' src={image} alt="" />
            <div className='ml-2'>
                <h1 className='uppercase'>{name}------------</h1>
                <p >{recipe}</p>
            </div>
            <h2 className='text-yellow-700'>{price}</h2>
        </div>
    );
};

export default MenuItem;