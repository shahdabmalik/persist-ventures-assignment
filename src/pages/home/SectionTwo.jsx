
import Lottie from "lottie-react"
import sectionTwo from "../../assets/animations/sectionTwo.json"
import mindAni from "../../assets/animations/sectionTwo-2.json"

const SectionTwo = () => {
    return (
        <div className="my-28" >
            <div className="flex flex-col md:flex-row items-center gap-10 justify-between mb-28  " >
                <div className=" w-full  md:w-1/2" >
                    <Lottie animationData={sectionTwo} />
                </div>
                <div className="md:w-2/5 justify-self-end" >
                    <h2 className="text-2xl md:text-3xl font-semibold font-inter text-white" >Connecting people with matching puzzle pieces</h2>
                    <p className="mt-5" >There are millions of scientists trying to cure the likes of AIDS and Alzheimer’s. Maybe the cure is currently separated in different people’s heads. How can we design the web so that these half-formed solutions can come together?
                        <br /><br />  Sir Tim Berners-Lee, Creator of the Web</p>
                </div>
            </div>
            <div className="flex flex-col-reverse md:flex-row items-center gap-10 justify-between" >
                <div className="md:w-1/2" >
                    <h2 className="text-2xl md:text-3xl font-semibold font-inter text-white lg:w-3/4" >The auto-suggest layer for human thinking</h2>
                    <p className="mt-5 lg:w-3/4"  >Connect fragments of information from siloed sources faster than ever before.
                        <br /><br />Your organization&apos;s collective memory at your fingertips.</p>
                    <button type='button' className="mt-5 px-4 py-2 border border-cyan-400 bg-cyan-400 font-inter font-medium text-slate-950 rounded-md hover:bg-transparent hover:text-slate-200" >Learn More</button>
                </div>
                <div className="w-full md:w-1/2" >
                    <Lottie animationData={mindAni} />
                </div>
            </div>
        </div>
    )
}

export default SectionTwo