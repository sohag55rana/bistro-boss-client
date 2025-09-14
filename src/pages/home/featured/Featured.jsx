import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg"
import './featured.css'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed pt-8 text-white mb-10">
            <SectionTitle subHeading={"Check it Out"} heading={"Featured item"}></SectionTitle>
            <div className="md:flex justify-center items-center py-8 px-16 bg-slate-400/30">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p className="text-3xl">Aug 20, 2029</p>
                    <p className="uppercase">when can i get some</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta nemo ipsum quas voluptate cupiditate unde rerum iste, minus nesciunt incidunt. Nemo sapiente cum fuga, numquam nulla quasi laboriosam magni illum ducimus consequuntur similique earum sunt delectus repellendus dolore corporis praesentium totam magnam fugiat eum pariatur nihil? Iusto, repellat non? Modi.</p>
                    <button className="btn btn-outline border-0 text-black border-b-4 mt-4 rounded-2xl border-black">Order Now</button>
                </div>
            </div>

        </div>
    );
};

export default Featured;