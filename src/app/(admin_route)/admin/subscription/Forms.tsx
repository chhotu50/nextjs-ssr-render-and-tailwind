import CustomEditor from "@/components/custom-editor";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
const Forms = () => {
  return (

      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <Label>Title</Label>
          <Input name="name" placeholder="Type title"/>
        </div>
        <div>
          <Label>Description</Label>
          <Input name="description" placeholder="Type description"/>
        </div>
        <div>
          <Label>Monthly price</Label>
          <Input name="monthly_price" placeholder="Monthly price"/>
        </div>
        
        <div>
          <Label>token</Label>
          <Input name="token" placeholder="Type token"/>
        </div>
        <div>
          <Label>Yearly Price</Label>
          <Input name="yearly_Price" placeholder="Type yearly price"/>
        </div>
        <div>
          <Label>Monthly price</Label>
          <Input name="monthly_price" placeholder="Type monthly price"/>
        </div>
        <div className="lg:col-span-2"> 
          <Label>Description</Label>
          <CustomEditor/> 
        </div>
        
      </div>
  );
};

export default Forms;
