import { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Pictures(){
    
    const [pictures, setPictures] = useState([]);


    useEffect(()=>{
        fetch('/api/hello')
        .then(res => {return res.json()})
        .then(res => setPictures(res.data))
      },[])


    return (
        pictures.map(picture => 
            <div key={picture.id}>
            <Carousel.Item>
            
            <img
              className="d-block w-100"
              src={picture.before}
              alt="First slide"
            />
            <Carousel.Caption>
            <h3>Porch Windows</h3>
            <p>Before</p>
            </Carousel.Caption>
            
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={picture.after}
              alt="Second slide"
            />
    
            <Carousel.Caption>
            <h3>Replaced old storms with vinyl double hung</h3>
            <p>After</p>
            </Carousel.Caption>
          </Carousel.Item>\
          </div>
        )
        
    );
        }
  

  export default fadeBanner(Pictures);
  
