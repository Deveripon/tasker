import Heroimg from "../assets/frame.png";

const HeroImage = () => {
    return (
        <div className='flex justify-center md:order-2'>
            <img
                className='max-md:w-full'
                src={Heroimg}
                width={326}
                height={290}
                alt='frame'
            />
        </div>
    );
};

export default HeroImage;

