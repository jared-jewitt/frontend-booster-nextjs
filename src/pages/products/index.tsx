import React from "react";
import Link from "next/link";
import { products } from "@/constants";
import { Page } from "@/components";
import styles from "./styles.module.scss";

export default function Products(): React.ReactElement {
  return (
    <Page title="NextJS Boilerplate | Products" description="Products page">
      <div className={styles.products}>
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
      </div>
    </Page>
  );
}
