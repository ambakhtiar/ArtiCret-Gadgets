import { CiCircleRemove } from "react-icons/ci";


const DashboardItem = ({ card }) => {
    const { product_title, product_image, description, price } = card;

    return (
        <div className="flex justify-between gap-4 p-8">
            <div className="flex justify-start gap-8 rounded-xl">
                <img className="w-1/5 object-contain" src={product_image} alt="" />
                <div className="flex flex-col justify-evenly">
                    <h3 className="text-2xl font-semibold">{product_title}</h3>
                    <p className="text-[#09080F]">{description}</p>
                    <h5 className="text-[#09080F] text-xl font-semibold">{price}</h5>
                </div>
            </div>

            <div className="">
                <CiCircleRemove className="text-3xl"></CiCircleRemove>
            </div>
        </div>
    );
};

export default DashboardItem;