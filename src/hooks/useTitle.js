import { useEffect } from "react"

const useTitle = (title) => {
    useEffect(() => {
        document.title = `Rc-flight-zone/${title}`
    }, [title])

}

export default useTitle