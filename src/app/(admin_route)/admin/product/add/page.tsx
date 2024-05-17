import Breadcrumb from "@/components/breadcrumb";

import React from "react";
import Forms from "../Forms";
import { RoutesEnum } from "@/lib/enums/routes.enum";
import { Button } from "@/components/ui/button";
const lists = [
  { title: "Products", url: RoutesEnum.PRODUCT },
  { title: "Create Product", url: "" },
];

const AddProduct = () => {
  return (
    <div>
      <Breadcrumb lists={lists} title="Product" />
      <div className="mt-5 p-5 bg-white shadow-lg rounded">
        <h1 className="mb-4 font-bold leading-none tracking-tight text-gray-600 md:text-3xl lg:text-2xl dark:text-gray-600">
          Add New Product
        </h1>
        <form>
          <Forms/>
          <Button className="text-white bg-blue-700 hover:bg-blue-800">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
