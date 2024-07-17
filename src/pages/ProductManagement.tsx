import {
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
} from "@nextui-org/react";
import FTPlus from "../assets/icons/FTPlus";
import ProductsTable from "../components/modules/ProductManagement/ProductsTable";
import FTBreadcrumbs from "../components/ui/FTBreadcrumbs";
import FTButton from "../components/ui/FTButton";
import FTSave from "../assets/icons/FTSave";
import FTClose from "../assets/icons/FTClose";
import FTInput from "../components/ui/FTInput";
import FTTextArea from "../components/ui/FTTextArea";
import FTSelect from "../components/ui/FTSelect";
import FTSelectItem from "../components/ui/FTSelectItem";
import formInputs from "../assets/data/formInputs";
import FTAlert from "../assets/icons/FTAlert";
import FTInputFile from "../components/ui/FTInputFile";
import FTImage from "../assets/icons/FTImage";
import { ChangeEvent, FormEvent, useState } from "react";

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
  const [product, setProduct] = useState(initialProduct);
  console.log(product, setProduct);
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    console.log(e);
  };

  const handleSave = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <FTBreadcrumbs />
      <div className="container !pt-5">
        <div className="pb-5 flex justify-between items-center">
          <h2 className="text-3xl font-semibold">All Products</h2>
          <FTButton
            onPress={onOpen}
            color="primary"
            size="lg"
            endContent={<FTPlus classNames={{ path: "stroke-white" }} />}
          >
            Create Product
          </FTButton>
        </div>

        <ProductsTable />
      </div>

      <Modal
        radius="sm"
        size="3xl"
        onClose={onClose}
        isOpen={isOpen}
        scrollBehavior="outside"
        hideCloseButton={true}
        classNames={{
          body: "!p-0 rounded-3xl overflow-hidden gap-0",
          backdrop: "bg-indigo-600/10 backdrop-blur-3xl",
        }}
      >
        <ModalContent>
          <ModalBody>
            <form onSubmit={handleSave}>
              <div className="flex items-center justify-between p-6 border-b border-b-slate-200">
                <h3 className="text-3xl font-semibold">Create Product</h3>
                <div className="flex items-center gap-2">
                  <FTButton
                    onPress={onClose}
                    isIconOnly
                    size="lg"
                    type="button"
                    color="secondary"
                  >
                    <FTClose classNames={{ path: "stroke-indigo-600" }} />
                  </FTButton>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-7 p-6">
                {formInputs?.map((formInput) => {
                  return formInput?.type === "FTSelect" ? (
                    <div key={formInput?.props?.name}>
                      <FTSelect
                        onChange={(e) => handleChange(e)}
                        name={formInput?.props?.name}
                        placeholder={formInput?.props?.placeholder}
                        label={formInput?.props?.label}
                      >
                        {(formInput?.props?.options ?? [])?.map((option) => (
                          <FTSelectItem key={option?.key}>
                            {option?.label}
                          </FTSelectItem>
                        ))}
                      </FTSelect>
                    </div>
                  ) : formInput?.type === "FTInput" ? (
                    <div key={formInput?.props?.name}>
                      <FTInput
                        onChange={(e) => handleChange(e)}
                        name={formInput?.props?.name}
                        placeholder={formInput?.props?.placeholder}
                        label={formInput?.props?.label}
                      />
                    </div>
                  ) : (
                    <div key={formInput?.props?.name} className={"col-span-2"}>
                      <FTTextArea
                        onChange={(e) => handleChange(e)}
                        name={formInput?.props?.name}
                        placeholder={formInput?.props?.placeholder}
                        label={formInput?.props?.label}
                        description={
                          formInput?.props?.description ? (
                            <div className="flex items-center gap-1">
                              <FTAlert
                                classNames={{ path: "stroke-slate-700" }}
                              />{" "}
                              {formInput?.props?.description}
                            </div>
                          ) : null
                        }
                      />
                    </div>
                  );
                })}
                <div className="col-span-2">
                  <FTInputFile
                    fileIcon={<FTImage />}
                    // src="https://i.ibb.co/8cPmH7L/Dumbbell-Set.jpg"
                    name="product_image"
                    label="Upload File"
                    description="or click to browse"
                  />
                </div>
              </div>
              <div className="flex gap-4 items-center justify-end p-6 border-t border-t-slate-200">
                <FTButton
                  onPress={onClose}
                  type="button"
                  endContent={
                    <FTClose
                      classNames={{ path: "stroke-slate-700", svg: "w-6 h-6" }}
                    />
                  }
                  size="lg"
                  color="secondary"
                >
                  Cancel
                </FTButton>
                <FTButton
                  type="button"
                  endContent={<FTSave classNames={{ path: "stroke-white" }} />}
                  size="lg"
                  color="primary"
                >
                  Save
                </FTButton>
              </div>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ProductManagement;
