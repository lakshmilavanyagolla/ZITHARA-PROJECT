import { ColumnDef } from "@tanstack/react-table";
import { Button } from "./ui/button";
import { ArrowUpDown } from "lucide-react";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type UserData = {
  id: string;
  name: string;
  age: string;
  phone: string;
  location: string;
  createdAT: string;
};

export const columns: ColumnDef<UserData>[] = [
  {
    accessorKey: "id",
    header: "Sn No",
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "age",
    header: "Age",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "location",
    header: "Location",
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          CreatedAt
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const time = row.original.createdAT;
      const dateObj = new Date(time);

      const year = dateObj.getUTCFullYear();
      const month = String(dateObj.getUTCMonth() + 1).padStart(2, "0"); // Adding 1 because getUTCMonth returns zero-based index
      const day = String(dateObj.getUTCDate()).padStart(2, "0");
      const hours = String(dateObj.getUTCHours()).padStart(2, "0");
      const minutes = String(dateObj.getUTCMinutes()).padStart(2, "0");
      const seconds = String(dateObj.getUTCSeconds()).padStart(2, "0");

      const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;


      console.log(time);
      return <div className="">{formattedDateTime}</div>;
    },
  },
];
