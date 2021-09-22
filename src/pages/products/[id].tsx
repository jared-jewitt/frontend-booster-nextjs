import React from "react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { Product as IProduct, PRODUCTS } from "@/constants";
import { Page, Error } from "@/components";
import styles from "./styles.module.scss";

interface Props {
  product: IProduct;
}

export default function Product({
  product,
}: InferGetServerSidePropsType<typeof getServerSideProps>): React.ReactElement {
  if (!product) {
    return (
      <Page title="NextJS Boilerplate | 404" description="Product not found">
        <Error>404 - Product not found</Error>
      </Page>
    );
  }

  return (
    <Page className={styles.product} title={`NextJS Boilerplate | Product #${product.id}`} description="Product page">
      <ul>
        <li>ID: {product.id}</li>
        <li>Title: {product.title}</li>
        <li>Description: {product.description}</li>
        <li>Price: ${product.price}</li>
      </ul>
    </Page>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async ({ query }) => {
  const { id } = query;
  const product = PRODUCTS.find((p) => p.id == (id as unknown)) || null;

  return {
    props: {
      product,
    },
  };
};
