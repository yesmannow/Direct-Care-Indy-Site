import { getValuePropsByCategory } from "@/lib/content/dpc";

export function ValueProps() {
  const valueProps = getValuePropsByCategory('transparency'); 
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {valueProps.map((vp) => (
        <div key={vp.id} className="bg-muted rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 text-secondary">
              <vp.icon />
            </div>
            <h3 className="text-xl font-bold">{vp.title}</h3>
          </div>
          <p>{vp.description}</p>
        </div>
      ))}
    </div>
  );
}
