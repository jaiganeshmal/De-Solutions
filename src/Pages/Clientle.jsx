import React, { lazy, Suspense, useEffect } from 'react'
import Loader from '../Components/loader'
const ClienteleHero = lazy(() => import('../Components/ClienteleHero'))
const ClientLogosSection = lazy(() => import('../Components/ClientLogosSection'))
const ClientCTA = lazy(() => import('../Components/ClientCTA'))

const Clientle = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);
    return (
        <>
            <Suspense fallback={<Loader />}>
                <ClienteleHero />
                <ClientLogosSection />
                <ClientCTA />
            </Suspense>
        </>
    )
}

export default Clientle