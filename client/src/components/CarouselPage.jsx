import Carousel from 'react-bootstrap/Carousel';
import Image from '../../public/images/image.jpg';

function CarouselPage() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={Image}   style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}/>
        <Carousel.Caption className="centered-content">
          <h3>First slide label</h3>
          <div className="centered-buttons">
            <button
              className="button button-homepage"
              onClick={() => {
                navigate("/person");
              }}
            >
              Create your CV
            </button>
          </div>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={Image}   style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}/>
        <Carousel.Caption className="centered-content"> 
          <h3>Second slide label</h3>
          <button className="button button-homepage"
      onClick={() => {
        navigate("/person");
      }}
    >
      Create your CV
    </button>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={Image}   style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}/>
        <Carousel.Caption className="centered-content">
          <h3>Third slide label</h3>
          <button className="button button-homepage"
      onClick={() => {
        navigate("/person");
      }}
    >
      Create your CV
    </button>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselPage;