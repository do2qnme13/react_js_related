import "./App.css";
import Accordian from "./components/accordian/Accordian";
import RandomColor from "./components/random-color/randomColor";
import StarRating from "./components/star_rating/StarRating";

function App() {
    return (
        <>
            <Accordian />
            <RandomColor />
            <StarRating numberOfStars={10} />
        </>
    );
}

export default App;
