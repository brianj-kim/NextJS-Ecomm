import { PageHeader } from "@/app/admin/_components/pageHeader";
import { ProductForm } from "../../_components/ProductForm";
import db from "@/app/db/db";

export default async function EditProductPage({ 
  params: { id },
} : {
  params: { id: string }
}) {
  const product = await db.product.findUnique({ where: {
    id
  }})
  return (
    <>
            <PageHeader>Edit Product</PageHeader>
            <ProductForm product={product} />
        </>
  )
}