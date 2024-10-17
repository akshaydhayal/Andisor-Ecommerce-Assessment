import { useState } from "react";
import EditableField from "./EditableField";
import VariantRow from "./VariantRow";
import { PrimaryVariant, Product } from "@/types";

export default function ProductRow({ product, onUpdate }: { product: Product; onUpdate: (updatedProduct: Product) => void }) {
  const [expanded, setExpanded] = useState(false);

  // Calculate variant counts
  const variantCount = product.primary_variants.length;
  const totalSecondaryVariants = product.primary_variants.reduce((acc, variant) => acc + variant.secondary_variants.length, 0);

  return (
    <div className="group hover:bg-gray-800/20">
      <div className="px-4 py-4 sm:px-6">
        <div className="grid grid-cols-12 gap-4 items-center">
          <div className="col-span-3 flex items-center space-x-3">
            <button onClick={() => setExpanded(!expanded)} className="text-gray-400 hover:text-white">
              {expanded ? "▼" : "▶"}
            </button>
            <img src={product.image} alt={product.title} className="h-10 w-10 rounded-lg object-cover" />
            <div className="flex flex-col">
              {/* @ts-expect-error ignore */}
              <EditableField value={product.title} onUpdate={(value) => onUpdate({ ...product, title: value })} className="font-medium text-white" />
              <span className="text-sm text-gray-500">
                {variantCount} variants • {totalSecondaryVariants} sizes
              </span>
            </div>
          </div>
          <div className="col-span-1">
            {/* @ts-expect-error ignore */}
            <EditableField value={product.inventory} onUpdate={(value) => onUpdate({ ...product, inventory: value })} />
          </div>
          <div className="col-span-1">
            {/* @ts-expect-error ignore */}
            <EditableField value={product.price} onUpdate={(value) => onUpdate({ ...product, price: value })} prefix="$" />
          </div>
          <div className="col-span-1">
            {/* @ts-expect-error ignore */}
            <EditableField value={product.discountPercentage} onUpdate={(value) => onUpdate({ ...product, discountPercentage: value })} suffix="%" />
          </div>
          <div className="col-span-2 flex space-x-1">
            {product.primary_variants.map((variant: PrimaryVariant) => (
              <div key={variant.name} className="w-4 h-4 rounded-full" style={{ backgroundColor: variant.name.toLowerCase() }} />
            ))}
            <span className="text-gray-400 ml-1">+{variantCount}</span>
          </div>
          <div className="col-span-2">S, M, L +{Math.max(0, totalSecondaryVariants - 3)}</div>
          <div className="col-span-1">{product.inventory}</div>
          <div className="col-span-1">{product.leadTime}</div>
        </div>
      </div>
      {expanded && (
        <div className="pl-0 ">
          {product.primary_variants.map((variant: PrimaryVariant) => (
            <VariantRow
              key={variant.name}
              variant={variant}
              onUpdate={(updated) => {
                const updatedVariants = product.primary_variants.map((v: PrimaryVariant) => (v.name === variant.name ? updated : v));
                onUpdate({
                  ...product,
                  //@ts-expect-error inote
                  primary_variants: updatedVariants,
                });
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
