import { useEffect } from 'react'
// A hook which detects when the window click has occured outside the given component 
// It takes in the inputRef for a component and its parent's state callback to
// make changes to the state that needs to change, which effectively closes the modal 
const BackgroundClickHook = (inputRef, parentStateCallback) => {

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (inputRef.current && !inputRef.current.contains(event.target)) {
                parentStateCallback(null)
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };

    }, [inputRef, parentStateCallback]);
}

export default BackgroundClickHook