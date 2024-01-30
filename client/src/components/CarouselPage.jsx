import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from "react-router-dom";
import Image from '../../public/images/image.jpg';

function CarouselPage() {
  const navigate = useNavigate();
  return (
    <Carousel>
      <Carousel.Item>
        <img src={Image}   style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}/>
        <Carousel.Caption className="centered-content">
          <h3 style={{ marginBottom: '90px', fontSize: '80px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>Experience</h3>
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
          <p style={{ marginTop: '30px', fontSize: '50px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={Image}   style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}/>
        <Carousel.Caption className="centered-content"> 
          <h3 style={{ marginBottom: '90px', fontSize: '80px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>Education</h3>
          <button className="button button-homepage"
      onClick={() => {
        navigate("/person");
      }}
    >
      Create your CV
    </button>
          <p style={{ marginTop: '30px', fontSize: '50px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={Image}   style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}/>
        <Carousel.Caption className="centered-content">
          <h3 style={{ marginBottom: '90px', fontSize: '80px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>Languages</h3>
          <button className="button button-homepage"
      onClick={() => {
        navigate("/person");
      }}
    >
      Create your CV
    </button>
          <p style={{ marginTop: '30px', fontSize: '50px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={Image}   style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}/>
        <Carousel.Caption className="centered-content">
          <h3 style={{ marginBottom: '90px', fontSize: '80px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>Skills</h3>
          <button className="button button-homepage"
      onClick={() => {
        navigate("/person");
      }}
    >
      Create your CV
    </button>
          <p style={{ marginTop: '30px', fontSize: '50px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselPage;