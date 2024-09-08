import { parseISO, format } from "date-fns";

export default function Title({
  title,
  date,
}: {
  title: string;
  date: string;
}) {
  return (
    <header className="mb-8">
      <h1 className="title leading-7 text-2xl mt-12 mb-3 font-bold text-black">
        {title}
      </h1>
      <span className="date text-gray-500">
        {format(parseISO(date), "MMMM d, yyyy")}
      </span>
    </header>
  );
}
