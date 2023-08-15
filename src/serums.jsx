export default function Serums(props) {
  return (
    <>
      <div className="flex flex-col items-center">
        <img
          src={props.img}
          alt=""
          className="w-56 m-5 h-56 border-2 border-black  md:mx-10 md:w-60 md:h-72"
        />
        <div className="flex p-3">
          <h2 className="mx-3 max-w-xs">{props.name}</h2>
          <h3>₹{props.price}</h3>
        </div>
      </div>
    </>
  );
}
