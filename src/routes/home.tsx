import FuckJob from '../components/home/fuck-job';
import Header from '../components/home/header';
import HappyLife from '../components/home/happy-life';
// import FreeThoughts from '../components/home/free-thoughts';
import Footer from '../components/home/footer';
import '../components/home/home.scss';

export default function Root() {
  return (
    <>
      <div className='root'>
        <Header/>
        <HappyLife/>
        <FuckJob/>
        <Footer />
      </div>

    </>
  );
}
