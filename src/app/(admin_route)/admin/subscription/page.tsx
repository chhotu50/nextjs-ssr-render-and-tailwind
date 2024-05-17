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
import Forms from "./Forms";
import { Button } from "@/components/ui/button";
const lists = [{ title: "Subscription", url: "" }];
const Subscriptions =[
    {
        "subscription_id": "6DFB4DAD-B77D-4178-B913-8000A53DF6C6",
        "type": "Individual",
        "name": "Free",
        "token": 50,
        "monthly_price": 0,
        "yearly_Price": 0,
        "supported_csv_row": 50,
        "description": "Free Plan",
        "active": true,
        "parent_subscription_id": null
    },
    {
        "subscription_id": "4BE10167-D343-4913-AA7D-6BF22F967164",
        "type": "Individual",
        "name": "Silver",
        "token": 450,
        "monthly_price": 59,
        "yearly_Price": 59,
        "supported_csv_row": 100,
        "description": "Individual silver plan",
        "active": true,
        "parent_subscription_id": null
    },
    {
        "subscription_id": "68CD0942-AAD6-4DC3-BE3C-225E62C626CE",
        "type": "Individual",
        "name": "Gold",
        "token": 1000,
        "monthly_price": 99,
        "yearly_Price": 99,
        "supported_csv_row": 200,
        "description": "Individual gold plan",
        "active": true,
        "parent_subscription_id": null
    },
    {
        "subscription_id": "F8052ED2-FEF4-40A9-A451-8CD9EF883984",
        "type": "Individual",
        "name": "Platinum",
        "token": 1600,
        "monthly_price": 139,
        "yearly_Price": 139,
        "supported_csv_row": 500,
        "description": "Individual platinum plan",
        "active": true,
        "parent_subscription_id": null
    },
    {
        "subscription_id": "084BEBA5-FEB3-43C0-9A25-0C13BA8B5C14",
        "type": "Team",
        "name": "Silver",
        "token": 6000,
        "monthly_price": 479,
        "yearly_Price": 479,
        "supported_csv_row": 500,
        "description": "Team silver plan",
        "active": true,
        "parent_subscription_id": null
    },
    {
        "subscription_id": "2606BDE0-1C83-4E89-A4DB-95B33247A50C",
        "type": "Team",
        "name": "Gold",
        "token": 11000,
        "monthly_price": 750,
        "yearly_Price": 750,
        "supported_csv_row": 1000,
        "description": "Team gold plan",
        "active": true,
        "parent_subscription_id": null
    },
    {
        "subscription_id": "08EFEF57-686F-4AB1-B143-51964809B679",
        "type": "Team",
        "name": "Platinum",
        "token": 25000,
        "monthly_price": 1500,
        "yearly_Price": 1500,
        "supported_csv_row": 2000,
        "description": "Team platinum plan",
        "active": true,
        "parent_subscription_id": null
    }
]
const SubscriptionPage = () => {
  return (
    <div>
      <Breadcrumb lists={lists} title="Subscriptions" />
      <div className="mt-5 p-5 bg-white shadow-lg rounded">
        <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="w-full">
            <h4 className="mb-10 scroll-m-20 text-xl font-semibold tracking-tight text-gray-600 ">
              Create Subscription
            </h4>
            <form>
              <Forms />
              <Button type="button">Submit</Button>
            </form>
          </div>
          <div className="w-full">
            <h4 className="mb-10 scroll-m-20 text-xl font-semibold tracking-tight text-gray-600">
              Subscription Lists
            </h4>
            <Table>
              <TableCaption>A list of your recent invoices.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Title</TableHead>
                  <TableHead>Product Type</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">INV001</TableCell>
                  <TableCell>Paid</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPage;
