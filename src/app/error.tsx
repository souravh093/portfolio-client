"use client";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <h2 className="text-2xl font-semibold mb-3">Something went wrong!</h2>
        <Button className="bg-red-500 hover:bg-red-600" onClick={() => reset()}>
          Try again
        </Button>
      </div>
    </div>
  );
}
