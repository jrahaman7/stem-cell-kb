import PageHeader from "@/components/PageHeader";
import Directory from "./Directory";
import { FDA_LIST_URL, LIST_RETRIEVED, products } from "@/data/products";
export const metadata = { title: "Approved products directory | Cell Therapy Knowledge Base" };
export default function Page() {
  return (
    <>
      <PageHeader eyebrow="Evidence · FDA list · Directory" title="FDA-approved" em="cell & gene therapy products"
        lead={<>All {products.length} products on FDA&rsquo;s list, searchable and grouped, with links to the trial results behind each one.</>}
        actions={[{ href: "/success-cases", label: "See outcomes by condition" }, { href: FDA_LIST_URL, label: "Open FDA's list", secondary: true, external: true }]} />
      <p className="muted small">Source: <a href={FDA_LIST_URL} target="_blank" rel="noreferrer">FDA CBER, Approved Cellular and Gene Therapy Products</a>, retrieved {LIST_RETRIEVED}. The groups are this portal's own and are not an FDA classification. Check the FDA page and each product's label for indications and current status.</p>
      <Directory />
    </>
  );
}
