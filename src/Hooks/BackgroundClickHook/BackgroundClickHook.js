import { useEffect, useState } from 'react'
// A hook which detects when the window click has occured outside the given component 
// It takes in the inputRef for a component and returns a boolean state value which 
// represents whether the click occured outside the component or inside 
const BackgroundClickHook = (inputRef) => {
    const [clickOutside, setClickOutside] = useState(false)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (inputRef.current && !inputRef.current.contains(event.target)) {
                setClickOutside(true)
            } else {
                setClickOutside(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
        
    }, [inputRef]);

    return clickOutside
}

export default BackgroundClickHook