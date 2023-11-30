import chefsMarioAndAdrianAImage from './assets/chefs-mario-and-adrian_a.jpg';
import chefsMarioAndAdrianBImage from './assets/chefs-mario-and-adrian_b.jpg';
import './OurStory.css';

const OurStory = () => {
  return (
    <section className="container grid our-story">
      <div className="our-story-description">
        <h1>Little Lemon</h1>
        <h2>Miami</h2>
        <p>
        Embark on an extraordinary gastronomic adventure at our restaurant, where every dish tells a story of a culinary fusion like no other. Founded by Chef Zhu, our journey begins with a profound passion for culinary artistry, rooted in the traditions of both Asian and Mediterranean cuisines. Like a masterful painter, Chef Zhu and our team of chefs carefully blend ingredients, colors, and textures to craft innovative dishes that bridge the gap between the familiar and the uncharted. As you step into our inviting dining space, you'll be greeted by an ambiance that exudes warmth and charm, setting the stage for a remarkable dining experience. Each dish we serve is a work of art, paying homage to time-honored home-cooked recipes passed down through generations. Our commitment to excellence shines through every plate, ensuring that your dining experience is nothing short of extraordinary. Join us, not just for a meal, but for an exploration of flavors that will transport you to distant lands, where the essence of a grandmother's kitchen meets modern innovation.
        </p>
      </div>
      <div className="our-story-chefs">
        <img src={chefsMarioAndAdrianAImage} alt="Chefs Mario and Adrian" />
        <img src={chefsMarioAndAdrianBImage} alt="Chefs Mario and Adrian" />
      </div>
    </section>
  );
};

export default OurStory;
