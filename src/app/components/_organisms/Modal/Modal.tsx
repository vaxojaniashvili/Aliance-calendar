import Button from "../../_molecules/Button/Button";

const Modal: React.FC<{ closeModal: () => void }> = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
        <Button
          onClick={closeModal}
          className="flex w-full justify-end text-lg text-gray-500"
        >
          ✕
        </Button>
        <div className="flex justify-between w-full text-sm text-center items-center">
          <p className="text-gray-700 font-semibold w-full">
            Your request on reserving <br /> your apartment
            <span className="font-bold text-black">
              Alliance <br /> Palace 23/10
            </span>{" "}
            has been sent.
          </p>
        </div>
        <div className="flex justify-center my-5">
          <div className="text-green-500 text-4xl">✔</div>
        </div>
        <p className="text-gray-600 text-center text-sm px-10">
          We will notify you about <br /> availability as soon as possible,{" "}
          <br /> continue tracking your <br /> notifications.
        </p>
      </div>
    </div>
  );
};
export default Modal;
