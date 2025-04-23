import './App.css';
import StarRating from './components/star-rating/star-rating';
// import RandomColorGenerator from './components/random-color-generator..jsx/random-color-generator';
// import Accordion from './components/accordion/accordion';
// import MultiSelectAccordion from './components/accordion/multi-select-accordion';

function App() {
  return (
    <div>
      {/* Accordion */}
      {/* <Accordion /> */}
      {/* <MultiSelectAccordion /> */}

      {/* Random Color Component */}
      {/* <RandomColorGenerator /> */}

      {/* Star Rating Component*/}
      <StarRating numberOfStars={10} />
    </div>
  );
}

export default App;
