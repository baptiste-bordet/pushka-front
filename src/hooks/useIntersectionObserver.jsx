// useIntersectionObserver.jsx
import {useEffect, useState} from 'react'
// import 'intersection-observer';

const useIntersectionObserver = (ref, { threshold, root, rootMargin } = {}) => {
  // configure the state
  const [state, setState] = useState({
    inView: false,
    triggered: false
  })

  useEffect(() => {
    let observer
    // check that the element exists, and has not already been triggered
    if (ref.current && !state.triggered) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver(
          (entries, observerInstance) => {
            // checks to see if the element is intersecting
            if (entries[0].intersectionRatio <= 0) {
              return
            }

            // unobserve the element
            observerInstance.disconnect()
            // if it is update the state, we set triggered as to not re-observe the element
            setState({
              inView: true,
              triggered: true
            })
          },
          {
            threshold: threshold || 0,
            root: root || null,
            rootMargin: rootMargin || '0%'
          }
        )
      }

      observer.observe(ref.current)
    }

    return () => {
      if (observer && observer.unobserve && ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [ref])

  return [state.inView]
}

export default useIntersectionObserver
