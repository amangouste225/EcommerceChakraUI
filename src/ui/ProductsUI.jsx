import { Center, Wrap, WrapItem } from "@chakra-ui/react";
import { products } from "../products";
import { ProductsCard } from "../components/ProductsCard";

export const ProductsUI = () => {
  return (
    <Wrap spacing="30px" justify="center" minHeight="100vh">
      {products.map((product) => (
        <WrapItem key={product._id}>
          <Center w="260px" h="350px">
            <ProductsCard product={product} />
          </Center>
        </WrapItem>
      ))}
    </Wrap>
  );
};
