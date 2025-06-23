import ProductTabs from "../components/ProductTabs";
import Slider from "../components/Slider";



const Home = () => {
    return (
        <div>
            {/* Add your content here */}
            
            <main className="pt-20">
                <Slider />
                <ProductTabs />
                {/* Uncomment the following components as needed */}
                {/* <WhyChooseUs /> */}
                {/* <Testimonials /> */}
                {/* <GoogleReviews /> */}
                {/* <FAQ /> */}
            </main>
        </div>
    );
}
export default Home;