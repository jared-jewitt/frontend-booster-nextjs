import React from "react";
import Link from "next/link";
import { products } from "@/constants";
import { Page } from "@/components";
import styles from "@/pages/products/styles.module.scss";

export default function Products(): React.ReactElement {
  return (
    <Page className={styles.products} title="NextJS Boilerplate | Products" description="Products page">
      <p>Welcome to the NextJS boilerplate!</p>
      <ul>
        {products.map((post) => (
          <li key={post.id}>
            <Link href={`/products/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Page>
  );
}
