import { useState } from 'react'
import { projects } from './projects'
import Sprite from '../Assets/SVG/symbol-defs.svg'
import FloatingCard from '../UI/FloatingCard/FloatingCard'
import Timeline from '../UI/FloatingCard/Timeline/Timeline'

const Portfolio = props => {
    // Props and state variables
    const { portRef } = props
    const item_classes = ["portfolio-section__portfolio-item-box__item"]
    const [itemHovered, setItemHovered] = useState({})

    // Inline Styles 
    const plusSvgDimensions = { height: '4rem', width: '4rem' }

    // Event Handlers 
    const portfolioHoverOn = (id) => {
        setItemHovered({ [id]: true })
    }

    const portfolioHoverOff = (id) => {
        setItemHovered({ [id]: false })
    }

    // Other variables
    const portfioItems = projects.map(project => (
        <div className={item_classes.join(" ")} key={project.id}
            onMouseOver={() => portfolioHoverOn(project.id)}
            onMouseLeave={() => portfolioHoverOff(project.id)}> {
                itemHovered[project.id] &&
                <svg className="centered-icon-high-z-index" style={plusSvgDimensions}>
                    <use xlinkHref={`${Sprite}#icon-squared-plus`}></use>
                </svg>
            }
        </div>
    ))

    /* Intro floating card content */
    const timelineVariables = {
        "line1": {
            "text": "University of Minnesota - Twin Cities",
            "dates": "September 2018 - Present"
        },
        "line2": {
            "text": "Ullens School",
            "dates": "August 2015 - September 2018",
        },
        "line3": {
            "text": "Kendriya Vidyalaya Kathmandu",
            "dates": "April 2006 - March 2015",
        }
    }

    const mainContent = <Timeline timelineVariables={timelineVariables} />
    const subContent = (
        <>
            <span className="floating-card__outer-span">Lives in <span>Nashua, New Hampshire</span></span>
            <span className="floating-card__outer-span">From <span>Kathmandu, Nepal</span></span>
        </>
    )

    /* Tools floating card content */

    return (
        <div className="portfolio-section" ref={portRef}>
            <div className="portfolio-section__left">
                <FloatingCard cardTitle="Intro" mainContent={mainContent} subContent={subContent} />
                <FloatingCard cardTitle="Tools I enjoy working with" />
            </div>

            <div className="portfolio-section__right">
                <h1 className="portfolio-section__heading">Portfolio</h1>
                <div className="portfolio-section__portfolio-item-box">{portfioItems}</div>
            </div>
        </div>
    )
}

export default Portfolio