import Carousel from 'react-bootstrap/Carousel';

function FadeBanner() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/before/1.JPG"

          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Before</h3>
          <p>Porch Windows</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/after/2.JPG"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>After</h3>
          <p>Replaced old storms with vinyl double hung.</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* /////////////////////////////////////////////////// */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/before/stuff 170.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Before</h3>
          <p>Nutwood's Incredible Facelift</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/after/stuff 168.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>After</h3>
          <p>Nutwood's Incredible Facelift</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* /////////////////////////////////////////////////// */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/before/IMG_0111.JPG"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Before</h3>
          <p>Relocate Laundry</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/after/IMG_0141.JPG"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>After</h3>
          <p>Move laundry room to basement and add water supply</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default FadeBanner;