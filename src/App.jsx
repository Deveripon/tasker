import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import TaskBoard from "./components/TaskBoard";

const App = () => {
    return (
        <div className='font-[Inter] text-white relative'>
            <Navbar />

            <HeroSection />

            <TaskBoard />

            <Footer />
        </div>
    );
};
export default App;

