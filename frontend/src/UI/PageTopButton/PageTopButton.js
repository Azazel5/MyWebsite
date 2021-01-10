import Sprite from '../../Assets/SVG/symbol-defs.svg'

const PageTopButton = props => {
    return (
        <button className="page-top-button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <svg>
                <use xlinkHref={`${Sprite}#icon-chevron-thin-up`}></use>
            </svg>
        </button >
    )
}

export default PageTopButton