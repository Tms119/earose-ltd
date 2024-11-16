import { Button } from './ui/button';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-xl font-bold">Earose Industries</span>
        </div>
        
        <div className="flex items-center space-x-6">
          <a href="/" className="text-gray-600 hover:text-gray-900">Home</a>
          <a href="/about" className="text-gray-600 hover:text-gray-900">About</a>
          <a href="/services" className="text-gray-600 hover:text-gray-900">Services</a>
          <a href="/contact" className="text-gray-600 hover:text-gray-900">Contact</a>
          
          <Button 
            variant="default"
            className="font-semibold"
          >
            Get a Quote
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 