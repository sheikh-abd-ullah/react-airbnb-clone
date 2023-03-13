import Card from "./components/card/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Text from "./components/Text";
import swimmer from "./components/images/image 12.png"
import star from "./components/images/Star 1.png";
import wedding from "./components/images/wedding-photography 1.png"
import bike from "./components/images/mountain-bike 1.png"
import Slider from "react-slick";
import style from "./style.module.css"


function App() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Text />

      <div className={style.background}>
        <Slider className={style.slider} {...settings}>
          <Card
            image={swimmer}
            star={star}
            rating="5.0"
            country="(0).USA"
            description="Life lessons with Katie Zaferes"
            price="From $136"
            quantity="/ person"
            available= {0}
            className={style.cardcontainer}
          />

          <Card
            image={wedding}
            star={star}
            rating="5.0"
            country="(30).USA"
            description="Learn wedding photography"
            price="From $125"
            available={30}
            quantity="/ person"
          />

          <Card
            image={bike}
            star={star}
            rating="4.8"
            country="(2).USA"
            description="Group Mountain Biking"
            price="From $50"
            available={2}
            quantity="/ person"
          />

          <Card
            image={swimmer}
            star={star}
            rating="5.0"
            country="(0).USA"
            description="Life lessons with Katie Zaferes"
            price="From $136"
            quantity="/ person"
            available={0}
            className={style.cardcontainer}
          />

          <Card
            image={wedding}
            star={star}
            rating="5.0"
            country="(30).USA"
            description="Learn wedding photography"
            price="From $125"
            available={30}
            quantity="/ person"
          />

          <Card
            image={bike}
            star={star}
            rating="4.8"
            country="(2).USA"
            description="Group Mountain Biking"
            price="From $50"
            available={2}
            quantity="/ person"
          />
        </Slider>
      </div>
    </div>
  );
}

export default App;
