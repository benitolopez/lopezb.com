type TocItem = {
  title: string;
  id: string;
  items?: TocItem[];
};

type TocProps = {
  title: string;
  items: TocItem[];
};

export default function Toc({ title, items }: TocProps) {
  const renderItems = (items: TocItem[], depth = 0) => (
    <ul className={depth === 0 ? "leading-8" : "text-sm leading-6 ml-4"}>
      {items.map((item) => (
        <li key={item.id}>
          <a href={`#${item.id}`} className="hover:text-black">
            {item.title}
          </a>
          {item.items &&
            item.items.length > 0 &&
            renderItems(item.items, depth + 1)}
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <div className="mb-8 border-t border-b py-6">
        <div className="text-lg font-bold text-black">Table of contents</div>
        <div className="text-gray-800 mt-3">{renderItems(items)}</div>
      </div>
    </>
  );
}
