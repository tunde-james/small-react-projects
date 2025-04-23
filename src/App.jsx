import './App.css';
import LoadMoreData from './components/load-more-data/load-more-data';
// import ImageSlider from './components/image-slider/image-slider';
// import StarRating from './s/star-rating/star-rating';
// import RandomColorGenerator from './components/random-color-generator..jsx/random-color-generator';
// import Accordion from './components/accordion/accordion';
// import MultiSelectAccordion from './components/accordion/multi-select-accordion';

function App() {
  return (
    <div>
      {/* Accordion */}
      {/* <Accordion /> */}
      {/* <MultiSelectAccordion /> */}

      {/* Random Color  */}
      {/* <RandomColorGenerator /> */}

      {/* Star Rating */}
      {/* <StarRating numberOfStars={10} /> */}

      {/* Image Slide */}
      {/* <ImageSlider url={'https://picsum.photos/v2/list'} limit={10} page={1} /> */}

      {/* Load More Products */}
      <LoadMoreData />
    </div>
  );
}

export default App;
