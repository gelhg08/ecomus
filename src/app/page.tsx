import Map from "./components/maps";
import Carousel from "./components/carousel";

export default function Home() {
    return (
        <div>
            <Carousel />
            <div>
                <Map/>
            </div>
        </div>
    );
}
