export default function CategoryBubble({
  emoji,
  label,
}: any) {
  return (
    <div className="min-w-[88px] h-[88px] bg-[#E7C58A] rounded-[28px] flex flex-col items-center justify-center">

      <div className="text-3xl mb-1">
        {emoji}
      </div>

      <div className="text-sm font-semibold text-[#4B3535]">
        {label}
      </div>

    </div>
  );
}