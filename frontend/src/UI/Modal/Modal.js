import { useRef } from 'react'
import BackgroundClickHook from '../../Hooks/BackgroundClickHook/BackgroundClickHook'
import Sprite from '../../Assets/SVG/symbol-defs.svg'

const Modal = props => {
    // State and props variables 
    const { modalOpen, onModalCloseHandler } = props
    const modelContainerRef = useRef()
    BackgroundClickHook(modelContainerRef, onModalCloseHandler)

    const modalItemInvalid = Object.keys(modalOpen).length <= 0
    let projectTechnologies

    if (!modalItemInvalid)
        projectTechnologies = modalOpen['project_technology'].map(item => (
            <span key={item['id']}>{item['technology_name']}</span>
        ))

    return (
        !modalItemInvalid &&
        <div className="modal">
            <div className="modal__container" ref={modelContainerRef}>
                <button className="modal__close-button" onClick={onModalCloseHandler}>
                    <svg><use xlinkHref={`${Sprite}#icon-circle-with-cross`}></use></svg>
                </button>

                <div className="centered-box">
                    <h1>{modalOpen['project_name']}</h1>
                    <div className="modal__symbol">
                        <div className="modal__symbol--line"></div>
                        <svg className="modal__symbol--star-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                        <div className="modal__symbol--line"></div>
                    </div>
                    <div>{modalOpen['project_description']}</div>
                    <a href={modalOpen['project_view_link']} target="_blank" rel="noopener noreferrer">{modalOpen['project_view_link']}</a>

                    <div className="centered-box__techcontainer">{projectTechnologies}</div>

                    <div>Notes: {modalOpen['notes_reflection'] && modalOpen['notes_reflection']}</div>
                </div>
            </div>
        </div>
    )
}

export default Modal