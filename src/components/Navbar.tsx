import { AlignJustify } from 'lucide-react'

import { Link } from "react-router-dom"



const Navbar = () => {

  return (

    <nav className="fixed top-0 w-full bg-white border-b z-50">

      <div className="container mx-auto px-4">

        <div className="flex justify-between items-center h-16">

          {/* Logo */}

          <Link to="/" className="text-xl font-bold text-[#1652F0]">

            Earose Industries

          </Link>



          {/* Desktop Navigation */}

          <div className="hidden md:flex items-center space-x-8">

            <Link to="/" className="text-gray-600 hover:text-gray-900">

              Home

            </Link>

            <Link to="/products" className="text-gray-600 hover:text-gray-900">

              Products

            </Link>

            <Link to="/about" className="text-gray-600 hover:text-gray-900">

              About

            </Link>

            <Link to="/contact" className="text-gray-600 hover:text-gray-900">

              Contact

            </Link>

            <button className="bg-[#1652F0] text-white px-4 py-2 rounded-md hover:bg-[#1652F0]/90">

              Get a Quote

            </button>

          </div>



          {/* Mobile Menu Button */}

          <div className="block md:hidden">

            <button className="p-2 text-gray-600 hover:text-gray-900">

              <AlignJustify size={24} strokeWidth={2} />

            </button>

          </div>

        </div>

      </div>

    </nav>

  )

}



export default Navbar 






























































