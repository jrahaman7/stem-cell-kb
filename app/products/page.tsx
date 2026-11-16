import Directory from "./Directory";
import { FDA_LIST_URL, LIST_RETRIEVED, products } from "@/data/products";
export const metadata = { title: "Approved products directory | Cell Therapy Knowledge Base" };
export default function Page() {
  return (
    <>
      <h1>FDA-approved cellular and gene therapy products</h1>
      <p className="lead">All {products.length} products on FDA's list, searchable and grouped for clinicians and researchers, with links to the outcome data.</p>
      <p className="muted">Source: <a href={FDA_LIST_URL} target="_blank" rel="noreferrer">FDA CBER, Approved Cellular and Gene Therapy Products</a>, retrieved {LIST_RETRIEVED}. The groups are this portal's own and are not an FDA classification. Check the FDA page and each product's label for indications and current status.</p>
      <Directory />
    </>
  );
}
