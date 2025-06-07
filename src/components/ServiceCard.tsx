import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  price?: string;
}

const ServiceCard = ({
  title,
  description,
  icon: Icon,
  price,
}: ServiceCardProps) => {
  return (
    <Card className="h-full border-guitar-brown-200 hover:shadow-lg transition-shadow duration-300 bg-white">
      <CardHeader className="text-center pb-4">
        <div className="mx-auto mb-4 w-16 h-16 bg-guitar-gold-100 rounded-full flex items-center justify-center">
          <Icon className="h-8 w-8 text-guitar-gold-600" />
        </div>
        <CardTitle className="font-display text-xl text-guitar-brown-900">
          {title}
        </CardTitle>
        {price && (
          <p className="text-guitar-gold-600 font-semibold text-lg">
            Starting at {price}
          </p>
        )}
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-guitar-brown-600 text-center leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
