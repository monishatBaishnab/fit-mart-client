import categoriesData from "./categories";
import { brandsArray } from "./manufacturerDetails";

const formInputs = [
  {
    type: "FTInput",
    props: {
      name: "name",
      placeholder: "Enter product name...",
      label: "Product Name",
    },
  },
  {
    type: "FTSelect",
    props: {
      name: "category",
      placeholder: "Select product category...",
      label: "Product Category",
      options: categoriesData,
    },
  },
  {
    type: "FTInput",
    props: {
      name: "price",
      placeholder: "Enter product price...",
      label: "Product Price",
    },
  },
  {
    type: "FTInput",
    props: {
      name: "Stock",
      placeholder: "Enter product stock...",
      label: "Product Stock",
    },
  },
  {
    type: "FTTextArea",
    props: {
      name: "description",
      placeholder: "Write a short description about the product...",
      label: "Product Description",
    },
  },
  {
    type: "FTSelect",
    props: {
      name: "warranty",
      placeholder: "Select product warranty...",
      label: "Product Warranty",
      options: [
        { key: "1", label: "1 Year" },
        { key: "2", label: "2 Years" },
        { key: "3", label: "3 Years" },
      ],
    },
  },
  {
    type: "FTSelect",
    props: {
      name: "returnPolicy",
      placeholder: "Select return policy...",
      label: "Return Policy",
      options: [
        { key: "15", label: "15 Days" },
        { key: "20", label: "20 Days" },
        { key: "25", label: "25 Days" },
        { key: "30", label: "30 Days" },
      ],
    },
  },
  {
    type: "FTSelect",
    props: {
      name: "brand",
      placeholder: "Select product brand...",
      label: "Product Brand",
      options: brandsArray,
    },
  },
  {
    type: "FTInput",
    props: {
      name: "dimensions",
      placeholder: "Dimensions (e.g., 18 x 6 inches)...",
      label: "Product Dimensions",
    },
  },
  {
    type: "FTInput",
    props: {
      name: "weight",
      placeholder: "Weight (e.g., 1.5, 2)...",
      label: "Product Weight",
    },
  },
  {
    type: "FTInput",
    props: {
      name: "material",
      placeholder: "Material (e.g., EVA foam)...",
      label: "Product Material",
    },
  },
  {
    type: "FTTextArea",
    props: {
      name: "features",
      placeholder:
        "Enter product features (e.g., High-density foam, Textured surface)...",
      label: "Product Features",
      description: "Use commas to list multiple features.",
    },
  },
];

export default formInputs;
