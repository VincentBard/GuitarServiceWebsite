import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Music, Award, Users, Heart, ArrowRight } from "lucide-react";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Robert Martinez",
      role: "Master Luthier & Founder",
      experience: "35+ years",
      description:
        "Founded Plectrum Techs in 1985 with a passion for bringing guitars back to life. Specializes in vintage acoustic restoration.",
    },
    {
      name: "Sarah Thompson",
      role: "Electronics Specialist",
      experience: "15 years",
      description:
        "Expert in guitar electronics, pickup installation, and wiring. Certified technician for major guitar manufacturers.",
    },
    {
      name: "David Kim",
      role: "Setup & Maintenance",
      experience: "12 years",
      description:
        "Precision setup specialist ensuring optimal playability. Former touring musician who understands performance needs.",
    },
  ];

  const milestones = [
    {
      year: "1985",
      event: "Plectrum Techs founded in a small Ottawa workshop",
    },
    {
      year: "1992",
      event: "Expanded to current location, added electronics department",
    },
    {
      year: "1998",
      event: "Became authorized service center for major brands",
    },
    {
      year: "2005",
      event: "Introduced vintage restoration specialty services",
    },
    {
      year: "2015",
      event: "Celebrated 30 years with over 10,000 guitars repaired",
    },
    {
      year: "2024",
      event: "Continuing the tradition of excellence into our 39th year",
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
              Our Story
            </h1>
            <p className="text-xl text-guitar-cream-100 max-w-3xl mx-auto">
              For nearly four decades, we've been Ottawa's premier destination
              for guitar repair, restoration, and maintenance. Our passion for
              music drives everything we do.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-guitar-brown-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-guitar-brown-700 mb-6">
                We believe every guitar has a story to tell, and our mission is
                to ensure that story continues for generations to come. Whether
                it's a treasured family heirloom or a working musician's daily
                companion, we treat every instrument with the respect and care
                it deserves.
              </p>
              <p className="text-lg text-guitar-brown-700 mb-8">
                Our commitment to quality craftsmanship, honest communication,
                and fair pricing has made us the trusted choice for musicians
                throughout Ottawa and beyond.
              </p>
              <div className="flex space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-guitar-gold-600">
                    39
                  </div>
                  <div className="text-guitar-brown-600">
                    Years of Experience
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-guitar-gold-600">
                    15K+
                  </div>
                  <div className="text-guitar-brown-600">Guitars Repaired</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-guitar-gold-600">
                    98%
                  </div>
                  <div className="text-guitar-brown-600">
                    Customer Satisfaction
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-guitar-gold-100 rounded-2xl p-8 transform rotate-2 shadow-lg">
                <div className="bg-white rounded-xl p-6 transform -rotate-4 shadow-md">
                  <Music className="h-24 w-24 text-guitar-gold-500 mx-auto mb-4" />
                  <h3 className="font-display text-xl font-bold text-guitar-brown-900 text-center mb-2">
                    Passion for Music
                  </h3>
                  <p className="text-guitar-brown-600 text-center">
                    Every repair is a labor of love, restoring the connection
                    between musician and instrument.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-guitar-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-guitar-brown-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-guitar-brown-600 max-w-2xl mx-auto">
              Our skilled craftspeople combine traditional techniques with
              modern expertise to deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="border-guitar-brown-200 hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-guitar-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-10 w-10 text-guitar-gold-600" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-guitar-brown-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-guitar-gold-600 font-semibold mb-1">
                    {member.role}
                  </p>
                  <p className="text-guitar-brown-500 text-sm mb-4">
                    {member.experience} experience
                  </p>
                  <p className="text-guitar-brown-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-guitar-brown-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-guitar-brown-600">
              Key milestones in our four-decade commitment to excellence
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-guitar-gold-300"></div>

            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-guitar-gold-500 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"}`}
                >
                  <Card className="border-guitar-brown-200">
                    <CardContent className="p-4">
                      <div className="text-2xl font-bold text-guitar-gold-600 mb-2">
                        {milestone.year}
                      </div>
                      <p className="text-guitar-brown-700">{milestone.event}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-guitar-brown-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
              Our Values
            </h2>
            <p className="text-xl text-guitar-cream-100 max-w-2xl mx-auto">
              The principles that guide every repair and restoration we
              undertake
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Award className="h-12 w-12 text-guitar-gold-400 mx-auto mb-4" />
              <h3 className="font-display text-xl font-bold mb-2">
                Excellence
              </h3>
              <p className="text-guitar-cream-200">
                We never compromise on quality. Every repair meets our exacting
                standards before leaving our shop.
              </p>
            </div>

            <div className="text-center">
              <Heart className="h-12 w-12 text-guitar-gold-400 mx-auto mb-4" />
              <h3 className="font-display text-xl font-bold mb-2">Passion</h3>
              <p className="text-guitar-cream-200">
                Our love for music and craftsmanship drives us to exceed
                expectations on every project.
              </p>
            </div>

            <div className="text-center">
              <Users className="h-12 w-12 text-guitar-gold-400 mx-auto mb-4" />
              <h3 className="font-display text-xl font-bold mb-2">Service</h3>
              <p className="text-guitar-cream-200">
                We treat every customer like family, providing honest advice and
                transparent communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-guitar-cream-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-guitar-brown-900 mb-4">
            Ready to Experience Our Craftsmanship?
          </h2>
          <p className="text-xl text-guitar-brown-600 mb-8">
            Join thousands of satisfied musicians who trust us with their most
            treasured instruments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-guitar-gold-500 hover:bg-guitar-gold-600 text-white"
            >
              <Link to="/appointment">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-guitar-brown-300 text-guitar-brown-700 hover:bg-guitar-brown-50"
            >
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
