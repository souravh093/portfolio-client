import DescriptionView from "@/components/shared/DescriptionView";
import envConfig from "@/config/envConfig";
import Image from "next/image";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

const ServiceDetails = async ({ params }: PageProps) => {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  const data = await fetch(`${envConfig.baseApi}/services/${id}`);

  const serviceData = await data.json();

  console.log(serviceData)

  return (
    <div className="min:h-screen">
      <div className="py-10 container mx-auto">
        <Image
          src={serviceData.data.logo}
          alt={serviceData.data.name}
          width={100}
          height={100}
          className="w-40 h-40 rounded-full object-contain bg-secondary"
        />
      </div>
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold my-4 text-secondary">
          {serviceData.data.name}
        </h1>

        <DescriptionView content={serviceData.data.description} details />
      </div>
    </div>
  );
};

export default ServiceDetails;
