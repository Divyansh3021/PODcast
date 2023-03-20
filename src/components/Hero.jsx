import React from 'react'
import Carausel from './Carausel';
import Hindi_sugg from './Hindi_sugg';
import "./styles/hero.css"

function Hero() {

  // function carausel_func(){
  //   var slide_list = document.getElementsByClassName("carausel-slide");
  //   console.log(slide_list);
  //   var prev_slide = slide_list[0];
  //   prev_slide.classList.add("active");
    
  //   function next_car_slide(){
  //     var date = new Date();
  //     // var now_sec = date.getSeconds();
  //     var index = 1;
  //     while(index<3) {
  //       const curr_element = slide_list[index];
  //       prev_slide.classList.remove("active");
  //       curr_element.classList.add("active");
  //       // const next_element = slide_list[index+1];
  //       prev_slide = curr_element;
  //       console.log("in loop");
  //       if(index===2){
  //         index=1;
  //         console.log("in if condition");
  //       }
  //     }
  //   }
  //   setInterval(() => {
  //     next_car_slide()
  //   }, 4000);
  // }

  // setTimeout(() => {
  //   carausel_func()
  // }, 500);

  let slideIndex = 0;
  // showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("carausel-slide");
  // let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "flex";  
  // slides[slideIndex-1].style.animation = "disappear 0.5s forwards ease";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

setTimeout(() => {
  showSlides()
}, 500);

  return (
    <div className='hero-body'>
        <div className="carausel">
          <Carausel bg_url = "https://uploads-ssl.webflow.com/5f8d8ab496d65849f731ba00/6093d14d548b02d1c1ef1d55_tr6lYNinrqsKZGBIDWTVvDdTZxnNDthansIbq-95f-0MfzooBEX46TCdi9UNpjjhhq45QGj88414JN8EmEhKHdVYTi8CGGfOHd7XA76nJFJ_UfNg4X8u1Os7N3hC2bHaEXjVsMxomJ_Ib1DR0w.jpeg"/>
          <Carausel bg_url = "https://uploads-ssl.webflow.com/5f8d8ab496d65849f731ba00/6093d14d99961d540306cdeb_Jw7_pr0JSt9IMJexJ80xY8qV3PkwC2ivSfrYAWh8n_Xapr3aQseAqlLgLuUhrMPhmb2pJI8mh8QxBh7QFvh9uRZmKf0R2AvjtRkKS2Nys1WAqthE98_4zQGEJOKXXbJpFW6-javo2fj-4pXeDw.jpeg"/>
          <Carausel bg_url = "https://uploads-ssl.webflow.com/5f8d8ab496d65849f731ba00/60d1df6b269e8c378c79bcb2_RA_Podcast_Tile-scaled.jpg"/>
            {/* <div className="carausel-slide"><button className='play-btn'><img className='play-btn' src={require("./assets/play-btn.png")} alt="" /> Play2</button></div> */}
            {/* <div className="carausel-slide"><button className='play-btn'><img className='play-btn' src={require("./assets/play-btn.png")} alt="" /> Play1</button></div> */}
            {/* <div className="carausel-slide"><button className='play-btn'><img className='play-btn' src={require("./assets/play-btn.png")} alt="" /> Play3</button></div> */}
        </div>

        <Hindi_sugg/>
        <Hindi_sugg/>
        <Hindi_sugg/>
    </div>
  )
}

export default Hero