/* eslint-disable react/no-unescaped-entities */
import { Suspense } from "react";
import DescriptionView from "@/components/shared/DescriptionView";
import envConfig from "@/config/envConfig";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

async function getServiceData(id: string) {
  try {
    const response = await fetch(`${envConfig.baseApi}/services/${id}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch service data");
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching service data:", error);
    throw error;
  }
}

function ServiceDetailsSkeleton() {
  return (
    <div className="container mx-auto px-4 py-8 animate-pulse">
      <div className="flex items-center gap-4 mb-8">
        <div className="h-10 w-24 bg-gray-200 rounded"></div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="w-32 h-32 rounded-full bg-gray-200"></div>
        <div className="space-y-4 flex-1">
          <div className="h-12 bg-gray-200 w-3/4 rounded-lg"></div>
          <div className="h-4 bg-gray-200 w-full rounded"></div>
          <div className="h-4 bg-gray-200 w-full rounded"></div>
          <div className="h-4 bg-gray-200 w-2/3 rounded"></div>
        </div>
      </div>
    </div>
  );
}

function ServiceFeatures() {
  const features = [
    "Customized solutions tailored to your specific needs",
    "Ongoing support and maintenance",
    "Fast turnaround times",
    "Industry best practices and standards",
    "Transparent communication throughout the process",
    "Competitive pricing with no hidden fees",
  ];

  return (
    <div className="bg-gray-50 rounded-2xl p-6 md:p-8 mt-10">
      <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-gray-800">
        <CheckCircle2 className="h-5 w-5 text-secondary" />
        What's Included
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="bg-secondary/10 p-1 rounded-full mt-0.5">
              <CheckCircle2 className="h-4 w-4 text-secondary" />
            </div>
            <span className="text-gray-700">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ServiceProcess() {
  const steps = [
    {
      title: "Initial Consultation",
      description:
        "We'll discuss your requirements and goals to understand your needs.",
    },
    {
      title: "Planning & Strategy",
      description:
        "We'll create a detailed plan and strategy tailored to your project.",
    },
    {
      title: "Implementation",
      description:
        "Our team will execute the plan with precision and attention to detail.",
    },
    {
      title: "Testing & Review",
      description:
        "We'll thoroughly test and review the work to ensure quality.",
    },
    {
      title: "Delivery & Support",
      description:
        "We'll deliver the final product and provide ongoing support as needed.",
    },
  ];

  return (
    <div className="mt-10">
      <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-gray-800">
        <Layers className="h-5 w-5 text-secondary" />
        Our Process
      </h3>

      <div className="space-y-6">
        {steps.map((step, index) => (
          <div key={index} className="relative pl-12">
            {index < steps.length - 1 && (
              <div className="absolute left-5 top-8 h-full w-0.5 bg-gradient-to-b from-secondary to-secondary/20"></div>
            )}
            <div className="absolute left-0 top-0 h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-bold">
              {index + 1}
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                {step.title}
              </h4>
              <p className="text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

async function ServiceDetailsContent({ id }: { id: string }) {
  const serviceData = await getServiceData(id);
  const service = serviceData.data;

  if (!service) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="bg-red-50 p-8 rounded-xl">
          <h2 className="text-2xl font-bold text-red-600 mb-2">
            Service Not Found
          </h2>
          <p className="text-gray-600 mb-6">
            The service you're looking for doesn't exist or has been removed.
          </p>
          <Link href="/all-services">
            <Button>Back to Services</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link
          href="/all-services"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-secondary transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Services</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        <div className="md:col-span-1">
          <div className="sticky top-8">
            <div className="bg-gradient-to-br from-secondary to-secondary/90 p-8 rounded-2xl text-center shadow-lg">
              <div className="bg-white/20 p-6 rounded-full inline-flex items-center justify-center mb-6 backdrop-blur-sm">
                <Image
                  src={service.logo || "/placeholder.svg"}
                  alt={service.name}
                  width={100}
                  height={100}
                  className="w-24 h-24 object-contain"
                />
              </div>

              <h2 className="text-2xl font-bold text-white mb-4">
                {service.name}
              </h2>
            </div>
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              {service.name}
            </h1>

            <div className="prose prose-lg max-w-none">
              <DescriptionView
                content={service.description}
                details={true}
                className="text-gray-700"
              />
            </div>

            <ServiceFeatures />

            <ServiceProcess />

            <div className="mt-10 bg-secondary/5 rounded-2xl p-6 md:p-8 border border-secondary/10">
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Ready to get started?
              </h3>
              <p className="text-gray-600 mb-6">
                Contact me today to discuss how I can help you with your{" "}
                {service.name.toLowerCase()} needs.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href={"/#contact"}>
                  <Button className="bg-secondary hover:bg-secondary/90">
                    Contact Me
                  </Button>
                </Link>
                <Link href={"/all-services"}>
                  <Button
                    variant="outline"
                    className="border-secondary text-secondary hover:bg-secondary/10"
                  >
                    View All Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default async function ServiceDetails({ params }: PageProps) {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <Suspense fallback={<ServiceDetailsSkeleton />}>
        <ServiceDetailsContent id={id} />
      </Suspense>
    </div>
  );
}
