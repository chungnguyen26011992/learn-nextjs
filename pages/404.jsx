import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
            // router.go(-1)
            /**
             * router allow user back or forward through history
             * -1 is back history
             * 1 is forward history
             */
        }, 3000)
    }, [])

    return (
        <div className="not-found">
            <h1>Ooooops...</h1>
            <h2>That page cannot be found.</h2>
            <p>Go back to the <Link href="/"><a>Homepage</a></Link></p>
        </div>
    );
}
 
export default NotFound;