import jon from "./../../assets/jonLogo.svg";

const Loading = () => (
    <div role="status">
    <div className="coin-spin-animation-loading">
      <div className="coin-spin-animation pb-3 flex justify-center">
        <div className="rounded-full border-4 border-stone-100 bg-red-500 w-40 h-40 flex items-center justify-center">
          <img
            className="h-auto"
            loading="lazy"
            src={jon}
            alt="Jon Logo"
          />
        </div>
      </div>
    </div>
    <p className="text-center">Loading...</p>
  </div>
);

export default Loading;
