import { useState, useEffect } from 'react'
import { Width } from '../util/types'

function reducer(width: number): Width {
    if (width < 768) {
        return 'mobile'
    } else if (width >= 768) {
        return 'tablet'
    } else {
        return 'desktop'
    }
}

function useWindowWidth() {
    const [width, setWidth] = useState<Width>(reducer(window.innerWidth))

    useEffect(() => {
        const onResize = () => {
            const newWidth = reducer(window.innerWidth)
            if (width !== newWidth) {
                setWidth(newWidth)
            }
        }
        window.addEventListener('resize', onResize)
    }, [width, setWidth])

    return width
}

export default useWindowWidth