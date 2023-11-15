import { useState, useEffect } from 'react'
import { width } from '../util/types'

function useWindowWidth() {
    const [width, setWidth] = useState<width>(window.innerWidth < 1024 ? 'mobile' : 'desktop')

    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth < 1024 && width !== 'mobile') {
                setWidth('mobile')
            } else if (window.innerWidth >= 1024 && width !== 'desktop') {
                setWidth('desktop')
            }
        }
        window.addEventListener('resize', onResize)
    }, [width, setWidth])

    return width
}

export default useWindowWidth