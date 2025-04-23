import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import styles from './styles.module.css';

const StarRating = ({ numberOfStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (getCurrentIndex) => {
    setRating(getCurrentIndex);
  };

  const handleMouseEnter = (getCurrentIndex) => {
    setHover(getCurrentIndex);
  };

  const handleMouseLeave = () => {
    setHover(rating);
  };

  return (
    <div>
      {[...Array(numberOfStars)].map((_, index) => {
        index += 1;

        return (
          <FaStar
            key={index}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            size={40}
            className={
              index <= (hover || rating) ? styles.active : styles.inactive
            }
          />
        );
      })}
    </div>
  );
};

export default StarRating;
