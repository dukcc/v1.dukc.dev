export default function Status() {
  const available = true;
  return (
    <div className="flex gap-8 items-center">
      <p className="text-sub">
        {available ? "Available to work" : "Not available to work"}
      </p>
      <div
        className={`w-6 h-6 rounded-out ${
          available ? "bg-green animate-pulse" : "bg-red"
        }`}
      />
    </div>
  );
}
