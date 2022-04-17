import './App.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function App() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 10
    },
    desktop: {
      breakpoint: { max: 3000, min: 1500 },
      items: 8
    },
    middle: {
      breakpoint: { max: 1500, min: 1250 },
      items: 7
    },
    middle2: {
      breakpoint: { max: 1250, min: 1024 },
      items: 6
    },
    tablet: {
      breakpoint: { max: 1024, min: 900 },
      items: 5
    },
    middle3: {
      breakpoint: { max: 900, min: 700 },
      items: 4
    },
    middle4: {
      breakpoint: { max: 700, min: 464 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };
  return (
    <div className="App">
      <h2>Hello This is my carousel</h2>
      <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={1000} customTransition="all 20s" customLeftArrow={null}>
        <div>
          <img alt="1" src="https://thumb.tildacdn.com/tild6165-6231-4635-b962-393538353831/-/resize/400x/-/format/webp/44.png"></img>
        </div>
        <div>
          <img alt="2" src="https://thumb.tildacdn.com/tild6434-6435-4430-a366-656630653533/-/resize/400x/-/format/webp/25.png"></img>
        </div>
        <div>
          <img alt="3" src="https://thumb.tildacdn.com/tild3761-6433-4163-b461-333833633462/-/resize/400x/-/format/webp/89.png"></img>
        </div>
        <div>
          <img alt="4" src="https://thumb.tildacdn.com/tild3164-6338-4566-b230-336339663438/-/resize/400x/-/format/webp/11.png"></img>
        </div>
        <div>
          <img alt="5" src="https://thumb.tildacdn.com/tild3535-6662-4630-a530-666637396434/-/resize/400x/-/format/webp/2294.png"></img>
        </div>
        <div>
          <img alt="6" src="https://thumb.tildacdn.com/tild3438-3037-4537-b038-623733353633/-/resize/400x/-/format/webp/240.png"></img>
        </div>
        <div>
          <img alt="7" src="https://thumb.tildacdn.com/tild3238-6662-4834-a237-636137313937/-/resize/400x/-/format/webp/112.png"></img>
        </div>
        <div>
          <img alt="8" src="https://thumb.tildacdn.com/tild3161-3733-4134-a331-663666633566/-/resize/400x/-/format/webp/128.png"></img>
        </div>
        <div>
          <img alt="9" src="https://thumb.tildacdn.com/tild3431-3161-4563-a561-353735343730/-/resize/400x/-/format/webp/93.png"></img>
        </div>
        <div>
          <img alt="10" src="https://thumb.tildacdn.com/tild6535-3235-4838-a439-333232653865/-/resize/400x/-/format/webp/photo540891489772461.jpg"></img>
        </div>
        <div>
          <img alt="11" src="https://thumb.tildacdn.com/tild3334-3537-4164-b565-386237663934/-/resize/400x/-/format/webp/28.png"></img>
        </div>
        <div>
          <img alt="12" src="https://thumb.tildacdn.com/tild3039-3437-4830-b035-623637303739/-/resize/400x/-/format/webp/5.png"></img>
        </div>
        <div>
          <img alt="13" src="https://thumb.tildacdn.com/tild3865-6131-4239-b338-383665646539/-/resize/400x/-/format/webp/31.png"></img>
        </div>
        <div>
          <img alt="14" src="https://thumb.tildacdn.com/tild3933-3239-4639-b434-316265633939/-/resize/400x/-/format/webp/64_1.png"></img>
        </div>
      </Carousel>
    </div>
  );
}

export default App;
