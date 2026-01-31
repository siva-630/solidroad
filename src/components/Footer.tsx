
import { Link } from '@tanstack/react-router';
import footerBg from '../footer-image.png';

export default function Footer() {
    return (
        <footer className="bg-emerald-950 text-white py-12 text-sm relative rounded-t-3xl mx-2">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start gap-10">

                
                <div className="w-40 h-60 rounded-2xl overflow-hidden shrink-0 shadow-lg shadow-emerald-900/50 border border-emerald-800/30">
                    <img src={footerBg} alt="Footer Branding" className="w-full h-full object-cover" />
                </div>

              
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">

                    
                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold text-emerald-400 tracking-wider uppercase mb-2">Menu</h3>
                        <Link to="/customer" className="hover:text-emerald-300 transition font-medium">Customers</Link>
                        <a href="#" className="hover:text-emerald-300 transition font-medium">Resources</a>
                        <Link to="/career" className="hover:text-emerald-300 transition font-medium">Careers</Link>
                    </div>

                 
                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold text-emerald-400 tracking-wider uppercase mb-2">Company</h3>
                        <a href="#" className="hover:text-emerald-300 transition font-medium">Help</a>
                        <a href="#" className="hover:text-emerald-300 transition font-medium">Terms</a>
                        <a href="#" className="hover:text-emerald-300 transition font-medium">Security</a>
                    </div>

                   
                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold text-emerald-400 tracking-wider uppercase mb-2">Social</h3>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300 transition font-medium">X (Twitter)</a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300 transition font-medium">LinkedIn</a>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 mt-12 pt-8 border-t border-emerald-800/50 flex flex-col md:flex-row justify-between items-center text-emerald-400/60 text-xs">
                <p>@all rights reserved</p>
                <div className="flex gap-4 mt-2 md:mt-0">
                    <a href="#" className="hover:text-emerald-300 transition">Privacy Policy</a>
                    <a href="#" className="hover:text-emerald-300 transition">Terms of Service</a>
                </div>
            </div>
        </footer>
    )
}
