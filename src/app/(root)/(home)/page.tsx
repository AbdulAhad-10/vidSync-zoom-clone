import MeetingTypeList from "@/components/MeetingTypeList";

const Home = () => {
  const now = new Date();
  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
    now
  );
  return (
    <section className="flex flex-col gap-10 text-white size-full">
      <div className="h-[300px] bg-hero bg-cover w-full rounded-[20px]">
        <div className="flex flex-col h-full justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="glassmorphism max-w-[270px] text-center text-base py-2 rounded">
            Upcoming Meting at: 12:30 PM
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
          </div>
        </div>
      </div>

      <MeetingTypeList />
    </section>
  );
};

export default Home;
