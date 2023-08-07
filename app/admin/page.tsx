"use client";

import { useContext } from "react";
import { AdminStore } from "@utils/admin-store";

const AdminSlug = () => {
  const { sideActiveData } = useContext(AdminStore);
  return <div className="p-7 w-full h-full">{sideActiveData.component}</div>;
};

export default AdminSlug;
