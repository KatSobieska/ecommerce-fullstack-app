import Articles from '../../features/Articles/Articles';
import CarouselHome from '../../features/CarouselHome/CarouselHome';
import Categories from '../../features/Categories/Categories';

const Homepage = () => {
  return (
    <>
      <CarouselHome />
      <Categories />
      <Articles />
    </>
  );
};

export default Homepage;
