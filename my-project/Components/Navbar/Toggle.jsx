import {useMediaQuery} from "react-responsive"
import React, {useState, useEffect} from "react"
import PhoneMenu from "./PhoneMenu"
import Navbar from "./Navbar"


export default function Toggle (){
    const [isMobile, setIsMobile] = useState(useMediaQuery({ query: '(max-width: 1224px)' }))
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    useEffect(()=> {
        setIsMobile(
            isTabletOrMobile
        )
    }, [isTabletOrMobile]
    )
    return (
        <React.Fragment>
        {isMobile && <PhoneMenu/>}
        {!isMobile && <Navbar/>}
        </React.Fragment>
    )
    }