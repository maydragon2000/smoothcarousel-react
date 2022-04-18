import './App.css';
import 'react-multi-carousel/lib/styles.css';

import Slider from 'react-slick'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {

  const settings = {
    infinite: true,
    autoplay: true,
    speed: 8000,
    slidesToShow: 5,
    autoplaySpeed: 0,
    slidesToScroll: 1,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 320,
        settings: { slidesToShow: 1 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 1224,
        settings: { slidesToShow: 4 }
      }
    ]
  };
  return (
    <div className="App">
      <h2>Hello This is my carousel</h2>
      <Slider {...settings}>
        <img alt="1" src="https://thumb.tildacdn.com/tild6165-6231-4635-b962-393538353831/-/resize/400x/-/format/webp/44.png"></img>
        <img alt="2" src="https://thumb.tildacdn.com/tild6434-6435-4430-a366-656630653533/-/resize/400x/-/format/webp/25.png"></img>
        <img alt="3" src="https://thumb.tildacdn.com/tild3761-6433-4163-b461-333833633462/-/resize/400x/-/format/webp/89.png"></img>
        <img alt="4" src="https://thumb.tildacdn.com/tild3164-6338-4566-b230-336339663438/-/resize/400x/-/format/webp/11.png"></img>
        <img alt="5" src="https://thumb.tildacdn.com/tild3535-6662-4630-a530-666637396434/-/resize/400x/-/format/webp/2294.png"></img>
        <img alt="6" src="https://thumb.tildacdn.com/tild3438-3037-4537-b038-623733353633/-/resize/400x/-/format/webp/240.png"></img>
        <img alt="7" src="https://thumb.tildacdn.com/tild3238-6662-4834-a237-636137313937/-/resize/400x/-/format/webp/112.png"></img>
        <img alt="8" src="https://thumb.tildacdn.com/tild3161-3733-4134-a331-663666633566/-/resize/400x/-/format/webp/128.png"></img>
        <img alt="9" src="https://thumb.tildacdn.com/tild3431-3161-4563-a561-353735343730/-/resize/400x/-/format/webp/93.png"></img>
        <img alt="10" src="https://thumb.tildacdn.com/tild6535-3235-4838-a439-333232653865/-/resize/400x/-/format/webp/photo540891489772461.jpg"></img>
        <img alt="11" src="https://thumb.tildacdn.com/tild3334-3537-4164-b565-386237663934/-/resize/400x/-/format/webp/28.png"></img>
        <img alt="12" src="https://thumb.tildacdn.com/tild3039-3437-4830-b035-623637303739/-/resize/400x/-/format/webp/5.png"></img>
        <img alt="13" src="https://thumb.tildacdn.com/tild3865-6131-4239-b338-383665646539/-/resize/400x/-/format/webp/31.png"></img>
        <img alt="14" src="https://thumb.tildacdn.com/tild3933-3239-4639-b434-316265633939/-/resize/400x/-/format/webp/64_1.png"></img>
      </Slider>
    </div>
  );
}

export default App;
