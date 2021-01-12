import { useEffect, useState } from 'react'
import { projects, tools, timelineVariables } from './projects'
import Sprite from '../Assets/SVG/symbol-defs.svg'
import FloatingCard from '../UI/FloatingCard/FloatingCard'
import Timeline from '../UI/FloatingCard/Timeline/Timeline'
import PlaceHolder from '../Assets/images/placeholder.png'
import Modal from '../UI/Modal/Modal'
import Blog from '../Blog/Blog'
import Footer from '../Footer/Footer'
import Contact from '../Contact/Contact'

const Portfolio = props => {
    // Props and state variables
    const { portRef } = props
    const [selectedPortfolioItem, setSelectedPortfolioItem] = useState({})

    const [blogLoaderror, setBlogLoadError] = useState(null);
    const [isBlogLoaded, setIsBlogLoaded] = useState(false);
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/blogs/')
            .then(blogs => blogs.json())
            .then(result => {
                    setIsBlogLoaded(true);
                    setBlogs(result);
                },

                error => {
                    setIsBlogLoaded(true);
                    setBlogLoadError(error);
                }
            )
    }, [])

    if (isBlogLoaded)
        console.log(blogs);

    // Event Handlers 
    const onModalCloseHandler = () => {
        setSelectedPortfolioItem({})
    }

    // Other variables
    const portfioItems = projects.map(project => (
        <div className="portfolio-section__portfolio-item-box__item" key={project.id}
            onClick={() => setSelectedPortfolioItem(project)}>

            <img src={PlaceHolder} alt="Portfolio grid item placeholder" />
            <svg><use xlinkHref={`${Sprite}#icon-squared-plus`}></use></svg>
        </div>
    ))

    /* Intro floating card content */
    const mainContent1 = <Timeline timelineVariables={timelineVariables} />
    const subContent1 = (
        <>
            <span className="floating-card__outer-span">Lives in <span>Nashua, New Hampshire</span></span>
            <span className="floating-card__outer-span">From <span>Kathmandu, Nepal</span></span>
        </>
    )

    /* Tools floating card content */
    const toolsMapper = tools.map(tool => (
        <div className="tools-grid__element" key={tool.id}>
            <span>{tool.toolName}</span>
            <svg className="tools-grid__icon"><use xlinkHref={`${Sprite}#${tool.iconName}`}></use></svg>
        </div>
    ))

    const mainContent2 = (
        <div className="tools-grid">{toolsMapper}</div>
    )

    return (
        <div className="portfolio-section" ref={portRef}>
            <div className="portfolio-section__left">
                <FloatingCard
                    cardTitle="Intro" mainContent={mainContent1} subContent={subContent1}
                    height="50%"
                />

                <FloatingCard
                    cardTitle="Tools I enjoy working with" mainContent={mainContent2}
                    height="40%"
                />

                <Footer />
            </div>

            <div className="portfolio-section__right">
                <h1 className="portfolio-section__heading">Portfolio</h1>
                <div className="portfolio-section__portfolio-item-box">{portfioItems}</div>
                <Contact />
                <Blog />
            </div>

            <Modal modalOpen={selectedPortfolioItem} onModalCloseHandler={onModalCloseHandler} />
        </div>
    )
}

export default Portfolio