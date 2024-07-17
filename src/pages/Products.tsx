import {
  Accordion,
  AccordionItem,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
} from "@nextui-org/react";
import FTGridProductCard from "../components/ui/FTGridProductCard";
import MultiRangeSlider, { ChangeResult } from "multi-range-slider-react";
import { useState } from "react";
import FTButton from "../components/ui/FTButton";
import categoriesData from "../assets/data/categories";
import FTBreadcrumbs from "../components/ui/FTBreadcrumbs";
import { useGetProductsQuery } from "../redux/api";
import { TProduct } from "../redux/features/Product";


const Products = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(4000);
  const [categories, setCategories] = useState<string[]>(["all"]);
  const [sort, setSort] = useState<string>("ascending");
  const { data, isLoading} = useGetProductsQuery(undefined) ?? {};
  console.log(data);
  const handleClearFilter = () => {
    setMinPrice(0);
    setMaxPrice(4000);
    setCategories(["all"]);
    setSort("ascending");
  };

  const handleSelectAllCategories = (isChecked: boolean) => {
    if (isChecked) {
      setCategories(categoriesData?.map((categoryData) => categoryData?.key));
    } else {
      setCategories([]);
    }
  };

  return (
    <div>
      <FTBreadcrumbs />

      <div className="container !pt-5 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* Product filter part */}
        <div className="col-span-1 hidden md:block">
          <div className="p-4 border border-slate-200 rounded-lg">
            <h4 className="text-xl font-semibold">Filter</h4>
            <Accordion
              selectionMode="multiple"
              className="!px-0"
              itemClasses={{
                base: "",
                trigger: "data-[focus-visible=true]:!outline-none !pb-0",
                title: "!text-base font-medium",
                titleWrapper: "!border-0",
              }}
              defaultExpandedKeys={["1", "2", "3"]}
              showDivider={false}
            >
              <AccordionItem key="1" aria-label="Category" title="Category">
                <Checkbox
                  className="mb-[1px]"
                  value="all"
                  onValueChange={(isChecked) =>
                    handleSelectAllCategories(isChecked)
                  }
                >
                  All
                </Checkbox>

                <CheckboxGroup
                  value={categories}
                  onValueChange={setCategories}
                  aria-label="category-filter"
                >
                  {categoriesData?.map((categoryData) => (
                    <Checkbox key={categoryData?.key} value={categoryData?.key}>
                      {categoryData?.label}
                    </Checkbox>
                  ))}
                </CheckboxGroup>
              </AccordionItem>
              <AccordionItem key="2" aria-label="Sort By" title="Sort By">
                <RadioGroup
                  value={sort}
                  onValueChange={setSort}
                  aria-label="sort-filter"
                >
                  <Radio value="ascending">Ascending</Radio>
                  <Radio value="descending">Descending</Radio>
                </RadioGroup>
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="Price Range"
                title="Price Range"
              >
                <div className="flex items-center justify-between px-2 text-indigo-600">
                  <span>{minPrice}</span>
                  <span>{maxPrice}</span>
                </div>
                <MultiRangeSlider
                  className="!shadow-none !border-0"
                  ruler={false}
                  min={0}
                  max={4000}
                  step={100}
                  minValue={minPrice}
                  maxValue={maxPrice}
                  onInput={(e: ChangeResult) => {
                    setMinPrice(e.minValue);
                    setMaxPrice(e.maxValue);
                  }}
                ></MultiRangeSlider>
              </AccordionItem>
            </Accordion>
            <FTButton
              onClick={handleClearFilter}
              color="secondary"
              size="md"
              className="mt-3"
              fullWidth
            >
              Clear Filter
            </FTButton>
          </div>
        </div>
        {/* Products part */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-3 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div className="col-span-3 py-3 flex items-center justify-between border-b border-b-slate-200">
            <h3 className="text-3xl font-bold">Products</h3>
            <span className="text-slate-500">
              Showing <span className="text-black">1-10</span> of{" "}
              <span className="text-black">100</span> Products
            </span>
          </div>
          {
            // products?.data?.map()
            !isLoading
              ? data?.data?.map((product:TProduct) => <FTGridProductCard key={product?._id} product={product} />)
              : null
          }
        </div>
      </div>
    </div>
  );
};

export default Products;
