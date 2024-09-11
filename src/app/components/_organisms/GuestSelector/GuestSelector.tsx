import { GuestSelectorProps } from "@/app/types";
import Button from "../../_molecules/Button/Button";

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
          <div className="flex items-center rounded-3xl border py-3 space-x-2">
            <Button
              className="px-4 rounded-full"
              onClick={() => setCount(Math.max(0, count - 1))}
            >
              -
            </Button>
            <span>{count}</span>
            <Button
              className="px-4 rounded-full"
              onClick={() => setCount(count + 1)}
            >
              +
            </Button>
          </div>
        </div>
      );
    })}
    <div className="flex justify-between items-center">
      <Button
        onClick={() => {
          setAdults(0);
          setChildren(0);
          setPets(0);
        }}
        className="text-gray-500 underline"
      >
        Reset
      </Button>
      <Button
        onClick={() => setGuestsPopUp(false)}
        className="bg-black text-white px-4 rounded-full py-2 mt-4"
      >
        Next
      </Button>
    </div>
  </div>
);

export default GuestSelector;
