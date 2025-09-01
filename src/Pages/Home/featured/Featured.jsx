import React from 'react';
import SectionTitile from '../../../components/SectionTitile';
import featureImg from '../../../assets/home/featured.jpg'
import './featured.css'
const Featured = () => {

    return (
        <div className='bgFeatured bg-fixed text-white pt-10 my-20'>
            <SectionTitile
                subheading={'---Check it out---'}
                heading={'FROM OUR MENU'}
            ></SectionTitile>
            <div className='md:flex justify-center items-center py-12 px-36 pt-12 bg-slate-500/30'>
                <div>
                    <img src={featureImg} alt="" />
                </div>
                <div className='md:ml-10 space-y-5'>
                    <p>March 20, 2023</p>
                    <p>WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline border-0 rounded-xl border-b-6 uppercase p-5 mt-4 text-2xl">Order now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;