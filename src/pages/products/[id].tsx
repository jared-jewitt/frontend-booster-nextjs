import React from "react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { IProduct, products } from "@/constants";
import { Page, Error } from "@/components";
import styles from "@/pages/products/styles.module.scss";

interface IProps {
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

export const getServerSideProps: GetServerSideProps<IProps> = async ({ query }) => {
  const { id } = query;
  const product = products.find((p) => p.id == (id as unknown)) || null;

  return {
    props: {
      product,
    },
  };
};
