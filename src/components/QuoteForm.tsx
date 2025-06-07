import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const quoteSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  guitarType: z.string().min(1, "Please select guitar type"),
  brand: z.string().min(1, "Brand is required"),
  model: z.string().min(1, "Model is required"),
  issue: z.string().min(10, "Please describe the issue in detail"),
  urgency: z.string().min(1, "Please select urgency level"),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

const QuoteForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
  });

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Quote request:", data);

    toast({
      title: "Quote Request Submitted",
      description: "We'll get back to you within 24 hours with an estimate.",
    });

    reset();
    setIsSubmitting(false);
  };

  return (
    <Card className="max-w-2xl mx-auto border-guitar-brown-200">
      <CardHeader className="text-center">
        <CardTitle className="font-display text-2xl text-guitar-brown-900">
          Get Your Free Quote
        </CardTitle>
        <p className="text-guitar-brown-600">
          Tell us about your guitar and the issues you're experiencing
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                {...register("name")}
                className={errors.name ? "border-red-500" : ""}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                {...register("phone")}
                className={errors.phone ? "border-red-500" : ""}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="guitarType">Guitar Type</Label>
              <Select onValueChange={(value) => setValue("guitarType", value)}>
                <SelectTrigger
                  className={errors.guitarType ? "border-red-500" : ""}
                >
                  <SelectValue placeholder="Select guitar type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="acoustic">Acoustic</SelectItem>
                  <SelectItem value="electric">Electric</SelectItem>
                  <SelectItem value="classical">Classical</SelectItem>
                  <SelectItem value="bass">Bass</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              {errors.guitarType && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.guitarType.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="brand">Brand</Label>
              <Input
                id="brand"
                {...register("brand")}
                placeholder="e.g., Fender, Gibson, Martin"
                className={errors.brand ? "border-red-500" : ""}
              />
              {errors.brand && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.brand.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="model">Model</Label>
              <Input
                id="model"
                {...register("model")}
                placeholder="e.g., Stratocaster, Les Paul"
                className={errors.model ? "border-red-500" : ""}
              />
              {errors.model && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.model.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <Label htmlFor="issue">Describe the Issue</Label>
            <Textarea
              id="issue"
              {...register("issue")}
              placeholder="Please describe what's wrong with your guitar in detail..."
              className={`min-h-[120px] ${errors.issue ? "border-red-500" : ""}`}
            />
            {errors.issue && (
              <p className="text-red-500 text-sm mt-1">
                {errors.issue.message}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="urgency">Urgency Level</Label>
            <Select onValueChange={(value) => setValue("urgency", value)}>
              <SelectTrigger className={errors.urgency ? "border-red-500" : ""}>
                <SelectValue placeholder="How urgent is this repair?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Low - Within 2-3 weeks</SelectItem>
                <SelectItem value="medium">Medium - Within 1 week</SelectItem>
                <SelectItem value="high">High - Within 2-3 days</SelectItem>
                <SelectItem value="urgent">Urgent - ASAP</SelectItem>
              </SelectContent>
            </Select>
            {errors.urgency && (
              <p className="text-red-500 text-sm mt-1">
                {errors.urgency.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full bg-guitar-gold-500 hover:bg-guitar-gold-600 text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Quote Request"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default QuoteForm;
