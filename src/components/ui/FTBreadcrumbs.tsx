import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import { useLocation, useNavigate } from "react-router-dom";

const FTBreadcrumbs = ({title}:{title?:string}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const routePath = location?.pathname?.substring(1)?.split("/")[0];
  let queryPath: string = "";
  const searchString = location?.search ?? "";

  if (searchString) {
    const keyValuePair = searchString?.substring(1).split("&");
    keyValuePair?.map((pair) => {
      if (pair?.split("=")[0] === "category") {
        queryPath = pair?.split("=")[1];
      }
    });
  }
  return (
    <div className="bg-indigo-50">
      <div className="container !py-8">
        <Breadcrumbs>
          <BreadcrumbItem onPress={() => navigate("/")}>Home</BreadcrumbItem>
          {routePath && (
            <BreadcrumbItem
              onPress={() => {
                (queryPath || title) && navigate("/products");
              }}
            >
              {routePath[0].toUpperCase() + routePath?.substring(1)}
            </BreadcrumbItem>
          )}
          {queryPath && (
            <BreadcrumbItem>
              {queryPath[0].toUpperCase() + queryPath?.substring(1)}
            </BreadcrumbItem>
          )}
          {title && (
            <BreadcrumbItem>
              {title[0].toUpperCase() + title?.substring(1)}
            </BreadcrumbItem>
          )}
        </Breadcrumbs>
      </div>
    </div>
  );
};

export default FTBreadcrumbs;
