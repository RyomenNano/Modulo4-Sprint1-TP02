import {useEffect} from "react"

function useContTitle(value, title){
    useEffect(() => {
        document.title = value.length > 0
        ? `Mi lista (${value.length}) | ${title}`
        : `${title}`
    }, [value])
}

export default useContTitle