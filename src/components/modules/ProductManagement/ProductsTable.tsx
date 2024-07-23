import { Key } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  Tooltip,
} from "@nextui-org/react";
import FTButton from "../../ui/FTButton";
import FTEdit from "../../../assets/icons/FTEdit";
import FTTrash from "../../../assets/icons/FTTrash";
import { useGetProductsQuery } from "../../../redux/api";
import { TProduct } from "../../../redux/features/Product";
import FTEmptyCard from "../../ui/FTEmptyCard";
import FTExternalLink from "../../../assets/icons/FTExternalLink";

const columns = [
  { name: "NAME", uid: "name" },
  { name: "PRICE", uid: "price" },
  { name: "CATEGORY", uid: "category" },
  { name: "AVAILABILITY", uid: "availability" },
  { name: "ACTIONS", uid: "actions" },
];

const ProductsTable = ({
  handleActions,
}: {
  handleActions: (
    action: "edit" | "delete" | "details",
    payload?: TProduct
  ) => void;
}) => {
  const { data, isLoading } = useGetProductsQuery({}) ?? {};

  const renderCell = (product: TProduct, columnKey: Key) => {
    // const cellValue = product[columnKey as keyof TProduct];

    switch (columnKey) {
      case "name":
        return <h6>{product?.name}</h6>;
      case "price":
        return <h6>{product?.price}</h6>;
      case "category":
        return <h6>{product?.category}</h6>;
      case "availability":
        return Number(product?.stockQuantity) > 0 ? (
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
            <Tooltip
              content="View Details"
              placement="top-end"
              radius="sm"
              classNames={{
                content: "!bg-indigo-600 !text-white !text-xs",
              }}
            >
              <FTButton
                isIconOnly
                size="md"
                color="primary"
                onClick={() => handleActions("details", product)}
              >
                <FTExternalLink
                  classNames={{ path: "stroke-white", svg: "h-4 w-4" }}
                />
              </FTButton>
            </Tooltip>

            <Tooltip
              content="Update Product"
              placement="top-end"
              radius="sm"
              classNames={{
                content: "!bg-green-500 !text-white !text-xs",
              }}
            >
              <FTButton
                isIconOnly
                size="md"
                color="primary"
                className="bg-green-500 data-[hover=true]:bg-green-500 data-[hover=true]:!ring-green-500 data-[pressed=true]:!bg-green-500"
                onClick={() => handleActions("edit", product)}
              >
                <FTEdit classNames={{ path: "stroke-white", svg: "h-4 w-4" }} />
              </FTButton>
            </Tooltip>

            <Tooltip
              content="Delete Product"
              placement="top-end"
              radius="sm"
              classNames={{
                content: "!bg-red-500 !text-white !text-xs",
              }}
            >
              <FTButton
                size="md"
                isIconOnly
                color="primary"
                className="bg-red-500 data-[hover=true]:bg-red-500 data-[hover=true]:!ring-red-500 data-[pressed=true]:!bg-red-500"
                onClick={() => handleActions("delete", product)}
              >
                <FTTrash
                  classNames={{ path: "stroke-white", svg: "h-5 w-5" }}
                />
              </FTButton>
            </Tooltip>
          </div>
        );
      default:
        return null;
    }
  };

  if (isLoading) {
    return <FTEmptyCard key="product-management" title="Product not found." />;
  }

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
      <TableBody items={data?.data}>
        {(item: TProduct) => (
          <TableRow key={item._id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default ProductsTable;
