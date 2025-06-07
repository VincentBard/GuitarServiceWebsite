import Navigation from "@/components/Navigation";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Wrench,
  Settings,
  Paintbrush,
  Zap,
  Shield,
  Clock,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      title: "General Repairs",
      description:
        "Comprehensive repair services including neck adjustments, fret work, bridge repairs, and nut replacement. We handle everything from minor issues to major structural repairs.",
      icon: Wrench,
      price: "Starting at $50",
      details: [
        "Fret leveling and crown work",
        "Neck adjustments and truss rod repair",
        "Bridge and saddle work",
        "Nut replacement and adjustment",
        "Crack repairs and structural work",
      ],
    },
    {
      title: "Electronics & Wiring",
      description:
        "Complete electronics services for electric guitars and basses including pickup installation, wiring repairs, and custom modifications.",
      icon: Zap,
      price: "Starting at $75",
      details: [
        "Pickup installation and replacement",
        "Custom wiring configurations",
        "Output jack repair",
        "Potentiometer and switch replacement",
        "Shielding and noise reduction",
      ],
    },
    {
      title: "Setup & Maintenance",
      description:
        "Professional setups to optimize your guitar's playability including string height adjustment, intonation, and neck relief.",
      icon: Settings,
      price: "Starting at $40",
      details: [
        "Action adjustment",
        "Intonation setting",
        "Neck relief adjustment",
        "String installation",
        "General cleaning and conditioning",
      ],
    },
    {
      title: "Refinishing & Restoration",
      description:
        "Complete refinishing services to restore your guitar's appearance while preserving its tonal characteristics and value.",
      icon: Paintbrush,
      price: "Starting at $200",
      details: [
        "Complete strip and refinish",
        "Spot touch-ups and repairs",
        "Color matching",
        "Clear coat application",
        "Hardware restoration",
      ],
    },
  ];

  const additionalServices = [
    "Custom guitar builds",
    "Vintage guitar restoration",
    "Insurance appraisals",
    "Rush service (24-48 hours)",
    "Pickup and delivery service",
    "Consultation services",
  ];

  const processSteps = [
    {
      step: "1",
      title: "Assessment",
      description:
        "We thoroughly examine your guitar to identify all issues and provide a detailed estimate.",
    },
    {
      step: "2",
      title: "Approval",
      description:
        "We discuss our findings with you and get approval before beginning any work.",
    },
    {
      step: "3",
      title: "Repair",
      description:
        "Our skilled technicians perform the necessary repairs using quality parts and materials.",
    },
    {
      step: "4",
      title: "Quality Check",
      description:
        "Every guitar undergoes a final inspection and setup before being returned to you.",
    },
  ];

  return (
    <div className="min-h-screen bg-guitar-cream-50">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-guitar-brown-800 to-guitar-brown-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-display text-4xl lg:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-guitar-cream-100 max-w-3xl mx-auto">
              Comprehensive guitar repair and restoration services backed by
              decades of experience and a commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-guitar-brown-900 mb-4">
              What We Do
            </h2>
            <p className="text-lg text-guitar-brown-600 max-w-2xl mx-auto">
              From simple setups to complete restorations, we offer a full range
              of services to keep your guitar in perfect playing condition.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <Card
                key={index}
                className="border-guitar-brown-200 hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-guitar-gold-100 rounded-lg flex items-center justify-center">
                        <service.icon className="h-6 w-6 text-guitar-gold-600" />
                      </div>
                      <div>
                        <CardTitle className="font-display text-xl text-guitar-brown-900">
                          {service.title}
                        </CardTitle>
                        <p className="text-guitar-gold-600 font-semibold">
                          {service.price}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-guitar-brown-600 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.details.map((detail, detailIndex) => (
                      <li
                        key={detailIndex}
                        className="flex items-center text-sm text-guitar-brown-600"
                      >
                        <CheckCircle className="h-4 w-4 text-guitar-gold-500 mr-2 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-guitar-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-guitar-brown-900 mb-6">
                Additional Services
              </h2>
              <p className="text-lg text-guitar-brown-600 mb-8">
                Beyond our core repair services, we offer specialized solutions
                for unique needs and situations. Whether you need a custom build
                or emergency repair, we're here to help.
              </p>
              <ul className="space-y-3 mb-8">
                {additionalServices.map((service, index) => (
                  <li
                    key={index}
                    className="flex items-center text-guitar-brown-700"
                  >
                    <CheckCircle className="h-5 w-5 text-guitar-gold-500 mr-3 flex-shrink-0" />
                    {service}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                size="lg"
                className="bg-guitar-gold-500 hover:bg-guitar-gold-600 text-white"
              >
                <Link to="/quote">
                  Get Custom Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="border-guitar-brown-200 text-center p-6">
                <Shield className="h-12 w-12 text-guitar-gold-500 mx-auto mb-4" />
                <h3 className="font-display text-lg font-bold text-guitar-brown-900 mb-2">
                  90-Day Warranty
                </h3>
                <p className="text-guitar-brown-600 text-sm">
                  All repairs backed by our comprehensive warranty
                </p>
              </Card>

              <Card className="border-guitar-brown-200 text-center p-6">
                <Clock className="h-12 w-12 text-guitar-gold-500 mx-auto mb-4" />
                <h3 className="font-display text-lg font-bold text-guitar-brown-900 mb-2">
                  Fast Turnaround
                </h3>
                <p className="text-guitar-brown-600 text-sm">
                  Most repairs completed within 5-7 business days
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-guitar-brown-900 mb-4">
              Our Process
            </h2>
            <p className="text-lg text-guitar-brown-600 max-w-2xl mx-auto">
              We follow a proven process to ensure your guitar receives the best
              possible care and attention.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-guitar-gold-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {step.step}
                </div>
                <h3 className="font-display text-xl font-bold text-guitar-brown-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-guitar-brown-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="py-12 bg-guitar-brown-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-display text-2xl font-bold text-guitar-brown-900 mb-4">
            Transparent Pricing
          </h3>
          <p className="text-guitar-brown-700 mb-6">
            All prices shown are starting rates. Final pricing depends on the
            specific work required. We always provide a detailed estimate before
            beginning any repair work.
          </p>
          <p className="text-guitar-brown-600 text-sm">
            * Emergency and rush services available for an additional fee
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-guitar-brown-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-guitar-cream-100 mb-8 max-w-2xl mx-auto">
            Whether you need a simple setup or major restoration, our team is
            ready to help. Contact us today to discuss your guitar's needs.
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
    </div>
  );
};

export default Services;
