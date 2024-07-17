import { Key, useCallback } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
} from "@nextui-org/react";
import FTButton from "../../ui/FTButton";
import FTEdit from "../../../assets/icons/FTEdit";
import FTTrash from "../../../assets/icons/FTTrash";

const columns = [
  { name: "NAME", uid: "name" },
  { name: "PRICE", uid: "price" },
  { name: "CATEGORY", uid: "category" },
  { name: "AVAILABILITY", uid: "availability" },
  { name: "ACTIONS", uid: "actions" },
];

const products = [
  {
    id: 1,
    name: "Tony Reichert",
    role: "CEO",
    team: "Management",
    status: "active",
    age: "29",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    email: "tony.reichert@example.com",
  },
  {
    id: 2,
    name: "Zoey Lang",
    role: "Technical Lead",
    team: "Development",
    status: "paused",
    age: "25",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    email: "zoey.lang@example.com",
  },
  {
    id: 3,
    name: "Jane Fisher",
    role: "Senior Developer",
    team: "Development",
    status: "active",
    age: "22",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    email: "jane.fisher@example.com",
  },
  {
    id: 4,
    name: "William Howard",
    role: "Community Manager",
    team: "Marketing",
    status: "vacation",
    age: "28",
    avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
    email: "william.howard@example.com",
  },
  {
    id: 5,
    name: "Kristen Copper",
    role: "Sales Manager",
    team: "Sales",
    status: "active",
    age: "24",
    avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
    email: "kristen.cooper@example.com",
  },
];

type Product = (typeof products)[0];

export default function ProductsTable() {
  const renderCell = useCallback((product: Product, columnKey: Key) => {
    const cellValue = product[columnKey as keyof Product];

    switch (columnKey) {
      case "name":
        return <h6>{product?.name}</h6>;
      case "price":
        return <h6>{product?.age}</h6>;
      case "category":
        return <h6>{product?.role}</h6>;
      case "availability":
        return Number(product?.age) > 25 ? (
          <Chip radius="sm" className={`bg-indigo-100 text-indigo-600`}>
            Available
          </Chip>
        ) : (
          <Chip radius="sm" className={`bg-red-100 text-red-500`}>
            Stock Out
          </Chip>
        );
      case "actions":
        return (
          <div className="flex items-center gap-2 justify-end">
            <FTButton
              isIconOnly
              size="md"
              color="primary"
              className="bg-green-500 data-[hover=true]:bg-green-500 data-[hover=true]:!ring-green-500 data-[pressed=true]:!bg-green-500"
            >
              <FTEdit classNames={{ path: "stroke-white", svg: "h-4 w-4" }} />
            </FTButton>
            <FTButton
              size="md"
              isIconOnly
              color="primary"
              className="bg-red-500 data-[hover=true]:bg-red-500 data-[hover=true]:!ring-red-500 data-[pressed=true]:!bg-red-500"
            >
              <FTTrash classNames={{ path: "stroke-white", svg: "h-5 w-5" }} />
            </FTButton>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <Table aria-label="products" isStriped>
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={
              column.uid === "actions"
                ? "end"
                : column.uid === "availability"
                ? "center"
                : "start"
            }
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={products}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
