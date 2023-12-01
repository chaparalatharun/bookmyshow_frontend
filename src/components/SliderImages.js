import Carousel from 'react-bootstrap/Carousel';

function SliderImages() {
  return (
    <div style={{marginTop: "10px"}}>
        <Carousel fade variant='light'>
        <Carousel.Item>
            <img style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
            className='d-block w-40'
            src="https://assets-in.bmscdn.com/promotions/cms/creatives/1695984008899_icccricketwcoctdesktop.jpg"
            alt="second slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
            className='d-block w-40'
            src="https://assets-in.bmscdn.com/promotions/cms/creatives/1700146033284_webpage.jpg"
            alt="second slide"
            />
            
        </Carousel.Item>
        <Carousel.Item>
            <img style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
            className='d-block w-40'
            src="https://assets-in.bmscdn.com/promotions/cms/creatives/1697784852917_edsheerandesktoprevised.jpg"
            alt="second slide"
            />
            
        </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default SliderImages;
