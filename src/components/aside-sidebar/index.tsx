import React from "react";
import { Icon } from "../icon";
import Link from "next/link";
import { RoutesEnum } from "@/lib/enums/routes.enum";
const LILists = [
  { title: "Dashboard", icon: "HouseFill", url: RoutesEnum.DASHBOARD, subLink: [] },
  {
    title: "Campaigns",
    icon: "CartFill",
    url: "/",
    subLink: [
      { title: "All Campaigns", url: RoutesEnum.PRODUCT },
    ],
  },
  { title: "Users", icon: "PeopleFill", url: RoutesEnum.USER, subLink: [] },
  { title: "Subscription", icon: "ChatLeftTextFill", url: RoutesEnum.SUBSCRIPTION, subLink: [] },
  // { title: "Subject", icon: "PeopleFill", url: "/", subLink: [] },
  // { title: "Attendence", icon: "CardChecklist", url: "/", subLink: [] },
  // { title: "Hostel", icon: "PeopleFill", url: "/", subLink: [] },
  // { title: "Notice", icon: "ChatLeftTextFill", url: "/", subLink: [] },
  // { title: "Transport", icon: "BusFrontFill", url: "/", subLink: [] },
  // { title: "Logout", icon: "BoxArrowInRight", url: "/", subLink: [] },
];
const AsideSidebar = () => {
  return (
    <aside
      id="logo-sidebar"
      className="fixed mt-10 top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <ul className="space-y-2 font-medium mb-16 mt-3 text-sm">
          {LILists.map((item: any, index: number) => {
            return (
              <li key={index}>
                {item.subLink && item.subLink.length !== 0 ? (
                  <>
                    <button
                      type="button"
                      className="child-dropdown flex items-center w-full p-2 text-sm text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      <Icon
                        iconName={item.icon}
                        size={96}
                        className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      />

                      <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                        {item.title}
                      </span>
                      <Icon
                        iconName="ChevronDown"
                        className="w-3 h-3 font-bold"
                      />
                    </button>
                    <ul className="hidden py-2 space-y-2">
                      {item.subLink.map(
                        (item_subLink: any, index_subLink: number) => {
                          return (
                            <li key={index_subLink}>
                              <Link
                                href={item_subLink.url}
                                className="flex items-center w-full p-2 text-sm text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                              >
                                {item_subLink.title}
                              </Link>
                              {/* <a
                                href="#"
                                className="flex items-center w-full p-2 text-sm text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                              >
                                {item_subLink.title}
                              </a> */}
                            </li>
                          );
                        }
                      )}
                    </ul>
                  </>
                ) : (
                  <Link
                    href={item.url}
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <Icon
                      iconName={item.icon}
                      size={96}
                      className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    />
                    <span className="ms-3">{item.title}</span>
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default AsideSidebar;
