import CallList from "@/components/CallList";

const Previous = () => {
  return (
    <section className="flex gap-10 text-white size-full flex-col">
      <h1 className="text-3xl font-bold">Previous</h1>
      <CallList type="ended" />
    </section>
  );
};

export default Previous;
