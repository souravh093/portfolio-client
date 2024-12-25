import { MoveRight } from "lucide-react";
import Link from "next/link";

const ViewDetails = ({ id }: { id: string }) => {
  return (
    <div className="w-48">
      <div className="flex items-center gap-2 bg-white rounded-3xl pl-3">
        <span className="bg-secondary my-2 rounded-full p-2 text-white">
          <MoveRight />
        </span>
        <Link
          className="bg-primary rounded-3xl py-4 px-5"
          href={`/all-projects/${id}`}
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ViewDetails;
