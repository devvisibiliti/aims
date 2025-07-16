import ProductTabs from "../components/ProductTabs";
import Slider from "../components/Slider";
import Reviews from "../components/Reviews";
import AboutHome from "../components/About";
import Faq from "../components/Faq";
import WhyChoose from "../components/Whychoose";
import Footer from "../components/Footer";
import Clients from "../components/Clients";
import GoogleReviews from "../components/re";
import WhyChooseHome from "../components/Whychoose";




const Home = () => {
    return (
        <div>
            {/* Add your content here */}
            
            <main className="pt-20">
                <Slider />
                <AboutHome />
                <ProductTabs />
                
                <Reviews />
                
                {/* Uncomment the following components as needed */}
                <WhyChooseHome />
                {/* <Testimonials /> */}
                {/* <GoogleReviews /> */}
                <Clients />
                
                <Faq />
                {/* <GoogleReviews /> */}
                
{/* <script src="https://static.elfsight.com/platform/platform.js" async></script>
<div class="elfsight-app-6a8138c1-a0e1-4ba9-98cf-653cc0fd2519" data-elfsight-app-lazy></div> */}
                <Footer />
            </main>
        </div>
    );
}
export default Home;