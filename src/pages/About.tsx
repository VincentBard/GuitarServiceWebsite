import { Navigation } from "@/components/Navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Guitar,
  Award,
  Users,
  Clock,
  Heart,
  CheckCircle,
  Music,
  Wrench,
} from "lucide-react";

const About = () => {
  const milestones = [
    { year: "2008", event: "Started StringCraft Services" },
    { year: "2012", event: "Opened our first workshop" },
    { year: "2015", event: "Reached 500 satisfied customers" },
    { year: "2018", event: "Expanded to custom modifications" },
    { year: "2021", event: "Launched online booking system" },
    { year: "2024", event: "Over 1000 guitars serviced" },
  ];

  const values = [
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Passion for Music",
      description:
        "We're musicians ourselves and understand the importance of a well-maintained instrument",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Quality Workmanship",
      description:
        "Every guitar receives the same attention to detail, from budget instruments to vintage classics",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Customer Focus",
      description:
        "Your satisfaction is our priority, with clear communication throughout the service process",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Reliable Service",
      description:
        "Timely turnarounds and transparent pricing with no hidden fees",
    },
  ];

  const expertise = [
    "Acoustic guitar repair and setup",
    "Electric guitar maintenance",
    "Bass guitar services",
    "Vintage instrument restoration",
    "Electronics and pickup work",
    "Custom modifications",
    "Fret work and neck adjustments",
    "Hardware upgrades and installation",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              About StringCraft Services
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Passionate About{" "}
              <span className="text-blue-600">Guitar Excellence</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              For over 15 years, we've been dedicated to providing exceptional
              guitar services to musicians throughout our community. Our story
              is one of passion, craftsmanship, and an unwavering commitment to
              musical excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Our Story
                </h2>
                <p className="text-slate-600 mb-4">
                  StringCraft Services was founded in 2008 by master luthier
                  John Martinez, who started repairing guitars in his garage
                  after years of frustration with poor service quality in the
                  area.
                </p>
                <p className="text-slate-600 mb-4">
                  What began as a side project quickly grew into a full-time
                  passion as word spread about our meticulous attention to
                  detail and genuine care for each instrument that came through
                  our doors.
                </p>
                <p className="text-slate-600 mb-6">
                  Today, we're proud to serve over 1000 satisfied customers,
                  from bedroom players to touring professionals, all while
                  maintaining the same personal touch and quality standards that
                  started it all.
                </p>
                <Button asChild>
                  <Link to="/services">See Our Services</Link>
                </Button>
              </div>
              <div className="bg-slate-100 rounded-lg p-8 text-center">
                <Guitar className="h-24 w-24 mx-auto mb-4 text-blue-600" />
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  John Martinez
                </h3>
                <p className="text-slate-600 mb-4">Founder & Master Luthier</p>
                <p className="text-sm text-slate-500">
                  "Every guitar has its own personality. My job is to help it
                  sing its best song."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Values
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                      {value.icon}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Journey
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Key milestones in our company's growth
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {milestones.map((milestone, index) => (
                <Card key={index}>
                  <CardHeader>
                    <Badge variant="outline" className="w-fit">
                      {milestone.year}
                    </Badge>
                    <CardTitle className="text-lg">{milestone.event}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Our Expertise
                </h2>
                <p className="text-slate-600 mb-6">
                  With over 15 years of experience, we've mastered every aspect
                  of guitar care and repair. Our comprehensive skill set covers
                  everything from basic maintenance to complex restorations.
                </p>
                <div className="grid gap-3">
                  {expertise.map((skill, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-slate-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <Card className="p-6 text-center">
                  <Music className="h-12 w-12 mx-auto mb-3 text-blue-600" />
                  <h3 className="text-xl font-semibold mb-2">1000+</h3>
                  <p className="text-slate-600">Guitars Serviced</p>
                </Card>
                <Card className="p-6 text-center">
                  <Wrench className="h-12 w-12 mx-auto mb-3 text-blue-600" />
                  <h3 className="text-xl font-semibold mb-2">15+</h3>
                  <p className="text-slate-600">Years Experience</p>
                </Card>
                <Card className="p-6 text-center">
                  <Users className="h-12 w-12 mx-auto mb-3 text-blue-600" />
                  <h3 className="text-xl font-semibold mb-2">98%</h3>
                  <p className="text-slate-600">Customer Satisfaction</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience Our Service?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join the hundreds of musicians who trust us with their instruments
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/appointment">Book Appointment</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600"
              asChild
            >
              <Link to="/quote">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container mx-auto px-4 text-center text-slate-600">
          <p>&copy; 2024 StringCraft Services. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
