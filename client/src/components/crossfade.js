import Carousel from 'react-bootstrap/Carousel';

function FadeBanner() {
  return (
    <div id="carouselHero" class="carousel slide" data-bs-ride="carousel">
        <Carousel fade>
          <Carousel.Item>
            
            <img
              className="d-block w-100"
              src="/img/before/1.JPG"
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
              src="/img/after/2.JPG"
              alt="Second slide"
            />
    
            <Carousel.Caption>
            <h3>Replaced old storms with vinyl double hung</h3>
            <p>After</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img/before/stuff170.jpg"
              alt="Third slide"
            />
    
            <Carousel.Caption>
              <h3>Nutwood's Incredible Facelift</h3>
              <p>Before</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img/after/stuff168.jpg"
              alt="Fourth slide"
            />
    
            <Carousel.Caption>
              <h3>Nutwood's Incredible Facelift</h3>
              <p>After</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>
  );
}

export default FadeBanner;