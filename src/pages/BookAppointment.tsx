import Navigation from "@/components/Navigation";
import AppointmentForm from "@/components/AppointmentForm";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, CheckCircle, Phone, AlertCircle } from "lucide-react";

const BookAppointment = () => {
  const appointmentInfo = [
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description: "Choose from available time slots Monday through Saturday",
    },
    {
      icon: Clock,
      title: "Consultation Time",
      description: "Initial appointments typically take 30-45 minutes",
    },
    {
      icon: CheckCircle,
      title: "What to Expect",
      description:
        "Thorough assessment, detailed explanation, and written estimate",
    },
  ];

  const preparationTips = [
    "Bring your guitar in its case if possible",
    "Have any documentation about previous repairs",
    "Note any specific issues or concerns",
    "Bring spare strings if you have preferences",
    "Consider your timeline and budget",
  ];

  return (
    <div className="min-h-screen bg-guitar-cream-50">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-guitar-brown-800 to-guitar-brown-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-display text-4xl lg:text-6xl font-bold mb-6">
              Book Your Appointment
            </h1>
            <p className="text-xl text-guitar-cream-100 max-w-3xl mx-auto">
              Schedule a consultation with our expert technicians. We'll assess
              your guitar's needs and provide personalized recommendations for
              optimal performance.
            </p>
          </div>
        </div>
      </section>

      {/* Appointment Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-guitar-brown-900 mb-4">
              What to Expect
            </h2>
            <p className="text-lg text-guitar-brown-600 max-w-2xl mx-auto">
              Your appointment is the first step toward getting your guitar back
              in perfect playing condition.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {appointmentInfo.map((info, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-guitar-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="h-8 w-8 text-guitar-gold-600" />
                </div>
                <h3 className="font-display text-xl font-bold text-guitar-brown-900 mb-2">
                  {info.title}
                </h3>
                <p className="text-guitar-brown-600">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="py-16 bg-guitar-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AppointmentForm />
        </div>
      </section>

      {/* Preparation Tips */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-display text-3xl font-bold text-guitar-brown-900 mb-6">
                How to Prepare for Your Appointment
              </h2>
              <p className="text-lg text-guitar-brown-600 mb-8">
                A little preparation goes a long way in ensuring we can provide
                the best service for your guitar. Here's what we recommend
                bringing or noting:
              </p>
              <ul className="space-y-4">
                {preparationTips.map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-guitar-gold-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-guitar-brown-700">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <Card className="border-guitar-brown-200">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <AlertCircle className="h-6 w-6 text-guitar-gold-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-display text-lg font-bold text-guitar-brown-900 mb-2">
                        Important Note
                      </h3>
                      <p className="text-guitar-brown-600">
                        If your guitar needs immediate attention due to damage
                        or safety concerns, please call us directly at (615)
                        555-0123. We offer emergency repair services for urgent
                        situations.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-guitar-brown-200">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-guitar-gold-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-display text-lg font-bold text-guitar-brown-900 mb-2">
                        Need to Reschedule?
                      </h3>
                      <p className="text-guitar-brown-600">
                        Life happens! If you need to change your appointment,
                        please give us at least 24 hours notice. You can call us
                        or email info@harmonyrepairs.com.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-16 bg-guitar-brown-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="font-display text-3xl font-bold text-guitar-brown-900 mb-4">
              Business Hours
            </h2>
            <p className="text-guitar-brown-600">
              We're here when you need us, with convenient hours throughout the
              week
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-guitar-brown-200">
              <CardContent className="p-6 text-center">
                <h3 className="font-display text-xl font-bold text-guitar-brown-900 mb-4">
                  Regular Hours
                </h3>
                <div className="space-y-2 text-guitar-brown-700">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-guitar-brown-200">
              <CardContent className="p-6 text-center">
                <h3 className="font-display text-xl font-bold text-guitar-brown-900 mb-4">
                  Location
                </h3>
                <div className="text-guitar-brown-700 space-y-1">
                  <p>123 Music Street</p>
                  <p>Nashville, TN 37203</p>
                  <p className="mt-3 text-sm text-guitar-brown-600">
                    Free parking available in rear lot
                  </p>
                  <p className="text-sm text-guitar-brown-600">
                    Wheelchair accessible entrance
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-12 bg-guitar-brown-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-display text-2xl font-bold mb-4">
            Need Emergency Service?
          </h3>
          <p className="text-guitar-cream-100 mb-6">
            For urgent repairs that can't wait for a scheduled appointment, call
            us directly. We offer same-day service for emergency situations.
          </p>
          <a
            href="tel:6155550123"
            className="inline-flex items-center justify-center px-6 py-3 bg-guitar-gold-500 hover:bg-guitar-gold-600 text-white font-semibold rounded-lg transition-colors"
          >
            <Phone className="mr-2 h-5 w-5" />
            Call (615) 555-0123
          </a>
        </div>
      </section>
    </div>
  );
};

export default BookAppointment;
