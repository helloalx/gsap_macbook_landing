
import Navbar  from './component/Navbar.jsx';
import Hero from './component/Hero.jsx';
import ProductViewer from './component/ProductViewer.jsx';
import {gsap} from 'gsap';
import {ScrollTrigger, SplitText} from 'gsap/all';


gsap .registerPlugin(ScrollTrigger);

const App = () => {
    return (
    <main>
        <Navbar />
        <Hero />
        <ProductViewer />
    </main>
    )
}

export default App