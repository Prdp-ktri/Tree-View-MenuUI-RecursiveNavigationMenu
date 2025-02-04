import TreeView from "./components/tree-view";

function App() {
  return (
    <div className="App">
      {/* Random Color Component */}
      {/* <RandomColor /> */}
      {/* <StarRating noOfStars={10} /> */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={10} /> */}
      {/* <LoadMoreData /> */}
      <TreeView menus={menus} />
    </div>
  );
}
