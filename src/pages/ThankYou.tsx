import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  Calendar,
  Phone,
  Mail,
  Home,
  Clock,
  MapPin,
} from "lucide-react";

const ThankYou = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const nextSteps = [
    {
      icon: Mail,
      title: "Confirmation Email",
      description:
        "You'll receive a confirmation email within 15 minutes with all appointment details.",
    },
    {
      icon: Phone,
      title: "Confirmation Call",
      description:
        "Our team will call you 24 hours before your appointment to confirm the time.",
    },
    {
      icon: Calendar,
      title: "Appointment Day",
      description:
        "Bring your guitar and any relevant documentation to your scheduled appointment.",
    },
  ];

  return (
    <div className="min-h-screen bg-guitar-cream-50">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-24 h-24 bg-guitar-gold-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="h-12 w-12 text-guitar-gold-600" />
          </div>

          <h1 className="font-display text-4xl lg:text-5xl font-bold text-guitar-brown-900 mb-6">
            Thank You!
          </h1>

          <p className="text-xl text-guitar-brown-600 mb-8 max-w-2xl mx-auto">
            Your appointment has been successfully scheduled. We're excited to
            help restore your guitar to its optimal playing condition.
          </p>

          <div className="bg-guitar-gold-50 border border-guitar-gold-200 rounded-lg p-6 mb-8">
            <h2 className="font-display text-2xl font-bold text-guitar-brown-900 mb-4">
              Appointment Confirmed
            </h2>
            <p className="text-guitar-brown-700">
              We've received your appointment request and will be in touch soon
              to confirm the details. Please keep an eye on your email and phone
              for updates.
            </p>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16 bg-guitar-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-guitar-brown-900 mb-4">
              What Happens Next?
            </h2>
            <p className="text-lg text-guitar-brown-600 max-w-2xl mx-auto">
              Here's what you can expect in the coming days leading up to your
              appointment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {nextSteps.map((step, index) => (
              <Card key={index} className="border-guitar-brown-200 text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-guitar-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-guitar-gold-600" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-guitar-brown-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-guitar-brown-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-guitar-brown-900 mb-4">
              Questions or Need to Make Changes?
            </h2>
            <p className="text-lg text-guitar-brown-600 max-w-2xl mx-auto">
              We're here to help! If you have any questions or need to modify
              your appointment, don't hesitate to reach out.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-guitar-brown-200 text-center">
              <CardContent className="p-6">
                <Phone className="h-12 w-12 text-guitar-gold-500 mx-auto mb-4" />
                <h3 className="font-display text-lg font-bold text-guitar-brown-900 mb-2">
                  Call Us
                </h3>
                <p className="text-guitar-brown-600 mb-2">(613) 555-0123</p>
                <p className="text-sm text-guitar-brown-500">
                  Mon-Fri: 9 AM - 6 PM
                  <br />
                  Sat: 10 AM - 4 PM
                </p>
              </CardContent>
            </Card>

            <Card className="border-guitar-brown-200 text-center">
              <CardContent className="p-6">
                <Mail className="h-12 w-12 text-guitar-gold-500 mx-auto mb-4" />
                <h3 className="font-display text-lg font-bold text-guitar-brown-900 mb-2">
                  Email Us
                </h3>
                <p className="text-guitar-brown-600 mb-2">
                  info@plectrumtechs.com
                </p>
                <p className="text-sm text-guitar-brown-500">
                  We respond to all emails
                  <br />
                  within 24 hours
                </p>
              </CardContent>
            </Card>

            <Card className="border-guitar-brown-200 text-center">
              <CardContent className="p-6">
                <MapPin className="h-12 w-12 text-guitar-gold-500 mx-auto mb-4" />
                <h3 className="font-display text-lg font-bold text-guitar-brown-900 mb-2">
                  Visit Our Shop
                </h3>
                <p className="text-guitar-brown-600 mb-2">
                  123 Bank Street
                  <br />
                  Ottawa, ON K1P 5N2
                </p>
                <p className="text-sm text-guitar-brown-500">
                  Walk-ins welcome
                  <br />
                  Free parking available
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Preparation Reminder */}
      <section className="py-16 bg-guitar-brown-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-guitar-brown-200">
            <CardContent className="p-8">
              <div className="flex items-start">
                <Clock className="h-8 w-8 text-guitar-gold-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-display text-2xl font-bold text-guitar-brown-900 mb-4">
                    Appointment Preparation Reminder
                  </h3>
                  <p className="text-guitar-brown-600 mb-4">
                    To make the most of your appointment time, please remember
                    to bring:
                  </p>
                  <ul className="space-y-2 text-guitar-brown-700">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-guitar-gold-500 mr-2" />
                      Your guitar in its case (if available)
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-guitar-gold-500 mr-2" />
                      Any documentation about previous repairs
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-guitar-gold-500 mr-2" />
                      A list of specific issues or concerns
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-guitar-gold-500 mr-2" />
                      Your preferred timeline and budget (if applicable)
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Navigation Options */}
      <section className="py-16 bg-guitar-brown-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold mb-8">
            While You're Here
          </h2>
          <p className="text-xl text-guitar-cream-100 mb-8">
            Learn more about our services or explore our story
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-guitar-cream-200 text-guitar-cream-100 hover:bg-guitar-cream-100 hover:text-guitar-brown-800"
            >
              <Link to="/services">Our Services</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-guitar-cream-200 text-guitar-cream-100 hover:bg-guitar-cream-100 hover:text-guitar-brown-800"
            >
              <Link to="/about">About Us</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-guitar-gold-500 hover:bg-guitar-gold-600 text-white"
            >
              <Link to="/">
                <Home className="mr-2 h-5 w-5" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThankYou;
