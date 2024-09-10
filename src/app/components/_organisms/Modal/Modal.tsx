const Modal: React.FC<{ closeModal: () => void }> = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
        <div className="flex justify-between items-center">
          <p className="text-gray-700 font-semibold">
            Your request on reserving your apartment - <br />
            <span className="font-bold">Alliance Palace 23/10</span> has been sent.
          </p>
          <button onClick={closeModal} className="text-gray-500">
            ✕
          </button>
        </div>
        <div className="flex justify-center my-5">
          <div className="text-green-500 text-4xl">✔</div>
        </div>
        <p className="text-gray-600 text-center">
          We will notify you about availability as soon as possible, continue tracking your notifications.
        </p>
      </div>
    </div>
  );
};
export default Modal;