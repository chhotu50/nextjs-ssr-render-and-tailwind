'use server';
import { Metadata, ResolvingMetadata } from "next";
import React, { FC, Suspense } from "react";
type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;
  const blog: any = await getData(id);
  return {
    title: blog?.title,
    description: blog?.title,
  };
}

const getData = async (id: any) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
      { cache: "force-cache" }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return [];
  }
};
const ToDoDetails: FC<any> = async ({ params }) => {
  const data = await getData(params?.id);
  return (
    <div>
      <Suspense fallback={<p>Loading feed...</p>}>
        <p>{data?.id}</p>
        <p>{data?.title}</p>
      </Suspense>
    </div>
  );
};

export default ToDoDetails;
