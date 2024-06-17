import img1 from './assets/landing-img1.png';
import Front from '~/components/landingpage/Front'
import AboutUs from '~/components/landingpage/AboutUs';
import Products from '~/components/landingpage/Products';
// import Article from '~/components/landingpage/Article'
import Resources from '~/components/landingpage/Resources';
import FAQ from '~/components/landingpage/FAQ'

const Landing = () => {
  return (
    <div>
        <Front/>
        <AboutUs/>
        <Products/>
        {/* <Article/> */}
        <Resources/>
        <FAQ/>
    </div>
  );
};

export default Landing;
