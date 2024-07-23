import { useDisclosure } from "@nextui-org/react";
import FTSearch from "../../../../assets/icons/FTSearch";
import FTButton from "../../../ui/FTButton";
import FTModal from "../../../ui/FTModal";
import FTInput from "../../../ui/FTInput";
import FTListProductCard from "../../../ui/FTListProductCard";
import FTEmptyCard from "../../../ui/FTEmptyCard";
import { useGetProductsQuery } from "../../../../redux/api";
import { useState } from "react";
import { TProduct } from "../../../../redux/features/Product";
import { useNavigate } from "react-router-dom";
const SearchBox = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [search, setSearch] = useState<string>("");
  const { data, isLoading } =
    useGetProductsQuery({ search: search ? search : " " }) ?? {};

  const handleAction = (id: string) => {
    navigate(`/products/${id}`);
    onClose!();
    setSearch("");
  };

  return (
    <div className="">
      <FTButton
        onPress={onOpen}
        size="lg"
        color="secondary"
        isIconOnly
        className="group"
        disableRipple
      >
        <FTSearch
          classNames={{
            path: "stroke-slate-800 transition-all group-hover:stroke-indigo-600",
          }}
        />
      </FTButton>

      <FTModal
        actions={{ isOpen, onClose, onOpen }}
        cancelButton={{ status: true, label: "Close" }}
        name="search-modal"
        saveButton={{
          status: false,
        }}
        size="3xl"
        title="Search Products"
        key="search-modal"
      >
        <div>
          <FTInput
            onChange={(e) => setSearch(e?.target?.value)}
            startContent={
              <FTSearch classNames={{ path: "stroke-slate-500" }} />
            }
            labelPlacement="outside"
            placeholder="Write product name for search ..."
            fullWidth
            name="search-input"
            aria-labelledby="search-name"
          />

          <div className="my-8">
            {data?.data?.length && !isLoading ? (
              data?.data?.map((product: TProduct) => (
                <FTListProductCard
                  key={product?._id}
                  product={product}
                  actionButton={{
                    action: 'details',
                    handleAction
                  }}
                />
              ))
            ) : (
              <FTEmptyCard
                title="Product not found!"
                description="Write product name for search product."
              />
            )}
          </div>
        </div>
      </FTModal>
    </div>
  );
};

export default SearchBox;
