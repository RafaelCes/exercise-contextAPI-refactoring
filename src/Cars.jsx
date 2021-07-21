// src/Cars.jsx

// import PropTypes from 'prop-types';
import React from 'react';
import carContext from './CarContext';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';


function Cars() {
  return (
    <carContext.Consumer>
      {({red, blue, yellow, moveCar}) => (
        <div>
          <div>
            <img
              className={red ? 'car-right' : 'car-left'}
              src={carRed}
              alt="red car"
              />
            <button
              onClick={() => moveCar('red')}
              type="button"
              >
              Move
            </button>
          </div>
          <div>
            <img
              className={blue ? 'car-right' : 'car-left'}
              src={carBlue}
              alt="blue car"
              />
            <button
              onClick={() => moveCar('blue')}
              type="button"
              >
              Move
            </button>
          </div>
          <div>
            <img
              className={yellow ? 'car-right' : 'car-left'}
              src={carYellow}
              alt="yellow car"
              />
            <button
              onClick={() => moveCar('yellow')}
              type="button"
              >
              Move
            </button>
          </div>
        </div>
      )}
    </carContext.Consumer>
  )
}

// Cars.propTypes = {
//   moveCar: PropTypes.func.isRequired,
//   blueCar: PropTypes.bool.isRequired,
//   redCar: PropTypes.bool.isRequired,
//   yellowCar: PropTypes.bool.isRequired,
// };

export default Cars;
