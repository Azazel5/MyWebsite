import { useEffect, useReducer, useState } from 'react'
import { timelineVariables } from './projects'
import Sprite from '../Assets/SVG/symbol-defs.svg'
import FloatingCard from '../UI/FloatingCard/FloatingCard'
import Timeline from '../UI/FloatingCard/Timeline/Timeline'
import Modal from '../UI/Modal/Modal'
import Blog from '../Blog/Blog'
import Footer from '../Footer/Footer'
import Contact from '../Contact/Contact'
import { initialState, GeneralReducer } from './PortfolioReducer'

const Portfolio = props => {
    // Props and state variables
    const { portRef, contactTabRef, blogTabRef } = props
    const [selectedPortfolioItem, setSelectedPortfolioItem] = useState({})
    const [portfolioReducer, dispatchInformation] = useReducer(GeneralReducer, initialState)

    useEffect(() => {
        dispatchInformation({ type: 'loading' });

        const urls = [
            fetch('http://localhost:8000/api/blogs/'),
            fetch('http://localhost:8000/api/projects/'),
            fetch('http://localhost:8000/api/technologies/'),
        ]

        // Takes an array of promises, resolves and converts them to JSON form, and gets the 
        // final data. The error/success actions resets the loading action taken at the top of
        // the effect.
        Promise.all(urls)
            .then(responses => Promise.all(responses.map(response => response.json())))
            .then(data => {
                const payload = {
                    'blogs': data[0],
                    'projects': data[1],
                    'technologies': data[2]
                }

                dispatchInformation({ type: 'success', payload: payload })

            }, error => {
                dispatchInformation({ type: 'error', payload: error })
            })
    }, [])

    // Event Handlers 
    const onModalCloseHandler = () => {
        setSelectedPortfolioItem({})
    }


    // Other variables
    const { blogs, projects, technologies } = portfolioReducer.items

    const portfioItems = portfolioReducer.finished && projects.map(project => (
        <div className="portfolio-section__portfolio-item-box__item" key={project.id}
            onClick={() => setSelectedPortfolioItem(project)}>
            <img src={project['project_image']} alt="Portfolio grid item placeholder" />
            <span>{project['project_name']}</span>
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
    const toolsMapper = portfolioReducer.finished && technologies.map(tool => {
        return tool.show_on_sidebar && (
            <div className="tools-grid__element" key={tool.id}>
                <span>{tool.technology_name}</span>
                <svg className="tools-grid__icon"><use xlinkHref={`${Sprite}#${tool.svg_name}`}></use></svg>
            </div>
        )
    })

    const mainContent2 = (
        <div className="tools-grid">{toolsMapper}</div>
    )

    return (
        <div className="portfolio-section" ref={portRef}>
            <div className="portfolio-section__left">
                <FloatingCard
                    cardTitle="Intro" mainContent={mainContent1} subContent={subContent1}
                />

                <FloatingCard
                    cardTitle="Tools I enjoy working with" mainContent={mainContent2}
                />

                <Footer />
            </div>

            <div className="portfolio-section__right">
                <h1 className="portfolio-section__heading">Portfolio</h1>
                <div className="portfolio-section__portfolio-item-box">{portfioItems}</div>
                <Blog blogs={blogs} blogTabRef={blogTabRef} />
                <Contact contactTabRef={contactTabRef} />
            </div>

            <Modal modalOpen={selectedPortfolioItem} onModalCloseHandler={onModalCloseHandler} />
        </div>
    )
}

export default Portfolio