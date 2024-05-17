import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
const Forms = () => {
  return (
    <div>
      <div className="grid gap-6 mb-6 md:grid-cols-3">
        <div>
          <Label>Title</Label>
          <Input />
        </div>
        <div>
          <Label>Product Type</Label>
          <Input />
        </div>
        <div>
          <Label>Category</Label>
          <Input />
        </div>
        <div>
          <Label>Price</Label>
          <Input />
        </div>
        <div>
          <Label>Image</Label>
          <Input type="file" />
        </div>
      </div>
    </div>
  );
};

export default Forms;
