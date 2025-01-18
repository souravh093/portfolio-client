import { Loader2 } from "lucide-react";
import React from "react";

const loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background">
      <Loader2 className="h-16 w-16 animate-spin text-primary" />
    </div>
  );
};

export default loading;
