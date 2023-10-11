import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import SectionOne from './SectionOne'
import SectionThree from './SectionThree'
import SectionTwo from './SectionTwo'

const Home = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-5 overflow-hidden min-h-screen " >
            <Navbar />
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <Footer />
        </div>
    )
}

export default Home