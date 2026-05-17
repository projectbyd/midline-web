export default function TimelineCard({
  emoji,
  title,
  status,
  time,
}: any) {
  return (
    <div className="bg-[#FFF8F2] rounded-[30px] p-5">

      <div className="text-[#4B3535] font-semibold mb-4">
        {emoji} {title}
      </div>

      <div className="flex justify-between text-sm">

        <span className="text-[#86B05D] font-semibold">
          {status}
        </span>

        <span className="text-[#7A6A6A]">
          {time}
        </span>

      </div>
    </div>
  );
}