import LogoImage from "../assets/lws-logo-en.svg";

const Logo = () => {
    return (
        <a href='/'>
            <img
                className='h-[45px]'
                src={LogoImage}
                alt='Lws'
            />
        </a>
    );
};

export default Logo;

