import Link from "next/link";
import { Fragment } from "react";

function Index() {
  return (
    <Fragment>
      <h1>This is News Page</h1>
      <ul>
        <li>
          <Link href="/news/coffe-news">Coffee</Link>
        </li>
        <li>
          <Link href="/news/tea-news">Tea</Link>
        </li>
        <li>
          <Link href="/news/milk-news">Milk</Link>
        </li>
      </ul>
    </Fragment>
  );
}

export default Index;
