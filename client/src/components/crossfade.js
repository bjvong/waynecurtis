import Carousel from 'react-bootstrap/Carousel';
import { useState, useEffect } from 'react';

function FadeBanner() {

  const [pictures, setPictures] = useState([]);


  useEffect(()=>{
    fetch('/api/hello')
    .then(res => {return res.json()})
    .then(res => setPictures(res.data))
  },[])


  return (
    <div id="carouselHero" className="carousel slide" data-bs-ride="carousel">
        <Carousel fade>
          {pictures.map(picture => 
            <Carousel.Item key={picture.id}>
              <img
                className="d-block w-100"
                src={picture.url}
                alt={picture.title}
              />
            <Carousel.Caption>
              <h3>{picture.title}</h3>
              <p>{picture.imageState}</p>
            </Carousel.Caption>
          </Carousel.Item>
              )}
        </Carousel>
    </div>
  );
}

export default FadeBanner;