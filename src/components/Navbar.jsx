import Logo from "./Logo";

const Navbar = () => {
    return (
        <nav className='py-6 md:py-8 fixed top-0 w-full !bg-[#191D26] z-50'>
            <div className='container mx-auto flex items-center justify-between gap-x-6'>
                {/* Logo */}
                <Logo />
                {/* Logo Ends */}
            </div>
        </nav>
    );
};

export default Navbar;

