import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import {
  Guitar,
  Calculator,
  Clock,
  CheckCircle,
  Phone,
  Mail,
  MessageSquare,
} from "lucide-react";

const quoteFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  guitarType: z.string().min(1, "Please select guitar type"),
  guitarBrand: z.string().min(1, "Please enter guitar brand"),
  guitarModel: z.string().min(1, "Please enter guitar model"),
  guitarAge: z.string().min(1, "Please select guitar age"),
  services: z.array(z.string()).min(1, "Please select at least one service"),
  issueDescription: z
    .string()
    .min(10, "Please provide more details about the issues"),
  urgency: z.string().min(1, "Please select urgency level"),
  preferredContact: z.string().min(1, "Please select preferred contact method"),
  additionalInfo: z.string().optional(),
});

type QuoteFormData = z.infer<typeof quoteFormSchema>;

const Quote = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      guitarType: "",
      guitarBrand: "",
      guitarModel: "",
      guitarAge: "",
      services: [],
      issueDescription: "",
      urgency: "",
      preferredContact: "",
      additionalInfo: "",
    },
  });

  const serviceOptions = [
    {
      id: "setup",
      label: "Setup & Maintenance",
      description: "Action adjustment, intonation, string change",
    },
    {
      id: "fretwork",
      label: "Fret Work",
      description: "Fret leveling, crowning, replacement",
    },
    {
      id: "neckrepair",
      label: "Neck Repair",
      description: "Neck reset, crack repair, headstock breaks",
    },
    {
      id: "bridgework",
      label: "Bridge Work",
      description: "Bridge regluing, saddle replacement",
    },
    {
      id: "electronics",
      label: "Electronics",
      description: "Pickup work, wiring, switch replacement",
    },
    {
      id: "hardware",
      label: "Hardware Upgrade",
      description: "Tuners, bridge, nut upgrades",
    },
    {
      id: "refinish",
      label: "Refinishing",
      description: "Custom paint, restoration work",
    },
    {
      id: "other",
      label: "Other",
      description: "Custom work or unlisted services",
    },
  ];

  const estimatedPrices = [
    { service: "Basic Setup", price: "$65", duration: "Same day" },
    { service: "Premium Setup", price: "$95", duration: "1-2 days" },
    { service: "Fret Work", price: "From $80", duration: "2-3 days" },
    { service: "Neck Repair", price: "From $150", duration: "5-7 days" },
    { service: "Electronics Work", price: "From $100", duration: "2-4 days" },
    { service: "Hardware Upgrades", price: "From $80", duration: "1-3 days" },
  ];

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Quote request:", data);

    toast({
      title: "Quote Request Submitted!",
      description:
        "We'll review your request and get back to you within 24 hours.",
    });

    form.reset();
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Free Quote Request
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Get Your <span className="text-blue-600">Free Quote</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              Tell us about your guitar and what services you need. We'll
              provide a detailed quote with transparent pricing and estimated
              turnaround time.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Quote Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  Quote Request Form
                </CardTitle>
                <CardDescription>
                  Please fill out all required fields to get an accurate quote
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    {/* Contact Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">
                        Contact Information
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name *</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Your full name"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email *</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="your@email.com"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number *</FormLabel>
                            <FormControl>
                              <Input placeholder="(555) 123-4567" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Guitar Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">
                        Guitar Information
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="guitarType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Guitar Type *</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select guitar type" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="acoustic">
                                    Acoustic Guitar
                                  </SelectItem>
                                  <SelectItem value="electric">
                                    Electric Guitar
                                  </SelectItem>
                                  <SelectItem value="classical">
                                    Classical Guitar
                                  </SelectItem>
                                  <SelectItem value="bass">
                                    Bass Guitar
                                  </SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="guitarAge"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Guitar Age *</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select age range" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="new">
                                    Less than 1 year
                                  </SelectItem>
                                  <SelectItem value="recent">
                                    1-5 years
                                  </SelectItem>
                                  <SelectItem value="mature">
                                    5-15 years
                                  </SelectItem>
                                  <SelectItem value="vintage">
                                    15+ years
                                  </SelectItem>
                                  <SelectItem value="unknown">
                                    Unknown
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="guitarBrand"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Brand *</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="e.g., Fender, Gibson, Martin"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="guitarModel"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Model *</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="e.g., Stratocaster, Les Paul, D-28"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    {/* Services Needed */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Services Needed</h3>
                      <FormField
                        control={form.control}
                        name="services"
                        render={() => (
                          <FormItem>
                            <FormLabel>
                              Select all services you need *
                            </FormLabel>
                            <div className="grid md:grid-cols-2 gap-3">
                              {serviceOptions.map((service) => (
                                <FormField
                                  key={service.id}
                                  control={form.control}
                                  name="services"
                                  render={({ field }) => {
                                    return (
                                      <FormItem
                                        key={service.id}
                                        className="flex flex-row items-start space-x-3 space-y-0 border rounded-lg p-3"
                                      >
                                        <FormControl>
                                          <Checkbox
                                            checked={field.value?.includes(
                                              service.id,
                                            )}
                                            onCheckedChange={(checked) => {
                                              return checked
                                                ? field.onChange([
                                                    ...field.value,
                                                    service.id,
                                                  ])
                                                : field.onChange(
                                                    field.value?.filter(
                                                      (value) =>
                                                        value !== service.id,
                                                    ),
                                                  );
                                            }}
                                          />
                                        </FormControl>
                                        <div className="space-y-1 leading-none">
                                          <FormLabel className="text-sm font-medium">
                                            {service.label}
                                          </FormLabel>
                                          <FormDescription className="text-xs text-slate-500">
                                            {service.description}
                                          </FormDescription>
                                        </div>
                                      </FormItem>
                                    );
                                  }}
                                />
                              ))}
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Issue Description */}
                    <FormField
                      control={form.control}
                      name="issueDescription"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Describe the Issues *</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Please describe any problems with your guitar, what work you need done, and any specific concerns..."
                              className="min-h-[100px]"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            The more details you provide, the more accurate our
                            quote will be
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Preferences */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Preferences</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="urgency"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Urgency Level *</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select urgency" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="standard">
                                    Standard (5-7 days)
                                  </SelectItem>
                                  <SelectItem value="priority">
                                    Priority (2-3 days)
                                  </SelectItem>
                                  <SelectItem value="rush">
                                    Rush (24-48 hours)
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="preferredContact"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Preferred Contact Method *</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="How should we contact you?" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="email">Email</SelectItem>
                                  <SelectItem value="phone">
                                    Phone Call
                                  </SelectItem>
                                  <SelectItem value="text">
                                    Text Message
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    {/* Additional Information */}
                    <FormField
                      control={form.control}
                      name="additionalInfo"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Additional Information</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Any other details, special requests, or questions..."
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            Optional: Let us know about any special
                            considerations or questions
                          </FormDescription>
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Request Quote"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Information */}
          <div className="space-y-6">
            {/* Estimated Pricing */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  Estimated Pricing
                </CardTitle>
                <CardDescription>
                  Starting prices for common services
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {estimatedPrices.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-2 border-b last:border-b-0"
                  >
                    <div>
                      <p className="font-medium text-sm">{item.service}</p>
                      <p className="text-xs text-slate-500 flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {item.duration}
                      </p>
                    </div>
                    <span className="font-semibold text-green-700">
                      {item.price}
                    </span>
                  </div>
                ))}
                <p className="text-xs text-slate-500 mt-4">
                  * Final pricing may vary based on specific requirements and
                  guitar condition
                </p>
              </CardContent>
            </Card>

            {/* What Happens Next */}
            <Card>
              <CardHeader>
                <CardTitle>What Happens Next?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-blue-600">1</span>
                  </div>
                  <div>
                    <p className="font-medium text-sm">Quote Review</p>
                    <p className="text-xs text-slate-600">
                      We'll review your request within 24 hours
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-blue-600">2</span>
                  </div>
                  <div>
                    <p className="font-medium text-sm">Detailed Quote</p>
                    <p className="text-xs text-slate-600">
                      Receive a detailed quote with pricing breakdown
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-blue-600">3</span>
                  </div>
                  <div>
                    <p className="font-medium text-sm">Book Service</p>
                    <p className="text-xs text-slate-600">
                      Schedule your appointment when ready
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
                <CardDescription>
                  Contact us directly if you have questions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-slate-500" />
                  <span className="text-sm">(555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-slate-500" />
                  <span className="text-sm">info@stringcraftservices.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageSquare className="h-4 w-4 text-slate-500" />
                  <Link
                    to="/appointment"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Book appointment directly
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container mx-auto px-4 text-center text-slate-600">
          <p>&copy; 2024 StringCraft Services. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Quote;
