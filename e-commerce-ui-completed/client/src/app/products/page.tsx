import ProductList from "@/components/ProductList";

const ProductsPage = async ({
  searchParams,
}: {
  searchParams: { category?: string };
}) => {
  const { category } = searchParams;
  return (
    <div className="">
      <ProductList category={category} params="products"/>
    </div>
  );
};

export default ProductsPage;
