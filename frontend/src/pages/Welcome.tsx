import GetStarted from "../components/welcome/GetStarted";
import WhyUs from "../components/welcome/WhyUs";
import Reviews from "../components/welcome/Reviews";

function Welcome() {
    return (
        <>
            <h1 className="text-3xl font-bold">*This is the Welcome Page*</h1>
            <br />
            <GetStarted />
            <WhyUs />
            <Reviews />
        </>
    );
}

export default Welcome