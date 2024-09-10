import { DatePickerProps } from "@/app/types";
import { months } from "../../_molecules/Months/Months";
import Button from "../../_molecules/Button/Button";

const DatePicker: React.FC<DatePickerProps> = ({
  setCalendarPopUp,
  currentMonth,
  currentYear,
  selectedStartDate,
  selectedEndDate,
  handleDayClick,
  handlePrevMonth,
  handleNextMonth,
  resetDates,
  todayDate,
  todayMonth,
  todayYear,
}) => {
  const daysInMonth = (month: number, year: number) =>
    new Date(year, month + 1, 0).getDate();

  return (
    <div className="mt-5 bg-white rounded-lg shadow-md p-4">
      <div className="flex justify-between mb-4 items-center">
        <Button onClick={handlePrevMonth} className="text-2xl">
          &lt;
        </Button>
        <p className="text-lg text-center">
          {months[currentMonth]} {currentYear}
        </p>
        <Button onClick={handleNextMonth} className="text-2xl">
          &gt;
        </Button>
      </div>
      <div className="grid grid-cols-7 gap-2 text-center">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day, idx) => (
          <p key={idx} className="text-gray-500">
            {day}
          </p>
        ))}
        {Array.from(
          { length: daysInMonth(currentMonth, currentYear) },
          (_, i) => i + 1
        ).map((day) => (
          <div
            key={day}
            className={`p-2 text-center cursor-pointer rounded-full
            ${
              day === todayDate &&
              currentMonth === todayMonth &&
              currentYear === todayYear
                ? "border-2 border-black"
                : selectedStartDate === day || selectedEndDate === day
                ? "bg-black text-white"
                : selectedStartDate &&
                  day > selectedStartDate &&
                  (!selectedEndDate || day < selectedEndDate)
                ? "bg-gray-300"
                : "bg-white"
            }`}
            onClick={() => handleDayClick(day)}
          >
            {day}
          </div>
        ))}
      </div>
      <div className="flex justify-between mb-4">
        <Button onClick={resetDates} className="text-gray-500 underline">
          Reset
        </Button>
        <Button
          onClick={() => setCalendarPopUp(false)}
          className="bg-black text-white px-4 py-2 rounded-full"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default DatePicker;
