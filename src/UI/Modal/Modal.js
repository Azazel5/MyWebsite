import { useRef } from 'react'
import BackgroundClickHook from '../../Hooks/BackgroundClickHook/BackgroundClickHook'

const Modal = props => {
    const { modalOpen, onModalCloseHandler } = props
    const modelContainerRef = useRef()
    const clickOutside = BackgroundClickHook(modelContainerRef)
    
    if (clickOutside) {
        onModalCloseHandler()
    }

    return (
        Object.keys(modalOpen).length !== 0 ?
            <div className="modal">
                <div className="modal__container" ref={modelContainerRef}>
                    <button className="modal__close-button" onClick={onModalCloseHandler}>Close</button>
                    Inner box
                </div>
            </div> : null
    )
}

export default Modal