import { Icon } from "@/components/icon";

export default function Admin() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        <div className="flex items-center gap-5 justify-center h-32 rounded shadow-lg bg-white">
          <div className="card-color first-color p-7 rounded-full">
            <Icon iconName="People" size={35} color="#3cb878" />
          </div>
          <div className="flex flex-col justify-between p-4 leading-normal">
            <p className="font-normal mt-2 text-gray-300 dark:text-gray-400">
            Total Campaigns
            </p>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-400">
              2021
            </h5>
          </div>
        </div>
        <div className="flex items-center gap-5 justify-center h-32 rounded shadow-lg bg-white">
          <div className="card-color second-color p-7 rounded-full">
            <Icon iconName="People" size={35} color="#3f7afc" />
          </div>
          <div className="flex flex-col justify-between p-4 leading-normal">
            <p className="font-normal mt-2 text-gray-300 dark:text-gray-400">
              Total Blogs
            </p>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-600">
              2021
            </h5>
          </div>
        </div>
        <div className="flex items-center gap-5 justify-center h-32 rounded shadow-lg bg-white">
          <div className="card-color third-color p-7 rounded-full">
            <Icon iconName="People" size={35} color="#ffa001" />
          </div>
          <div className="flex flex-col justify-between p-4 leading-normal">
            <p className="font-normal mt-2 text-gray-300 dark:text-gray-400">
            Smart Tips Video
            </p>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-600">
              2021
            </h5>
          </div>
        </div>
        <div className="flex items-center gap-5 justify-center h-32 rounded shadow-lg bg-white">
          <div className="card-color forth-color p-7 rounded-full">
            <Icon iconName="Cash" size={35} color="#ff0000" />
          </div>
          <div className="flex flex-col justify-between p-4 leading-normal">
            <p className="font-normal mt-2 text-gray-300 dark:text-gray-400">
              Users
            </p>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-600">
              2021
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
