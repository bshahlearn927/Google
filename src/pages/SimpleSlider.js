import { Directions } from "@mui/icons-material";
import { style } from "@mui/system";
import React, { Component } from "react";
import Slider from "react-slick";
import "../assets/css/slider.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

export default class SimpleSlider extends Component {
  render() {
    const { stores } = this.props;

    const settingsBack = {
      // speed: 500,
      // slidesToShow: 3,
      // arrows: true,
      // cssEase: 'linear',
      // centerMode: true,
      // vertical: false,
      // dots: true,
      // infinite: true,
      // slidesToScroll: 3,

      //   dots: true,
      //   infinite: true,
      //   slidesToShow: 3,
      //   slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,

      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
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
    // console.log("here");
    // console.log("stores", stores);
    
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settingsBack}>
          {stores.map((stores, index) => (
            <div key={index}>
              {/* <h1 style={{ margin: "20px" }}><img style={{ width: "25%" }} src={stores[index]["img"]} /><br />{stores[index]["name"]}<br />{stores[index]["amt"]}<br />{stores[index]["price"]}<br />{stores[index]["discount"]}</h1> */}
              <h4>{stores.name}</h4>
              <img alt={stores.img} src={stores.img} width="100" height="100" />
              <p>${stores.amt}</p>
              <p>${stores.price}</p>
              <p>${stores.discount}</p>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
