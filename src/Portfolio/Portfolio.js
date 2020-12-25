import { useState } from 'react'
import { projects } from './projects'
import Sprite from '../Assets/SVG/symbol-defs.svg'

const Portfolio = props => {
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

    return (
        <div className="portfolio-section" ref={portRef}>
            <h1 className="portfolio-section__heading">Portfolio</h1>
            <div className="centered-container">
                <div className="portfolio-section__portfolio-item-box">{portfioItems}</div>
            </div>
        </div>
    )
}

export default Portfolio