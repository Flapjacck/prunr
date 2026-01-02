/* Components */
import GetStarted from "../components/welcome/GetStarted";
import WhyUs from "../components/welcome/WhyUs";
import Reviews from "../components/welcome/Reviews";
/* Utils */
import LightPillar from "../utils/LightPillar";



function Welcome() {
    return (
        <div style={{ width: '100%', height: '600px', position: 'relative' }}>
            <LightPillar
                topColor="#338CFF"
                bottomColor="#4FC3FF"
                intensity={1.0}
                rotationSpeed={0.5}
                glowAmount={0.005}
                pillarWidth={3.0}
                pillarHeight={0.4}
                noiseIntensity={0.5}
                pillarRotation={75}
                interactive={false}
                mixBlendMode="normal"
            />
            <div style={{ position: 'relative', zIndex: 1 }}>
                <GetStarted />
                <WhyUs />
                <Reviews />
            </div>
        </div>
    );
}

export default Welcome