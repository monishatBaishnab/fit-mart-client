import FTBreadcrumbs from "../components/ui/FTBreadcrumbs";
import { useGetProductQuery } from "../redux/api";
import { useParams } from "react-router-dom";
import { TProduct } from "../redux/features/Product";
import FTEmptyCard from "../components/ui/FTEmptyCard";
import DetailsContainer from "../components/modules/SingleProduct/DetailsContainer";

const ProductsDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetProductQuery(id);
  const product: TProduct = data?.data ?? {};

  if (isLoading || !data?.data) {
    return (
      <FTEmptyCard
        title="Product details not found!"
        description="Please try to another products."
      />
    );
  }
  return (
    <div>
      <FTBreadcrumbs title={product?.name} />
      <div className="container">
      <DetailsContainer product={product} />
      </div>
    </div>
  );
};

export default ProductsDetails;
