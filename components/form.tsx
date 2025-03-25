"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"

const formSchema = z.object({
  teamName: z.string().min(2, { message: "Team name must be at least 2 characters." }),

  // Team Leader
  leaderName: z.string().min(2, { message: "Team leader name is required." }),
  leaderEmail: z.string()
    .email({ message: "Please enter a valid email address." })
    .regex(/^[a-zA-Z0-9._%+-]+@atharvacoe\.ac\.in$/, {
      message: "Use Atharva Email Id"
    }),
  leaderBranch: z.string().min(1, { message: "Please select a branch." }),
  leaderYear: z.string().min(1, { message: "Please select a year." }),
  leaderContact: z.string().min(10, { message: "Please enter a valid contact number." }),
  leaderHackerRankId: z.string().min(1, { message: "HackerRank ID is required." }),

  // Member 2 (optional but if name is provided, email is required)
  member2Name: z.string().optional(),
  member2Email: z.union([
    z.string()
      .email({ message: "Please enter a valid email address." })
      .regex(/^[a-zA-Z0-9._%+-]+@atharvacoe\.ac\.in$/, {
        message: "Use Atharva Email Id"
      }),
    z.literal("")
  ]).optional(),
  member2Branch: z.string().optional(),
  member2Year: z.string().optional(),

  // Member 3 (optional but if name is provided, email is required)
  member3Name: z.string().optional(),
  member3Email: z.union([
    z.string()
      .email({ message: "Please enter a valid email address." })
      .regex(/^[a-zA-Z0-9._%+-]+@atharvacoe\.ac\.in$/, {
        message: "Use Atharva Email Id"
      }),
    z.literal("")
  ]).optional(),
  member3Branch: z.string().optional(),
  member3Year: z.string().optional(),
}).refine(
  (data) => {
    // If member2 name is provided, email must be provided
    if (data.member2Name && !data.member2Email) return false;
    // If member2 email is provided, name must be provided
    if (!data.member2Name && data.member2Email) return false;

    // Same for member 3
    if (data.member3Name && !data.member3Email) return false;
    if (!data.member3Name && data.member3Email) return false;

    return true;
  },
  {
    message: "Both name and email must be provided for team members",
    path: ["member2Email"],
  }
);

export default function TeamRegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      teamName: "",
      leaderName: "",
      leaderEmail: "",
      leaderBranch: "",
      leaderYear: "",
      leaderContact: "",
      leaderHackerRankId: "",
      member2Name: "",
      member2Email: "",
      member2Branch: "",
      member2Year: "",
      member3Name: "",
      member3Email: "",
      member3Branch: "",
      member3Year: "",
    },
  });

  // Replace your onSubmit function with this updated version
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    // Create a hidden form and submit it
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = process.env.NEXT_PUBLIC_PAGECLIP_URL || '';
    form.style.display = 'none';

    // Add all form fields
    Object.entries(values).forEach(([key, value]) => {
      if (value) { // Only add non-empty values
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = value.toString();
        form.appendChild(input);
      }
    });

    // Submit the form
    document.body.appendChild(form);
    form.submit();

    // No need to set isSubmitting to false as we're navigating away
  }

  console.log("hello", process.env.NEXT_PUBLIC_PAGECLIP_URL)

  const branches = [
    { value: "CMPN", label: "CMPN" },
    { value: "INFT", label: "INFT" },
    { value: "ECS", label: "ECS" },
    { value: "EXTC", label: "EXTC" },
    { value: "ELEC", label: "ELEC" },
    { value: "OTHER", label: "Other" },
  ];

  const years = [
    { value: "SE", label: "SE" },
    { value: "TE", label: "TE" },
    { value: "BE", label: "BE" },
  ];

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Matrix-like glitch effect */}
      <div className="absolute inset-0 bg-black border border-green-500/30 rounded-lg overflow-hidden z-0">
        <div className="absolute inset-0 opacity-10">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-green-500 font-mono text-xs"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.5,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            >
              {Math.random() > 0.5 ? "1" : "0"}
            </div>
          ))}
        </div>
      </div>

      <Card className="relative z-10 bg-black/80 border-green-900 shadow-[0_0_15px_rgba(0,255,0,0.15)]">
        <CardHeader className="border-b border-green-900/50">
          <CardTitle className="text-3xl font-bold text-green-500">Team Registration</CardTitle>
          <CardDescription className="text-green-400 font-mono">
            Enter the Matrix. Join the AlgoRush competition.
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Team Information */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-green-500 border-b border-green-900/50 pb-2">Team Information</h3>

                <FormField
                  control={form.control}
                  name="teamName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-green-400">
                        Team Name <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your team name"
                          {...field}
                          className="bg-green-900/20 placeholder:text-green-100 border-green-900 text-green-100 focus:ring-green-500 focus:border-green-500"
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />
              </div>

              {/* Team Leader Information */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-green-500 border-b border-green-900/50 pb-2">Team Leader Information</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="leaderName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-green-400">
                          Name <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter team leader's name"
                            {...field}
                            className="bg-green-900/20 placeholder:text-green-100 border-green-900 text-green-100 focus:ring-green-500 focus:border-green-500"
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="leaderEmail"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-green-400">
                          Email <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter team leader's email"
                            type="email"
                            {...field}
                            className="bg-green-900/20 border-green-900 placeholder:text-green-100 text-green-100 focus:ring-green-500 focus:border-green-500"
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="leaderBranch"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-green-400">
                          Branch <span className="text-red-500">*</span>
                        </FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-green-900/20 border-green-900 text-green-100 focus:ring-green-500">
                              <SelectValue placeholder="Select branch" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-black border-green-900">
                            {branches.map((branch) => (
                              <SelectItem key={branch.value} value={branch.value} className="text-green-400 focus:bg-green-900/50 focus:text-green-100">
                                {branch.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="leaderYear"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-green-400">
                          Year <span className="text-red-500">*</span>
                        </FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-green-900/20 border-green-900 text-green-100 focus:ring-green-500">
                              <SelectValue placeholder="Select year" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-black border-green-900">
                            {years.map((year) => (
                              <SelectItem key={year.value} value={year.value} className="text-green-400 focus:bg-green-900/50 focus:text-green-100">
                                {year.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="leaderContact"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-green-400">
                          Contact Number <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter contact number"
                            {...field}
                            className="bg-green-900/20 placeholder:text-green-100 border-green-900 text-green-100 focus:ring-green-500 focus:border-green-500"
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="leaderHackerRankId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-green-400">
                          HackerRank ID <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter HackerRank ID"
                            {...field}
                            className="bg-green-900/20 placeholder:text-green-100 border-green-900 text-green-100 focus:ring-green-500 focus:border-green-500"
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Member 2 Information */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-green-500 border-b border-green-900/50 pb-2">Member 2 Information</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="member2Name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-green-400">Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter member's name"
                            {...field}
                            className="bg-green-900/20 placeholder:text-green-100 border-green-900 text-green-100 focus:ring-green-500 focus:border-green-500"
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="member2Email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-green-400">Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter member's email"
                            type="email"
                            {...field}
                            className="bg-green-900/20 placeholder:text-green-100 border-green-900 text-green-100 focus:ring-green-500 focus:border-green-500"
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="member2Branch"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-green-400">Branch</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-green-900/20 border-green-900 text-green-100 focus:ring-green-500">
                              <SelectValue placeholder="Select branch" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-black border-green-900">
                            {branches.map((branch) => (
                              <SelectItem key={branch.value} value={branch.value} className="text-green-400 focus:bg-green-900/50 focus:text-green-100">
                                {branch.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="member2Year"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-green-400">Year</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-green-900/20 border-green-900 text-green-100 focus:ring-green-500">
                              <SelectValue placeholder="Select year" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-black border-green-900">
                            {years.map((year) => (
                              <SelectItem key={year.value} value={year.value} className="text-green-400 focus:bg-green-900/50 focus:text-green-100">
                                {year.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Member 3 Information */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-green-500 border-b border-green-900/50 pb-2">Member 3 Information</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="member3Name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-green-400">Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter member's name"
                            {...field}
                            className="bg-green-900/20 placeholder:text-green-100 border-green-900 text-green-100 focus:ring-green-500 focus:border-green-500"
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="member3Email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-green-400">Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter member's email"
                            type="email"
                            {...field}
                            className="bg-green-900/20 placeholder:text-green-100 border-green-900 text-green-100 focus:ring-green-500 focus:border-green-500"
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="member3Branch"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-green-400">Branch</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-green-900/20 border-green-900 text-green-100 focus:ring-green-500">
                              <SelectValue placeholder="Select branch" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-black border-green-900">
                            {branches.map((branch) => (
                              <SelectItem key={branch.value} value={branch.value} className="text-green-400 focus:bg-green-900/50 focus:text-green-100">
                                {branch.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="member3Year"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-green-400">Year</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-green-900/20 border-green-900 text-green-100 focus:ring-green-500">
                              <SelectValue placeholder="Select year" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-black border-green-900">
                            {years.map((year) => (
                              <SelectItem key={year.value} value={year.value} className="text-green-400 focus:bg-green-900/50 focus:text-green-100">
                                {year.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-green-900/50">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-600 hover:bg-green-700 text-black font-bold transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,0,0.5)]"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-b-transparent border-black"></span>
                      Processing...
                    </span>
                  ) : (
                    "ENTER THE MATRIX"
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="border-t border-green-900/50 text-green-400 text-sm font-mono">
          <p>All fields marked with <span className="text-red-500">*</span> are required</p>
        </CardFooter>
      </Card>
    </div>
  )
}
