import { View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Styles from '../assets/stylesheets/styles';

const StarRating = ({ rating, maxStar = 5 }) => {
  const stars = Array.from({ length: maxStar }, (_, index) => index + 1);

  return (
    <View style={Styles.rating}>
      {stars.map((star) => (
        <FontAwesome
          key={star}
          name={star <= rating ? "star" : "star-o"}
          size={24}
          color="gold"
          style={Styles.star}
        />
      ))}
    </View>
  );

}

export default StarRating