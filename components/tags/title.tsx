import { parseISO, format } from "date-fns";

export default function Title({
  title,
  id,
  date,
}: {
  title: string;
  id: string;
  date: string;
}) {
  return (
    <header className="mb-8">
      <h1
        id={id}
        className="title leading-15 text-3xl mt-12 mb-3 font-bold text-black"
      >
        {title}
      </h1>
      <span className="date text-gray-800">
        {format(parseISO(date), "MMMM d, yyyy")}
      </span>
    </header>
  );
}
