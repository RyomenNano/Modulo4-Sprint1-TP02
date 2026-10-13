import {useState} from "react"

function usePanel(){
    const [open, setOpen] = useState(false);
    
    return {open, setOpen}
}   

export default usePanel
