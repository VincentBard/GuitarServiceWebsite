import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useNavigate } from "react-router-dom";
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
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

const appointmentSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  guitarType: z.string().min(1, "Please select guitar type"),
  brand: z.string().min(1, "Brand is required"),
  issue: z.string().min(10, "Please describe the issue in detail"),
  preferredDate: z.date({
    required_error: "Please select a preferred date",
  }),
  preferredTime: z.string().min(1, "Please select a preferred time"),
  additionalNotes: z.string().optional(),
});

type AppointmentFormData = z.infer<typeof appointmentSchema>;

const AppointmentForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentSchema),
  });

  const onSubmit = async (data: AppointmentFormData) => {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Appointment request:", data);

    // Navigate to thank you page
    navigate("/thank-you");
  };

  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ];

  return (
    <Card className="max-w-2xl mx-auto border-guitar-brown-200">
      <CardHeader className="text-center">
        <CardTitle className="font-display text-2xl text-guitar-brown-900">
          Book Your Appointment
        </CardTitle>
        <p className="text-guitar-brown-600">
          Schedule a consultation for your guitar repair
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

          <div>
            <Label htmlFor="brand">Guitar Brand & Model</Label>
            <Input
              id="brand"
              {...register("brand")}
              placeholder="e.g., Fender Stratocaster, Gibson Les Paul"
              className={errors.brand ? "border-red-500" : ""}
            />
            {errors.brand && (
              <p className="text-red-500 text-sm mt-1">
                {errors.brand.message}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="issue">Describe the Issue</Label>
            <Textarea
              id="issue"
              {...register("issue")}
              placeholder="Please describe what's wrong with your guitar..."
              className={`min-h-[100px] ${errors.issue ? "border-red-500" : ""}`}
            />
            {errors.issue && (
              <p className="text-red-500 text-sm mt-1">
                {errors.issue.message}
              </p>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label>Preferred Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !selectedDate && "text-muted-foreground",
                      errors.preferredDate && "border-red-500",
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={(date) => {
                      setSelectedDate(date);
                      if (date) setValue("preferredDate", date);
                    }}
                    disabled={(date) =>
                      date < new Date() || date.getDay() === 0
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              {errors.preferredDate && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.preferredDate.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="preferredTime">Preferred Time</Label>
              <Select
                onValueChange={(value) => setValue("preferredTime", value)}
              >
                <SelectTrigger
                  className={errors.preferredTime ? "border-red-500" : ""}
                >
                  <SelectValue placeholder="Select time slot" />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((time) => (
                    <SelectItem key={time} value={time}>
                      {time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.preferredTime && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.preferredTime.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <Label htmlFor="additionalNotes">Additional Notes (Optional)</Label>
            <Textarea
              id="additionalNotes"
              {...register("additionalNotes")}
              placeholder="Any additional information you'd like us to know..."
              className="min-h-[80px]"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-guitar-gold-500 hover:bg-guitar-gold-600 text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Booking Appointment..." : "Book Appointment"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default AppointmentForm;
