import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Breadcrumb from "@/components/breadcrumb";
const lists = [{ title: "Users", url: "" }];
const UserPage = () => {
  return (
    <div>
      <Breadcrumb lists={lists} title="Users" />
      <div className="mt-5 p-5 bg-white shadow-lg rounded">
        <div className="flex justify-between">
          <h1 className="mb-4 font-bold leading-none tracking-tight text-gray-600 md:text-3xl lg:text-2xl dark:text-gray-600">
          Users Lists
          </h1>
        </div>
        <Table>
          <TableCaption>List of Users.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Name</TableHead>
              <TableHead>User Role</TableHead>
              <TableHead>Email</TableHead>
              <TableHead className="text-right">Phone</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Admin</TableCell>
              <TableCell>testing@gmail.com</TableCell>
              <TableCell className="text-right">7845963587</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Admin</TableCell>
              <TableCell>testing@gmail.com</TableCell>
              <TableCell className="text-right">7845963587</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Admin</TableCell>
              <TableCell>testing@gmail.com</TableCell>
              <TableCell className="text-right">7845963587</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default UserPage;
