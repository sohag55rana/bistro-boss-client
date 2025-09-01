import { useEffect, useState } from "react";
import SectionTitile from "../../../components/SectionTitile";


const ReciepeCard = () => {
    const [reciepes, setReciepes] = useState([])
    useEffect(() => {
        fetch('reciepeCard.json')
            .then(res => res.json())
            .then(data => setReciepes(data))
    }, [])
    return (
        <div className="my-12">
            <SectionTitile
                subheading={'---Should Try---'}
                heading={'CHEF RECOMMENDS'}
            ></SectionTitile>

            <div className="flex">
                {
                    reciepes.map(reciepe =>
                        <div key={reciepe._id} className="card bg-base-100 w-96 shadow-sm ">
                            <figure className="px-10 pt-10">
                                <img
                                    src={reciepe.image}
                                    alt="Shoes"
                                    className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="text-2xl font-bold uppercase">{reciepe.title}</h2>
                                <p>{reciepe.description}</p>
                                <div className="card-actions">
                                    <button className="btn btn-active uppercase">add to cart</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ReciepeCard;