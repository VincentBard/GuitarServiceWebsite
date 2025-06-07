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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import {
  Guitar,
  Wrench,
  Zap,
  Volume2,
  Clock,
  DollarSign,
  CheckCircle,
  Music,
  Settings,
  Sparkles,
} from "lucide-react";

const Services = () => {
  const repairServices = [
    {
      icon: <Wrench className="h-6 w-6" />,
      title: "Fret Work",
      description:
        "Fret leveling, crowning, and replacement for optimal playability",
      price: "From $80",
      duration: "2-3 days",
    },
    {
      icon: <Guitar className="h-6 w-6" />,
      title: "Neck Repair",
      description: "Neck resets, crack repairs, and headstock breaks",
      price: "From $150",
      duration: "5-7 days",
    },
    {
      icon: <Music className="h-6 w-6" />,
      title: "Bridge Work",
      description: "Bridge regluing, saddle replacement, and intonation",
      price: "From $100",
      duration: "3-4 days",
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Tuning Machine Repair",
      description: "Tuner replacement and adjustment for smooth operation",
      price: "From $60",
      duration: "1-2 days",
    },
  ];

  const setupServices = [
    {
      icon: <Guitar className="h-6 w-6" />,
      title: "Basic Setup",
      description: "Action adjustment, intonation, and string change",
      price: "$65",
      duration: "Same day",
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Premium Setup",
      description: "Complete setup with fret polishing and deep cleaning",
      price: "$95",
      duration: "1-2 days",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Electric Guitar Setup",
      description: "Includes pickup height adjustment and electronics check",
      price: "$75",
      duration: "Same day",
    },
    {
      icon: <Volume2 className="h-6 w-6" />,
      title: "Bass Setup",
      description: "Specialized setup for bass guitars",
      price: "$70",
      duration: "Same day",
    },
  ];

  const customServices = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Pickup Installation",
      description: "Professional pickup upgrades and wiring",
      price: "From $120",
      duration: "2-3 days",
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Hardware Upgrades",
      description: "Bridge, tuners, and nut upgrades",
      price: "From $80",
      duration: "1-3 days",
    },
    {
      icon: <Volume2 className="h-6 w-6" />,
      title: "Electronics Work",
      description: "Rewiring, switch replacement, and custom wiring",
      price: "From $100",
      duration: "2-4 days",
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Custom Finishes",
      description: "Refinishing and custom paint work",
      price: "Quote required",
      duration: "2-3 weeks",
    },
  ];

  const features = [
    "Free initial consultation and estimate",
    "Use of premium strings and parts",
    "30-day warranty on all work",
    "Progress updates throughout service",
    "Professional setup included with repairs",
    "Rush service available for urgent needs",
  ];

  const ServiceCard = ({ service }: { service: any }) => (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
              {service.icon}
            </div>
            <div>
              <CardTitle className="text-lg">{service.title}</CardTitle>
              <CardDescription className="mt-1">
                {service.description}
              </CardDescription>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <DollarSign className="h-4 w-4 text-green-600" />
              <span className="font-semibold text-green-700">
                {service.price}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4 text-slate-500" />
              <span className="text-sm text-slate-600">{service.duration}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Professional Guitar Services
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Complete <span className="text-blue-600">Guitar Care</span>{" "}
              Solutions
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              From routine maintenance to complex repairs and custom
              modifications, we provide comprehensive guitar services to keep
              your instrument in perfect condition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/appointment">Book Service</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/quote">Get Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Services
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Professional guitar services tailored to your instrument's needs
            </p>
          </div>

          <Tabs defaultValue="repair" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="repair">Repair Services</TabsTrigger>
              <TabsTrigger value="setup">Setup & Maintenance</TabsTrigger>
              <TabsTrigger value="custom">Custom Work</TabsTrigger>
            </TabsList>

            <TabsContent value="repair" className="mt-8">
              <div className="grid md:grid-cols-2 gap-6">
                {repairServices.map((service, index) => (
                  <ServiceCard key={index} service={service} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="setup" className="mt-8">
              <div className="grid md:grid-cols-2 gap-6">
                {setupServices.map((service, index) => (
                  <ServiceCard key={index} service={service} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="custom" className="mt-8">
              <div className="grid md:grid-cols-2 gap-6">
                {customServices.map((service, index) => (
                  <ServiceCard key={index} service={service} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                What's Included
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Every service comes with our commitment to quality and customer
                satisfaction
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-slate-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Process
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Simple, transparent, and professional service from start to finish
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Consultation</h3>
              <p className="text-slate-600 text-sm">
                Free assessment and detailed quote for your guitar
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Service</h3>
              <p className="text-slate-600 text-sm">
                Professional work with regular progress updates
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Quality Check</h3>
              <p className="text-slate-600 text-sm">
                Thorough testing and final setup before return
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Pickup</h3>
              <p className="text-slate-600 text-sm">
                Your guitar returned in perfect playing condition
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Service Your Guitar?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Book an appointment or get a quote for your guitar service needs
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

export default Services;
