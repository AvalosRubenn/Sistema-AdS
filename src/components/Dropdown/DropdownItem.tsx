interface DropdownItemProps {
  option: string;
  onAdsLevel: (string: string) => void;
  onOpen: () => void;
}
function DropdownItem({ option, onAdsLevel, onOpen }: DropdownItemProps) {
  const SetLevelAndClose = () => {
    onAdsLevel(option);
    onOpen();
  };
  return (
    <button
      key={option}
      onClick={SetLevelAndClose}
      className="block w-full px-4 py-2 text-left hover:bg-muted"
    >
      {option}
    </button>
  );
}

export default DropdownItem;
