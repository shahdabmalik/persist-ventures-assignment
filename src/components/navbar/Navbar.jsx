import { Link } from "react-router-dom"
import { AiOutlineMenu } from "react-icons/ai"
import { BiArrowBack } from "react-icons/bi"
import { useEffect, useState } from "react"

const Navbar = () => {

    const [scroll, setScroll] = useState(0)
    const [show, setShow] = useState(false)

    const handleScroll = () => {
        setScroll(window.scrollY.toFixed())
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div className=" fixed top-0 left-0 w-full bg-slate-950 z-50" >
            <div className={"flex items-center justify-between px-5 xl:px-0 w-full max-w-screen-xl mx-auto " + (scroll > 50 && " border-b border-cyan-900 ")} >
                <div className="w-40" >
                    <img className="w-full" src="https://uploads-ssl.webflow.com/5ef95ae22a251e0c9030800e/5ef987561883fad47e90211c_Ideaflow%20white%201%403x.png" alt="logo" />
                </div>
                <div className="flex gap-5 text-sm font-inter" >
                    <Link to="#" className=" hidden sm:block hover:text-cyan-300" >Home</Link>
                    <Link to="#" className="text-cyan-400 hover:text-cyan-300 hover:scale-[1.03] transition-all hidden sm:block" >We&#39;re Hiring! JS, iOS +</Link>
                    <Link to="#" className=" hidden sm:block hover:text-cyan-300">Contact</Link>
                    <div className="sm:hidden text-white" onClick={() => setShow(!show)} ><AiOutlineMenu size={24} /></div>
                </div>
                <div className={"w-full h-screen z-50 sm:hidden fixed top-0  px-5 flex flex-col backdrop-blur-sm bg-slate-900 bg-opacity-90 transition-all duration-200" + (show ? " left-0 " : " left-[120%] ")} >
                    <div className="flex-grow flex flex-col items-center justify-center gap-8 font-medium text-lg font-inter relative">
                        <div className="text-white absolute top-0 left-0 w-full hover:text-cyan-300 h-[57.6px] flex items-center justify-end" onClick={() => setShow(false)} ><BiArrowBack size={28} className=" rotate-180" /></div>
                        <Link to="#" >Home</Link>
                        <Link to="#" className="text-cyan-400 hover:text-cyan-300 hover:scale-[1.03] transition-all" >We&#39;re Hiring! JS, iOS +</Link>
                        <Link to="#">Contact</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar