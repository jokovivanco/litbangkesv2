"use client";

import { useContext } from "react";
import { AdminStore } from "@app/utils/admin-store";

const AdminSlug = () => {
  const { sideActiveData } = useContext(AdminStore);
  return (
    <div className="p-7">
      {sideActiveData.component}
    </div>
  );
};

export default AdminSlug;
