import "./App.css";
import Accordian from "./components/accordian/Accordian";
import ImageSlider from "./components/image-slider/ImageSlider";
import LoadMoreData from "./components/load-more-data/LoadMoreData";
import RandomColor from "./components/random-color/randomColor";
import StarRating from "./components/star_rating/StarRating";
import TreeView from "./components/tree-view/TreeView";
import menus from "./components/tree-view/Data";
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
            <LoadMoreData />
            <TreeView menus={menus} />
        </>
    );
}

export default App;
