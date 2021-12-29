import { useState } from "react"

const useToggle = (initialstate = false) => {
    const [value, setValue] = useState(initialstate)

    const handleToggle = () => {
        setValue(prev => !prev)
    }

    return { value, handleToggle }
}

export default useToggle
