

const SectionTitile = ({ heading, subheading }) => {
    return (
        <div className="mx-auto w-4/12 text-center">
            <p className="text-orange-600 mt-20">{subheading}</p>
            <h2 className="text-5xl uppercase border-y-2 py-5 mt-4 mb-10">{heading}</h2>
        </div>
    );
};

export default SectionTitile;