
const SectionThree = () => {
    return (
        <div className="my-20" >
            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center  gap-10" >
                <div className="bg-slate-900 p-5 border-l border-l-cyan-400" >
                    <div className="flex items-center gap-5" >
                        <img className="w-20" src='https://uploads-ssl.webflow.com/5ef95ae22a251e0c9030800e/5efac0a9bd965c6f659d9afb_Avatar%20MW.png' alt="review" />
                        <div>
                            <p className="text-xl font-semibold" >Marty Weiner</p>
                            <p className="text-sm" >Former CTO, Reddit Ideaflow Advisor</p>
                        </div>
                    </div>
                    <p className="mt-5" >“A key step to realizing the potential of the Web as a medium for collective intelligence.”</p>

                </div>
                <div className="bg-slate-900 p-5 border-l border-l-cyan-400" >
                    <div className="flex items-center gap-5" >
                        <img className="w-20" src='https://uploads-ssl.webflow.com/5ef95ae22a251e0c9030800e/5efbe6fc6697d411b88e0cc6_JD.png' alt="review" />
                        <div>
                            <p className="text-xl font-semibold" >John Devadoss</p>
                            <p className="text-sm" >Founding Director, Microsoft Digital Consulting</p>
                        </div>
                    </div>
                    <p className="mt-5" >“Ideaflow is the force multiplier for business productivity in this new normal.”</p>

                </div>
                <div className="bg-slate-900 p-5 border-l border-l-cyan-400" >
                    <div className="flex items-center gap-5" >
                        <img className="w-20" src='https://uploads-ssl.webflow.com/5ef95ae22a251e0c9030800e/5efac266b0171beef967fcc0_Avatar-%20TD.png' alt="review" />
                        <div>
                            <p className="text-xl font-semibold" >Tim Draper</p>
                            <p className="text-sm" >Founder, DFJ Ideaflow Investor</p>
                        </div>
                    </div>
                    <p className="mt-5" >“The amount of value that can be unlocked by connecting the right people and ideas together is incredible. I’m very excited for what Ideaflow is building”.</p>
                </div>
            </div>
        
            <div className="bg-slate-900 py-10 mt-28 text-slate-200 text-center" >
                <h3 className="text-3xl font-semibold font-inter " >We&apos;re Hiring Key Roles</h3>
                <p className="mt-3" >Help us extend the human mind.</p>
                <button type='button' className="mt-3 px-4 py-2 border border-cyan-400 bg-cyan-400 font-inter font-medium text-slate-950 rounded-md hover:bg-transparent hover:text-slate-200" >Learn More</button>
            </div>
        </div>
    )
}

export default SectionThree