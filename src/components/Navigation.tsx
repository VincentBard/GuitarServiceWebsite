import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Home, Users, Wrench, FileText, Calendar, Music } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/about", label: "About Us", icon: Users },
    { path: "/services", label: "Services", icon: Wrench },
    { path: "/quote", label: "Get a Quote", icon: FileText },
    { path: "/appointment", label: "Book Appointment", icon: Calendar },
  ];

  return (
    <nav className="bg-white shadow-lg border-b border-guitar-brown-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Music className="h-8 w-8 text-guitar-gold-500" />
            <span className="font-display text-xl font-bold text-guitar-brown-800">
              Harmony Repairs
            </span>
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
            <button className="text-guitar-brown-600 hover:text-guitar-brown-900 p-2">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation (hidden by default, would need state management for toggle) */}
        <div className="md:hidden border-t border-guitar-brown-200 py-3 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
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
    </nav>
  );
};

export default Navigation;
