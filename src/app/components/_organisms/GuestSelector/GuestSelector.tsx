import { GuestSelectorProps } from "@/app/types";

const GuestSelector: React.FC<GuestSelectorProps> = ({
  setGuestsPopUp,
  adults,
  setAdults,
  children,
  setChildren,
  pets,
  setPets,
}) => (
  <div className="mt-5 bg-white rounded-lg shadow-md p-4">
    {["Adults", "Children", "Pets"].map((type, idx) => {
      const count =
        type === "Adults" ? adults : type === "Children" ? children : pets;
      const setCount =
        type === "Adults"
          ? setAdults
          : type === "Children"
          ? setChildren
          : setPets;

      return (
        <div className="flex justify-between mb-4" key={idx}>
          <p className="text-lg">{type}</p>
          <div className="flex items-center space-x-2">
            <button
              className="bg-gray-300 px-2 py-1 rounded-full"
              onClick={() => setCount(Math.max(0, count - 1))}
            >
              -
            </button>
            <span>{count}</span>
            <button
              className="bg-gray-300 px-2 py-1 rounded-full"
              onClick={() => setCount(count + 1)}
            >
              +
            </button>
          </div>
        </div>
      );
    })}
    <button
      onClick={() => setGuestsPopUp(false)}
      className="bg-black text-white px-4 py-2 w-full rounded-full mt-4"
    >
      Next
    </button>
  </div>
);

export default GuestSelector;
