import { useDispatch, useSelector } from "react-redux"
import { alternate, open } from "../redux/reducers/menuReducer"

const useMenu = () => {
    const isOpen = useSelector(state => state.menu)
    const dispatch = useDispatch()

    const toggleOpen = () => {
        dispatch(alternate())
    }

    const openMenu = () => {
        dispatch(open())
    }

    return { isOpen, toggleOpen, openMenu }
}

export default useMenu
