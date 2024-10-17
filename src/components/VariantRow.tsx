import { useState } from "react";
import EditableField from "./EditableField";
//@ts-expect-error ignore
export default function VariantRow({ variant, onUpdate }) {
  const [expanded, setExpanded] = useState(false);
  const secondaryVariantCount = variant.secondary_variants.length;

  return (
    <div className="group hover:bg-gray-800/10">
      <div className="px-4 py-3 sm:px-6 ">
        <div className="grid grid-cols-12 gap-4 items-center">
          <div className="col-span-3  flex items-center space-x-3 pl-12">
            <button onClick={() => setExpanded(!expanded)} className="text-gray-400 hover:text-white">
              {expanded ? "▼" : "▶"}
            </button>
            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: variant.name.toLowerCase() }} />
            <div className="flex items-center space-x-2">
              {/* @ts-expect-error ignore */}
              <EditableField value={variant.name} onUpdate={(value) => onUpdate({ ...variant, name: value })} className="font-medium text-white" />
              {variant.active && <span className="px-2 py-1 text-xs rounded-full bg-emerald-500/20 text-emerald-400">Active</span>}
            </div>
          </div>
          <div className="col-span-1">
            {/* @ts-expect-error ignore */}
            <EditableField value={variant.inventory} onUpdate={(value) => onUpdate({ ...variant, inventory: value })} />
          </div>
          <div className="col-span-1">
            {/* @ts-expect-error ignore */}
            <EditableField value={variant.price} onUpdate={(value) => onUpdate({ ...variant, price: value })} prefix="$" />
          </div>
          <div className="col-span-1">
            {/* @ts-expect-error ignore */}
            <EditableField value={variant.discountPercentage} onUpdate={(value) => onUpdate({ ...variant, discountPercentage: value })} suffix="%" />
          </div>
          <div className="col-span-2"></div>
          <div className="col-span-2">S, M, L +{Math.max(0, secondaryVariantCount - 3)}</div>
          <div className="col-span-1">{variant.inventory}</div>
          <div className="col-span-1">2 Weeks</div>
        </div>
      </div>
      {expanded && (
        <div className="pl-0">
          {/* @ts-expect-error ignore */}
          {variant.secondary_variants.map((secondaryVariant, index: number) => (
            <SecondaryVariantRow
              key={secondaryVariant.name}
              variant={secondaryVariant}
              //@ts-expect-error ignore
              onUpdate={(updated) => {
            //@ts-expect-error ignore 
                const updatedVariants = variant.secondary_variants.map((v, i: number) => (i === index ? updated : v));
                onUpdate({
                  ...variant,
                  secondary_variants: updatedVariants,
                });
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}


//@ts-expect-error ignore
function SecondaryVariantRow({ variant, onUpdate }) {
    return (
    <div className="group hover:bg-gray-800/10">
      <div className="px-4 py-3 sm:px-6">
        <div className="grid grid-cols-12 gap-4 items-center">
          <div className="col-span-3 flex items-center space-x-3 pl-[72px]">
            {/* @ts-expect-error ignore */}
            <EditableField value={variant.name} onUpdate={(value) => onUpdate({ ...variant, name: value })} className="font-medium text-gray-300" />
          </div>
          <div className="col-span-1">
            {/* @ts-expect-error ignore */}
            <EditableField value={variant.inventory} onUpdate={(value) => onUpdate({ ...variant, inventory: value })} />
          </div>
          <div className="col-span-1">
            {/* @ts-expect-error ignore */}
            <EditableField value={variant.price} onUpdate={(value) => onUpdate({ ...variant, price: value })} prefix="$" />
          </div>
          <div className="col-span-1">
            {/* @ts-expect-error ignore */}
            <EditableField value={variant.discountPercentage} onUpdate={(value) => onUpdate({ ...variant, discountPercentage: value })} suffix="%" />
          </div>
          <div className="col-span-2"></div>
          <div className="col-span-2"></div>
          <div className="col-span-1">{variant.inventory}</div>
          <div className="col-span-1">2 Weeks</div>
        </div>
      </div>
    </div>
  );
}



