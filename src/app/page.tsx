import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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
          {data &&
            data.map((item: any, index: number) => {
              return (
                <TableRow key={index}>
                  <TableCell className="font-medium">{item?.id}</TableCell>
                  <TableCell>{item?.userId}</TableCell>
                  <TableCell>{item?.title}</TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </main>
  );
}
