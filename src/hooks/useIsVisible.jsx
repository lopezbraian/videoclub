import { useState , useRef, useEffect } from 'react'

function useIsVisible () {
    const [show, setShow] = useState(false)
    const ref = useRef()

    useEffect(() => {
        const options = {
            root:null,
            rootMargin : '100px',
            threshold :1.0
        }
        const cb = (entries , observer) => {
            const el = entries[0]
            if (el.isIntersecting) {
                setShow(el.isIntersecting)
                observer.disconnect()
            }
        }
        const observer = new IntersectionObserver( cb , options )
        observer.observe(ref.current)
        return () => observer.disconnect()
    })

    return {show , ref}
}

export default useIsVisible