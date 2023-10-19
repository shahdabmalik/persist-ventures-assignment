
import { Link } from "react-router-dom"
import sectionOne from "../../assets/animations/sectionOne.json"
import Lottie from "lottie-react"

const SectionOne = () => {
    return (
        <div className="pt-16" >
            <div className="flex flex-col-reverse md:flex-row gap-10 justify-between items-center my-16" >
                <div className="w-full md:w-1/2 lg:w-2/3 text-center md:text-start">
                    <h1 className="font-inter text-3xl sm:text-4xl font-bold text-white lg:w-2/3" >The Intelligence Amplification Company</h1>
                    <p className="sm:text-lg my-3 sm:my-5 w-full lg:w-3/4 " >We’re creating an ecosystem for humans and machines to work together to solve the world’s most important problems – starting with a notebook that augments your intelligence.</p>
                    <div className="flex items-center gap-5 text-sm font-semibold flex-wrap justify-center md:justify-start " >
                        <Link to="#" className="bg-cyan-400 px-4 py-2 rounded-md text-slate-950 border-cyan-400 border hover:text-slate-200 hover:bg-transparent transition-all" >Try Ideaflow Notes</Link>
                        <Link to="#" className="bg-transparent px-4 py-2 rounded-md text-slate-200 border-cyan-400 border hover:text-slate-950 hover:bg-cyan-400 transition-all" >iOS</Link>
                        <Link to="#" className="bg-transparent px-4 py-2 rounded-md text-slate-200 border-cyan-400 border hover:text-slate-950 hover:bg-cyan-400 transition-all" >Guide</Link>
                        <Link to="#" className="bg-transparent px-4 py-2 rounded-md text-slate-200 border-cyan-400 border hover:text-slate-950 hover:bg-cyan-400 transition-all" >Twitter</Link>
                        <Link to="#" className="bg-transparent px-4 py-2 rounded-md text-slate-200 border-cyan-400 border hover:text-slate-950 hover:bg-cyan-400 transition-all" >Newsletter</Link>
                    </div>
                </div>
                <div className="w-full max-w-md md:w-1/2 lg:w-1/3" >
                    <Lottie animationData={sectionOne} />
                </div>
            </div>
            <div className="bg-slate-900 py-10 my-16 px-5" >
                <h2 className="text-xl sm:text-3xl font-inter font-medium text-center" >Backed by world-class investors and partners</h2>
                <div className="flex items-center justify-center gap-8 sm:gap-16 lg:gap-28 pt-10" >
                    <img className="h-8 sm:h-12 md:h-16" src="https://uploads-ssl.webflow.com/5ef95ae22a251e0c9030800e/5efa8f47c6178fd2b29210de_first%20round.png" alt="investors" />
                    <img className="h-8 sm:h-12 md:h-16" src="https://uploads-ssl.webflow.com/5ef95ae22a251e0c9030800e/5efa8f47257981290f6013fd_8vc%20white.png" alt="investors" />
                    <img className="h-8 sm:h-12 md:h-16" src="https://uploads-ssl.webflow.com/5ef95ae22a251e0c9030800e/5efa8f473672ef81aad53378_startx.png" alt="investors" />
                    <div className="sm:text-2xl md:text-3xl lg:text-4xl" >+33 more</div>
                </div>
            </div>
        </div>
    )
}

export default SectionOne