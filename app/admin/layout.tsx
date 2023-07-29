"use client";
import { AdminStore } from "@app/utils/admin-store";
import { menuConstants } from "@app/utils/constants";
import Image from "next/image";
import { Fragment, useContext } from "react";

const AdminLayoutSlug = ({ children }: { children: React.ReactNode }) => {
  const { sideActive, onMenuClick } = useContext(AdminStore);

  return (
    <section>
      <div className="flex">
        <div className="basis-1/5 w-full h-screen flex flex-col overflow-y-hidden">
          <div className="mx-auto py-2 flex justify-center items-start lg:items-center w-full bg-black">
            <div className="flex items-center space-x-4">
              <Image
                src="/assets/images/logo.svg"
                alt="logo"
                height={64}
                width={64}
              />
              <p className="text-white font-semibold">Admin</p>
            </div>
          </div>

          <div className="px-2 pt-2 flex-1 bg-gray-900 text-white h-[95%]">
            <ul className="flex flex-col space-y-4 h-full overflow-y-auto hide_scrollbar">
              {menuConstants.map((menu) => (
                <Fragment key={menu.name}>
                  {menu.id === 7 && (
                    <li>
                      <div className="w-full h-0.5 bg-gray-400/10 rounded-full" />
                    </li>
                  )}
                  <li
                    className={`${
                      menu.id === sideActive && "bg-primary-green"
                    } py-2 px-2 rounded-sm cursor-pointer`}
                    onClick={() => onMenuClick(menu.id)}
                  >
                    {menu.name}
                  </li>
                </Fragment>
              ))}
            </ul>
          </div>
        </div>

        {/* Content */}
        <div className="grow">{children}</div>
      </div>
    </section>
  );
};

export default AdminLayoutSlug;
