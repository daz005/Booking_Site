import { Link } from 'react-router-dom';
import bruschettaImage from './assets/bruschetta.jpg';
import greekSaladImage from './assets/greek-salad.jpg';
import lemonDessertImage from './assets/lemon-dessert.jpg';
import './WeekSpecials.css';
import pages from '../../../utils/pages';
import MealCard from './MealCard';

const meals = [
  {
    name: 'Gracie\'s Kimchi Jjigae',
    image: greekSaladImage,
    price: '$14.99',
    description: `Savor the renowned Kimchi Jjigae featuring crisp cabbage, vibrant peppers, briny crawfish, and our signature Baltimore-style tofu for an irresistible burst of flavors and textures.`,
  },
  {
    name: 'Bruschetta by Chef Zhu',
    image: bruschettaImage,
    price: '$7.99',
    description: `Indulge in our exquisite Bruschetta, crafted from toasted bread, delicately infused with garlic, and meticulously seasoned with a touch of salt and the finest olive oil.`,
  },
  {
    name: 'Grandpa Aaron\'s Matcha',
    image: lemonDessertImage,
    price: '$6.99',
    description: `Savor the authentic flavors of a time-honored family dessert recipe, where each ingredient has been thoughtfully sourced to bring you a taste that's reminiscent of Grandpa's cherished dishes.`,
  },
];

const WeekSpecials = () => {
  return (
    <section className="container grid week-specials">
      <div className="week-specials-header">
        <h2>This week specials!</h2>
        <Link className="button-primary" to={pages.get('orderOnline').path}>
          Online Menu
        </Link>
      </div>
      {meals.map((meal, index) => 
        <MealCard key={index} meal={meal} />
      )}
    </section>
  );
};

export default WeekSpecials;
