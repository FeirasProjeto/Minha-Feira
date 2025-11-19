export default function Widget({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="
      bg-gray-800
      p-4
      rounded-xl
      border border-gray-700
      shadow-md
      transition
      hover:shadow-lg
      flex flex-col
      gap-1
      sm:p-5          
    ">
      <p className="text-gray-400 text-sm sm:text-base">{title}</p>
      <h3 className="text-3xl font-bold break-words">{value}</h3>
    </div>
  );
}
