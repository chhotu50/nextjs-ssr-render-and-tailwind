import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
const getData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    return data;
  } catch (error) {
    return [];
  }
};
export default async function Home() {
  const data = await getData();
  console.log(data);

  const renderData = () => {
    return (
      data &&
      data.map((item: any, index: number) => (
        <TableRow key={index}>
          <TableCell className="font-medium">{item?.id}</TableCell>
          <TableCell>{item?.userId}</TableCell>
          <TableCell><Link href={`/${item?.id}`}>{item?.title}</Link></TableCell>
        </TableRow>
      ))
    );
  };
  return (
    <main>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>User ID</TableHead>
            <TableHead>Title</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
        {renderData()}
        </TableBody>
      </Table>
    </main>
  );
}
