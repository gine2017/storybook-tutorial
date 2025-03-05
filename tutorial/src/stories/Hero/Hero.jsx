export default function Hero({ imgSrc }) {
  return (
    <div className="h-22 w-full">
      <img src={imgSrc.src} className="h-full w-full object-cover" />
    </div>
  );
}
