import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Home, Users, Wrench, FileText, Calendar, Menu, X } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/about", label: "About Us", icon: Users },
    { path: "/services", label: "Services", icon: Wrench },
    { path: "/quote", label: "Get a Quote", icon: FileText },
    { path: "/appointment", label: "Book Appointment", icon: Calendar },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg border-b border-guitar-brown-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="text-guitar-brown-800 pl-2 font-display text-xl"
          >
            Plectrum Techs
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200",
                    isActive
                      ? "bg-guitar-gold-100 text-guitar-brown-900"
                      : "text-guitar-brown-600 hover:text-guitar-brown-900 hover:bg-guitar-cream-50",
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-guitar-brown-600 hover:text-guitar-brown-900 p-2 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden border-t border-guitar-brown-200 transition-all duration-300 ease-in-out",
            isMobileMenuOpen
              ? "max-h-96 opacity-100 py-3"
              : "max-h-0 opacity-0 overflow-hidden",
          )}
        >
          <div className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200",
                    isActive
                      ? "bg-guitar-gold-100 text-guitar-brown-900"
                      : "text-guitar-brown-600 hover:text-guitar-brown-900 hover:bg-guitar-cream-50",
                  )}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
