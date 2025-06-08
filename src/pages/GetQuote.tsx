import Navigation from "@/components/Navigation";
import QuoteForm from "@/components/QuoteForm";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, DollarSign, Shield, Phone, Mail, MapPin } from "lucide-react";

const GetQuote = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Free Estimates",
      description: "No cost for initial assessment and written quote",
    },
    {
      icon: Clock,
      title: "Quick Response",
      description: "We'll get back to you within 24 hours",
    },
    {
      icon: Shield,
      title: "No Obligation",
      description: "Quote with no pressure to commit",
    },
  ];

  const faqItems = [
    {
      question: "How accurate are your quotes?",
      answer:
        "Our quotes are very accurate as they're based on detailed descriptions and our extensive experience. However, final pricing may vary slightly if additional issues are discovered during inspection.",
    },
    {
      question: "Do you charge for estimates?",
      answer:
        "Basic estimates are completely free. For complex vintage restorations or custom work, we may charge a small assessment fee that's applied toward the final repair cost.",
    },
    {
      question: "How long does the quote process take?",
      answer:
        "Most quotes are provided within 24 hours. Complex or specialized work may require up to 48 hours for a comprehensive estimate.",
    },
    {
      question: "What information do you need?",
      answer:
        "We need details about your guitar (make, model, year if known), a description of the issues, and your contact information. Photos can be helpful but aren't required for an initial quote.",
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
              Get Your Free Quote
            </h1>
            <p className="text-xl text-guitar-cream-100 max-w-3xl mx-auto">
              Tell us about your guitar and the issues you're experiencing.
              We'll provide a detailed, no-obligation estimate within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-guitar-brown-900 mb-4">
              Why Get a Quote From Us?
            </h2>
            <p className="text-lg text-guitar-brown-600 max-w-2xl mx-auto">
              We believe in transparency and helping you make informed decisions
              about your guitar repairs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-guitar-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-guitar-gold-600" />
                </div>
                <h3 className="font-display text-xl font-bold text-guitar-brown-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-guitar-brown-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-16 bg-guitar-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuoteForm />
        </div>
      </section>

      {/* Contact Alternative */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-guitar-brown-900 mb-4">
              Prefer to Talk Directly?
            </h2>
            <p className="text-lg text-guitar-brown-600 max-w-2xl mx-auto">
              We're happy to discuss your guitar's needs over the phone or in
              person. Visit our shop or give us a call during business hours.
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

      {/* FAQ Section */}
      <section className="py-16 bg-guitar-cream-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-guitar-brown-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-guitar-brown-600">
              Common questions about our quote process
            </p>
          </div>

          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <Card key={index} className="border-guitar-brown-200">
                <CardContent className="p-6">
                  <h3 className="font-display text-lg font-bold text-guitar-brown-900 mb-3">
                    {item.question}
                  </h3>
                  <p className="text-guitar-brown-600 leading-relaxed">
                    {item.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-guitar-brown-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold mb-4">
              Trusted by Musicians Since 1985
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-guitar-gold-400 mb-2">
                15,000+
              </div>
              <div className="text-guitar-cream-200">Guitars Repaired</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-guitar-gold-400 mb-2">
                39
              </div>
              <div className="text-guitar-cream-200">Years of Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-guitar-gold-400 mb-2">
                98%
              </div>
              <div className="text-guitar-cream-200">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-guitar-gold-400 mb-2">
                90
              </div>
              <div className="text-guitar-cream-200">Day Warranty</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetQuote;
