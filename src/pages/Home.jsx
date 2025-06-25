import ProductTabs from "../components/ProductTabs";
import Slider from "../components/Slider";
import Reviews from "../components/Reviews";
import About from "../components/About";
import Faq from "../components/Faq";
import WhyChoose from "../components/Whychoose";
import Footer from "../components/Footer";
import Clients from "../components/Clients";



const Home = () => {
    return (
        <div>
            {/* Add your content here */}
            
            <main className="pt-20">
                <Slider />
                <About />
                <ProductTabs />
                <Reviews />
                
                {/* Uncomment the following components as needed */}
                <WhyChoose />
                {/* <Testimonials /> */}
                {/* <GoogleReviews /> */}
                <Clients />
                <Faq />
                <Footer />
            </main>
        </div>
    );
}
export default Home;