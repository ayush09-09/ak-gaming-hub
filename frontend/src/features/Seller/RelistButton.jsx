import { Button } from '@/components/ui/button';

export default function RelistButton({ id, onRelist }) {
  return (
    <Button
      variant="secondary"
      onClick={() => onRelist(id)}
      className="text-sm"
    >
      Relist ID
    </Button>
  );
}
