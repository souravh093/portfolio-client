"use client";

import { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Trash2 } from "lucide-react";
import { useDeleteExperience } from "@/hooks/experience.hook";

const DeleteExperience = ({ id }: { id: string }) => {
  const { mutate: deleteExperience, isPending } = useDeleteExperience();

  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = () => {
    deleteExperience(id);
    setIsOpen(false);
  };

  return (
    <div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger>
          <Button
            size={"icon"}
            className="bg-red-500 hover:bg-red-600 text-white"
          >
            <Trash2 />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
            <div className="flex justify-end space-x-2">
              <DialogClose asChild>
                <Button className="bg-gray-300 hover:bg-gray-200 text-gray-800">
                  Cancel
                </Button>
              </DialogClose>

              <Button
                onClick={handleDelete}
                disabled={isPending}
                className="bg-red-500 hover:bg-red-600 text-white"
              >
                {isPending ? "Deleting..." : "Delete"}
              </Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DeleteExperience;
