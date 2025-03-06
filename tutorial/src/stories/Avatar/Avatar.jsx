export default function Avatar({ imgSrc }) {
  return (
    <div className="w-20 h-20 border border-8 border-white rounded-full overflow-hidden bg-white relative">
      <img src={imgSrc.src} className="h-full w-full object-cover" />
    </div>
  );
}
