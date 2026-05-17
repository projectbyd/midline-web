```tsx id="nyh55n"
import CategoryBubble from "@/components/CategoryBubble";
import TimelineCard from "@/components/TimelineCard";
import UpcomingCard from "@/components/UpcomingCard";
import FilterChip from "@/components/FilterChip";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F7E6D4] px-5 pt-10 pb-32">

      <h1 className="text-3xl font-bold text-[#4B3535] mb-6">
        Hi Alana 👋
      </h1>

      <div className="bg-[#FFF8F2] rounded-[32px] p-5 mb-6">

        <textarea
          placeholder="What's on your mind?"
          className="w-full bg-transparent outline-none resize-none text-[#4B3535]"
        />

        <div className="flex justify-between mt-5 text-xl">
          <span>📎</span>
          <span>⏰</span>
          <span>🏷️</span>
        </div>
      </div>

      <div className="flex gap-4 overflow-x-auto mb-6">

        <CategoryBubble emoji="🚀" label="Junior" />
        <CategoryBubble emoji="💼" label="Work" />
        <CategoryBubble emoji="🏋️" label="Gym" />
        <CategoryBubble emoji="💡" label="Ideas" />

      </div>

      <div className="flex gap-3 mb-6">
        <FilterChip label="Status" />
        <FilterChip label="Category" />
        <FilterChip label="Date" />
      </div>

      <h2 className="text-2xl font-bold text-[#4B3535] mb-4">
        Timeline
      </h2>

      <div className="space-y-4">

        <TimelineCard
          emoji="🚀"
          title="Export client excel before 3PM"
          status="Ongoing"
          time="2h ago"
        />

        <TimelineCard
          emoji="💼"
          title="Need revise invoice design"
          status="Pending"
          time="5h ago"
        />

      </div>

      <h2 className="text-2xl font-bold text-[#4B3535] mt-8 mb-4">
        Upcoming Thoughts
      </h2>

      <div className="space-y-4">

        <UpcomingCard text="🏋️ Gym at 7 PM" />
        <UpcomingCard text="🚀 Junior revision tomorrow" />

      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-[#E7C58A] h-24 rounded-t-[32px] flex justify-around items-center text-2xl">
        <span>🔍</span>
        <span>🏠</span>
        <span>✨</span>
      </div>

    </main>
  );
}
`