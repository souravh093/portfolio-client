import DescriptionView from "@/components/shared/DescriptionView";
import { getService } from "@/services/service";
import Image from "next/image";

const ServiceDetails = async ({ params }: { params: { id: string } }) => {
  const serviceData = await getService(params.id);

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
        <h1 className="text-5xl font-bold my-4 text-secondary">{serviceData.data.name}</h1>

        <DescriptionView content={serviceData.data.description} details />
      </div>
    </div>
  );
};

export default ServiceDetails;
