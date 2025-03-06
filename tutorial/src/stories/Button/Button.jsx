export default function Button({ label, type }) {
  return (
    <button
      className={
        type === "primary"
          ? `bg-sky-600 text-white h-6 w-20 rounded-3xl text-2xl text-center`
          : `bg-transparent border-sky-600  border-2 text-gray-900 h-6 w-20 rounded-3xl text-2xl`
      }
    >
      {label}
    </button>
  );
}
