import { BreadCrumbText, BreadCrumb } from "./styled";
import { useSelector } from "../../hooks/useSelector";

const Categories: React.FC = () => {
  const breadCrumb = useSelector(
    (state) => state.SearchReducer.data.categories
  );
  return (
    <>
      {breadCrumb && (
        <BreadCrumbText>
          {breadCrumb.map((category, index) => {
            const isLast = (index: number) => index === breadCrumb.length - 1;
            return (
              <BreadCrumb key={category} disabled={isLast(index)}>
                {category}
              </BreadCrumb>
            );
          })}
        </BreadCrumbText>
      )}
    </>
  );
};

export default Categories;
//&gt;
