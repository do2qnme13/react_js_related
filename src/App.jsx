import "./App.css";
import Accordian from "./components/accordian/Accordian";
import ImageSlider from "./components/image-slider/ImageSlider";
import RandomColor from "./components/random-color/randomColor";
import StarRating from "./components/star_rating/StarRating";

function App() {
    return (
        <>
            <Accordian />
            <RandomColor />
            <StarRating numberOfStars={10} />
            <ImageSlider
                url={"https://picsum.photos/v2/list"}
                page={"1"}
                limit={"10"}
            />
        </>
    );
}

export default App;
