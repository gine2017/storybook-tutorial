export default function Avatar({ imgSrc }) {
  return (
    <div className="w-10 h-10 rounded-full overflow-hidden bg-white relative">
      <img src={imgSrc.src} className="h-full w-full object-cover" />
    </div>
  );
}
