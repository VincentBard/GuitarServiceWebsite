import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Wrench,
  Settings,
  Paintbrush,
  Zap,
  Music,
  Shield,
  Star,
  Clock,
  Award,
  ArrowRight,
} from "lucide-react";

const Index = () => {
  const services = [
    {
      title: "General Repairs",
      description:
        "Neck adjustments, fret work, bridge repairs, and comprehensive maintenance to keep your guitar playing smoothly.",
      icon: Wrench,
      price: "$50",
    },
    {
      title: "Electronics",
      description:
        "Pickup installation, wiring repairs, and electronic upgrades for electric guitars and basses.",
      icon: Zap,
      price: "$75",
    },
    {
      title: "Setup & Maintenance",
      description:
        "Professional setups including string height adjustment, intonation, and optimal playability tuning.",
      icon: Settings,
      price: "$40",
    },
    {
      title: "Refinishing",
      description:
        "Complete refinishing services to restore your guitar's beauty while preserving its tonal qualities.",
      icon: Paintbrush,
      price: "$200",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      comment:
        "Amazing work on my vintage Martin! They brought it back to life beautifully.",
    },
    {
      name: "Mike Rodriguez",
      rating: 5,
      comment:
        "Professional service and fair pricing. My Telecaster sounds better than ever.",
    },
    {
      name: "Emily Chen",
      rating: 5,
      comment:
        "Quick turnaround and excellent communication throughout the repair process.",
    },
  ];

  return (
    <div className="min-h-screen bg-guitar-cream-50">
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-guitar-brown-900 mb-4">
              Why Choose Harmony Repairs?
            </h2>
            <p className="text-lg text-guitar-brown-600 max-w-2xl mx-auto">
              With over 35 years of experience, we've built a reputation for
              excellence in guitar repair and restoration.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-guitar-gold-100 rounded-full flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-guitar-gold-600" />
              </div>
              <h3 className="font-display text-xl font-semibold text-guitar-brown-900 mb-2">
                Expert Craftsmanship
              </h3>
              <p className="text-guitar-brown-600">
                Master luthiers with decades of experience in guitar repair and
                restoration.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-guitar-gold-100 rounded-full flex items-center justify-center mb-4">
                <Clock className="h-8 w-8 text-guitar-gold-600" />
              </div>
              <h3 className="font-display text-xl font-semibold text-guitar-brown-900 mb-2">
                Fast Turnaround
              </h3>
              <p className="text-guitar-brown-600">
                Most repairs completed within 5-7 business days with rush
                service available.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-guitar-gold-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-guitar-gold-600" />
              </div>
              <h3 className="font-display text-xl font-semibold text-guitar-brown-900 mb-2">
                Quality Guarantee
              </h3>
              <p className="text-guitar-brown-600">
                All repairs backed by our 90-day warranty for your peace of
                mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-guitar-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-guitar-brown-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-guitar-brown-600 max-w-2xl mx-auto">
              From simple setups to complete restorations, we handle every
              repair with precision and care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="bg-guitar-gold-500 hover:bg-guitar-gold-600 text-white"
            >
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-guitar-brown-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-guitar-brown-600">
              Don't just take our word for it - hear from our satisfied
              customers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-guitar-brown-200">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-guitar-gold-500 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-guitar-brown-700 mb-4 italic">
                    "{testimonial.comment}"
                  </p>
                  <p className="font-semibold text-guitar-brown-900">
                    - {testimonial.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-guitar-brown-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Music className="h-16 w-16 text-guitar-gold-400 mx-auto mb-6" />
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
            Ready to Restore Your Guitar?
          </h2>
          <p className="text-xl text-guitar-cream-100 mb-8 max-w-2xl mx-auto">
            Get your beloved instrument back in perfect playing condition.
            Schedule your appointment today or request a free quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-guitar-gold-500 hover:bg-guitar-gold-600 text-white"
            >
              <Link to="/appointment">Book Appointment</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-guitar-cream-200 text-guitar-cream-100 hover:bg-guitar-cream-100 hover:text-guitar-brown-800"
            >
              <Link to="/quote">Get Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-guitar-brown-900 text-guitar-cream-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Music className="h-8 w-8 text-guitar-gold-500" />
                <span className="font-display text-xl font-bold">
                  Harmony Repairs
                </span>
              </div>
              <p className="text-guitar-cream-200">
                Professional guitar repair and restoration services since 1985.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-guitar-cream-200">
                <li>General Repairs</li>
                <li>Electronics</li>
                <li>Setup & Maintenance</li>
                <li>Refinishing</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-guitar-cream-200">
                <li>123 Music Street</li>
                <li>Nashville, TN 37203</li>
                <li>(615) 555-0123</li>
                <li>info@harmonyrepairs.com</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Hours</h4>
              <ul className="space-y-2 text-guitar-cream-200">
                <li>Mon-Fri: 9:00 AM - 6:00 PM</li>
                <li>Saturday: 10:00 AM - 4:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-guitar-brown-700 mt-8 pt-8 text-center text-guitar-cream-300">
            <p>&copy; 2024 Harmony Repairs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
