import bannerImg from "../../assets/banner.jpg";

const Banner = ({ onShopNowClick }) => {
    return (
        <div className="relative mb-32 lg:mb-96">
            <div className="bg-[#9538E2] h-[450px] lg:h-[630px] pt-12 lg:ml-6 lg:mr-6 text-white rounded-b-xl text-center">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-2xl md:text-5xl font-bold mb-6 px-10">
                        Upgrade Your Tech Accessorize with Gadget Heaven Accessories
                    </h1>
                    <p className="w-3/4 mx-auto mb-8">
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                    </p>
                    <button
                        onClick={onShopNowClick}
                        className="btn text-xl font-semibold rounded-2xl text-[#9538E2]"
                    >
                        Shop Now
                    </button>
                </div>
            </div>

            <div className="absolute -bottom-28 lg:top-80">
                <img className="w-4/6 rounded-xl mx-auto p-6 border-2 border-white" src={bannerImg} alt="banner" />
            </div>
        </div>
    );
};

export default Banner;
