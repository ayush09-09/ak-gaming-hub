import { Slider } from "@/components/ui/slider";

const FilterSlider = ({ label, min, max, value, onChange, unit }) => {
  return (
    <div className="mb-4">
      <label className="block mb-1 text-sm font-semibold text-zinc-700">
        {label}: {value}{unit}
      </label>
      <Slider
        min={min}
        max={max}
        value={[value]}
        onValueChange={([val]) => onChange(val)}
        className="w-full"
      />
    </div>
  );
};

export default FilterSlider;
