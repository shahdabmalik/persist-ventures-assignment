import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 mt-16 mb-10 pt-10 border-t border-cyan-700" >
            <div >
                <p className="font-semibold" >#rabbithole</p>
                <div className="text-sm grid grid-cols-1 gap-3 mt-3 " >
                    <Link to='#' className="hover:text-cyan-400" >Memex</Link>
                    <Link to='#' className="hover:text-cyan-400" >Niklas Luhmann&apos;s Zettelkasten</Link>
                    <Link to='#' className="hover:text-cyan-400" >Collective IQ</Link>
                    <Link to='#' className="hover:text-cyan-400" >Intelligence amplification</Link>
                    <Link to='#' className="hover:text-cyan-400" >Tim Berners-Lee’s Giant Global Graph</Link>
                    <Link to='#' className="hover:text-cyan-400" >Polymath Project</Link>
                    <Link to='#' className="hover:text-cyan-400" >Category Theory For Scientists</Link>
                    <Link to='#' className="hover:text-cyan-400" >ideaflowplan.jacobcole.net</Link>
                    <Link to='#' className="hover:text-cyan-400" >Privacy Policy</Link>
                </div>
            </div>
            <div>
                <p className="font-semibold" >Latest Updates</p>
                <div className="text-sm grid grid-cols-1 gap-3 mt-3" >
                    <Link to='#' className="hover:text-cyan-400" >Blog</Link>
                    <Link to='#' className="hover:text-cyan-400" >Funding</Link>
                    <Link to='#' className="hover:text-cyan-400" >Bullet View Video</Link>
                </div>
            </div>
            <div>
                <p className="font-semibold" >Contact</p>
                <div className="text-sm grid grid-cols-1 gap-3 mt-3" >
                    <Link to='#' className="hover:text-cyan-400" >Email</Link>
                    <Link to='#' className="hover:text-cyan-400" >LinkedIn</Link>
                    <Link to='#' className="hover:text-cyan-400" >Facebook</Link>
                    <Link to='#' className="hover:text-cyan-400" >Twitter</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer