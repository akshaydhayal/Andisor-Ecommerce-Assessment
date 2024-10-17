import { Product } from "@/types";
import ProductRow from "./ProductRow";

export default function ProductList({ products, onUpdate }: { products: Product[]; onUpdate: (updatedProduct: Product) => void }) {
  return (
    <div className="bg-gray-800/30 rounded-lg shadow-xl border border-gray-700">
      <div className="px-4 py-5 sm:px-6">
        <div className="grid grid-cols-12 gap-4 text-sm text-gray-400">
          <div className="col-span-3 ">Product</div>
          <div className="col-span-1">Stock</div>
          <div className="col-span-1">Price</div>
          <div className="col-span-1">Discount</div>
          <div className="col-span-2">Color</div>
          <div className="col-span-2">Sizes</div>
          <div className="col-span-1">Inventory</div>
          <div className="col-span-1">Lead Time</div>
        </div>
      </div>
      <div className="divide-y divide-gray-700">
        {products.map((product: Product) => (
          <ProductRow key={product.id} product={product} onUpdate={onUpdate} />
        ))}
      </div>
    </div>
  );
}
