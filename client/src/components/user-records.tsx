import { useEffect, useState } from "react";
import { columns } from "./column";
import { DataTable } from "./ui/data-table";
import axios from "axios";

const UserRecords = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "https://user-records-node.onrender.com/getUsers"
      );
      setData(res.data);
      console.log(res.data);
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <div className="pt-4 sm:px-2 md:p-0">
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default UserRecords;
