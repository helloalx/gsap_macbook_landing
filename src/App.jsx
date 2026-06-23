
import Navbar  from './component/Navbar.jsx';
import Hero from './component/Hero.jsx';
import ProductViewer from './component/ProductViewer.jsx';
import {gsap} from 'gsap';
import {ScrollTrigger, SplitText} from 'gsap/all';
import Showcase from './component/Showcase.jsx';
import Performance from './component/Performance.jsx';

gsap .registerPlugin(ScrollTrigger);

const App = () => {
    return (
    <main>
        <Navbar />
        <Hero />
        <ProductViewer />
        <Showcase />
        <Performance />
    </main>
    )
}

export default App