import PropTypes from 'prop-types';

//  each slide
//    img, 
//    rating
export default function Carousel({data}) {
  return (
    <div className="container">
      <div className="frame">
        <div className="slider">
          {data.map(
            element => <img src={element.background_image} alt={element.slug} key={element.id}/>
          )}
        </div>
        <div className="navBtnWrapper">
          <div className="circleNav 1" data-index="1"></div>
        </div>
      </div>
    </div>
  );
}

Carousel.propTypes = {
  data: PropTypes.array,

};


