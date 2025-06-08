import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-guitar-cream-50 to-guitar-brown-100 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="font-display text-4xl lg:text-6xl font-bold text-guitar-brown-900 leading-tight">
              Expert Guitar
              <span className="text-guitar-gold-600"> Repair</span>
              <br />& Restoration
            </h1>
            <p className="mt-6 text-lg text-guitar-brown-700 max-w-xl mx-auto lg:mx-0">
              Bringing your beloved instruments back to life with masterful
              craftsmanship and decades of experience. From vintage acoustics to
              modern electrics, we handle every repair with the care your guitar
              deserves.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-guitar-gold-500 hover:bg-guitar-gold-600 text-white font-semibold"
              >
                <Link to="/appointment">
                  Book Appointment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-guitar-brown-300 text-guitar-brown-700 hover:bg-guitar-brown-50"
              >
                <Link to="/quote">Get Free Quote</Link>
              </Button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-guitar-brown-200 rounded-2xl p-8 lg:p-12 transform rotate-3 shadow-xl">
              <div className="bg-white rounded-xl p-6 lg:p-8 transform -rotate-6 shadow-lg">
                <div className="flex items-center justify-center h-64 lg:h-80">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F226266b64ccd402c84492efdf55dd30e%2F1e39c78a422b471582bb161c897309b1?width=400"
                    alt="Professional guitar repair service"
                    className="w-full h-full object-cover object-center rounded-lg mt-5"
                    loading="lazy"
                  />
                </div>
                <div className="mt-6 text-center">
                  <h3 className="font-display text-2xl font-bold text-guitar-brown-900">
                    Professional Service
                  </h3>
                  <p className="mt-2 text-guitar-brown-600">
                    Quality repairs since 1985
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div
              className="absolute -top-4 -right-4 w-20 h-20 rounded-full opacity-60"
              style={{ backgroundColor: "#f59e0b" }}
            ></div>
            <div
              className="absolute -bottom-6 -left-10 w-16 h-16 rounded-full opacity-80"
              style={{ backgroundColor: "#fffbf5" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
