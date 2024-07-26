/* eslint-disable no-constant-condition */
import { useDisclosure } from "@nextui-org/react";
import FTPlus from "../assets/icons/FTPlus";
import ProductsTable from "../components/modules/ProductManagement/ProductsTable";
import FTBreadcrumbs from "../components/ui/FTBreadcrumbs";
import FTButton from "../components/ui/FTButton";
import FTInput from "../components/ui/FTInput";
import FTTextArea from "../components/ui/FTTextArea";
import FTSelect from "../components/ui/FTSelect";
import FTSelectItem from "../components/ui/FTSelectItem";
import formInputs from "../assets/data/formInputs";
import FTAlert from "../assets/icons/FTAlert";
import { FocusEvent, useState } from "react";
import FTModal from "../components/ui/FTModal";
import { TProduct } from "../redux/features/Product";
import DetailsContainer from "../components/modules/SingleProduct/DetailsContainer";
import { findManufacturerDetails } from "../assets/data/manufacturerDetails";
import {
  useCreateProductMutation,
  useDeleteProductMutation,
  useEditProductMutation,
} from "../redux/api";
import useHotToast from "../hooks/useHotToast";
import Swal from "sweetalert2";

const initialProduct = {
  specifications: {
    dimensions: "",
    weight: "",
    material: "",
  },
  manufacturerDetails: {},
  name: "",
  brand: "",
  price: "",
  stockQuantity: "",
  description: "",
  category: "",
  images: "",
  rating: "",
  features: [],
  warranty: "",
  returnPolicy: "",
};

const ProductManagement = () => {
  const { onClose, onOpen, isOpen } = useDisclosure();
  const { ftToast } = useHotToast();
  const [modalTitle, setModalTitle] = useState<string>("");
  const [createProduct] = useCreateProductMutation();
  const [editProduct] = useEditProductMutation();
  const [deleteProduct] = useDeleteProductMutation();
  const [action, setAction] = useState<"edit" | "create">();
  const [product, setProduct] = useState<TProduct>(initialProduct);
  const {
    onClose: onDetailsClose,
    onOpen: onDetailsOpen,
    isOpen: isDetailsClose,
  } = useDisclosure();

  const handleOpen = () => {
    onOpen();
    setProduct(initialProduct);
    setModalTitle("Create Product");
    setAction("create");
  };

  const handleActions = (
    action: "edit" | "delete" | "details",
    payload?: TProduct
  ) => {
    if (action === "edit") {
      setAction(action);
    }
    if (action === "edit") {
      setProduct(payload as TProduct);
      onOpen();
      setModalTitle("Update Product");
    }
    if (action === "delete") {
      Swal.fire({
        title: "Are you sure?",
        text: "Your product will be permanently removed and you will not be able to recover it.",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        customClass: {
          confirmButton: "!bg-indigo-600",
          cancelButton: "!bg-red-500",
          container: "!bg-indigo-600/10 backdrop-blur-sm",
          title: "text-slate-700",
          footer: "",
        },
      }).then(async (result) => {
        if (result.isConfirmed) {
          const res = await deleteProduct(payload?._id as string);
          if (res?.data?.success) {
            ftToast("success", "Success", "Product deleted successfully!");
          }else {
            ftToast("error", "Error", "Failed to delete the product.");
          }
        }
      });
    }
    if (action === "details") {
      setProduct(payload as TProduct);
      onDetailsOpen();
    }
  };

  const handleChange = (
    e: FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const name = e?.target?.name;
    const value = e?.target?.value;
    if (name === "weight" || name === "material" || name === "dimensions") {
      setProduct((prevProduct) => ({
        ...prevProduct,
        specifications: {
          ...prevProduct?.specifications,
          [name]: value,
        },
      }));
    } else if (name === "features") {
      const featuresArr = value?.split(",").map((value) => value?.trim());
      setProduct((prevProduct) => ({
        ...prevProduct,
        [name]: featuresArr,
      }));
    } else {
      setProduct((prevProduct) => ({
        ...prevProduct,
        [name]: value,
      }));
    }
  };

  const handleSave = async () => {
    console.log(action);
    const manufacturerDetails = findManufacturerDetails(product?.brand);
    if (action === "edit") {
      const res = await editProduct({
        product: { ...product, manufacturerDetails },
        id: product?._id as string,
      });
      if (res?.data?.success) {
        ftToast("success", "Success", "Product updated successfully!");
      }
    } else if (action === "create") {
      const res = await createProduct({ ...product, manufacturerDetails });
      if (res?.data?.success) {
        ftToast("success", "Success", "Product created successfully!");
      }
    }

    onClose();
  };

  return (
    <div>
      <FTBreadcrumbs />
      <div className="container !pt-5">
        <div className="pb-5 flex justify-between items-center">
          <h2 className="text-3xl font-semibold">All Products</h2>
          <FTButton
            onPress={handleOpen}
            color="primary"
            size="lg"
            className="!min-w-12 !p-0 md:!min-w-24 md:!p-6"
            endContent={<FTPlus classNames={{ path: "stroke-white" }} />}
          >
            <span className="hidden sm:inline-block">Create Product</span>
          </FTButton>
        </div>

        <ProductsTable handleActions={handleActions} />
      </div>

      <FTModal
        actions={{ isOpen, onClose, onOpen }}
        cancelButton={{ status: true, label: "Cancel" }}
        name="product-management-modal"
        saveButton={{ status: true, label: "Save", handleSave }}
        size="3xl"
        title={modalTitle}
        key="product-management-modal"
      >
        <div className="space-y-14 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-5 md:gap-y-7 p-0 md:p-6">
          {formInputs?.map((formInput) => {
            const name: string = formInput?.props?.name;
            const placeholder = formInput?.props?.placeholder;
            const label = formInput?.props?.label;
            const description = formInput?.props?.description;
            let defaultSelectedKeys: string[] = [];
            let defaultValue: string = "";

            if (name) {
              if ([product[name]]) {
                defaultSelectedKeys = [product[name]];
                defaultValue = product[name];
              }
              if (!product?.[name]) {
                defaultValue = product?.specifications[name];
              }
            }

            return formInput?.type === "FTSelect" ? (
              <div key={formInput?.props?.name}>
                <FTSelect
                  onChange={(e) => handleChange(e)}
                  name={name}
                  placeholder={placeholder}
                  label={label}
                  defaultSelectedKeys={defaultSelectedKeys}
                >
                  {(formInput?.props?.options ?? [])?.map((option) => (
                    <FTSelectItem key={option?.key}>
                      {option?.label}
                    </FTSelectItem>
                  ))}
                </FTSelect>
              </div>
            ) : formInput?.type === "FTInput" ? (
              <div
                key={formInput?.props?.name}
                className={`md:col-span-${
                  formInput?.props?.colSpan ? formInput?.props?.colSpan : "1"
                }`}
              >
                <FTInput
                  defaultValue={defaultValue}
                  onBlur={(e) => handleChange(e)}
                  name={name}
                  placeholder={placeholder}
                  label={label}
                />
              </div>
            ) : (
              <div key={name} className="md:col-span-2">
                <FTTextArea
                  defaultValue={defaultValue}
                  onBlur={(e) => handleChange(e)}
                  name={name}
                  placeholder={placeholder}
                  label={label}
                  description={
                    formInput?.props?.description ? (
                      <div className="flex items-center gap-1">
                        <FTAlert classNames={{ path: "stroke-slate-700" }} />{" "}
                        {description}
                      </div>
                    ) : null
                  }
                />
              </div>
            );
          })}
          {/* <div className="col-span-2">
            <FTInputFile
              fileIcon={<FTImage />}
              src={product?.images}
              name="product_image"
              label="Upload File"
              description="or click to browse"
            />
          </div> */}
        </div>
      </FTModal>

      <FTModal
        actions={{
          isOpen: isDetailsClose,
          onClose: onDetailsClose,
          onOpen: onDetailsOpen,
        }}
        cancelButton={{ status: true, label: "Close" }}
        name="product-details-modal"
        saveButton={{ status: false }}
        size="3xl"
        title="Product Details"
        key="product-details-modal"
      >
        <DetailsContainer product={product} actionButtons={false} />
      </FTModal>
    </div>
  );
};

export default ProductManagement;
