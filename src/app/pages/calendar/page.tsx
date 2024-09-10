"use client";
import Modal from "@/app/components/_organisms/Modal/Modal";
import { useState } from "react";

const CalendarPage: React.FC = () => {
  const [calendarPopUp, setCalendarPopUp] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedStartDate, setSelectedStartDate] = useState<number | null>(
    null
  );
  const [selectedEndDate, setSelectedEndDate] = useState<number | null>(null);
  const [guestsPopUp, setGuestsPopUp] = useState<boolean>(false);
  const [adults, setAdults] = useState<number>(0);
  const [children, setChildren] = useState<number>(0);
  const [pets, setPets] = useState<number>(0);

  const [currentMonth, setCurrentMonth] = useState<number>(8);
  const [currentYear, setCurrentYear] = useState<number>(2024);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const handleDayClick = (day: number) => {
    if (!selectedStartDate || (selectedStartDate && selectedEndDate)) {
      setSelectedStartDate(day);
      setSelectedEndDate(null);
    } else if (day > selectedStartDate) {
      setSelectedEndDate(day);
    }
  };

  const resetDates = () => {
    setSelectedStartDate(null);
    setSelectedEndDate(null);
  };

  const clearAll = () => {
    resetDates();
    setAdults(0);
    setChildren(0);
    setPets(0);
  };

  const handleRequest = () => {
    setModalOpen(true);
  };

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const totalGuests = adults + children + pets;

  return (
    <div className="relative mx-auto w-full max-w-md shadow-lg bg-white p-6 rounded-lg">
      <div className="flex justify-between">
        <p className="text-lg font-medium">When</p>
        <button
          onClick={() => setCalendarPopUp(!calendarPopUp)}
          className="text-gray-500"
        >
          {selectedStartDate && selectedEndDate
            ? `${selectedStartDate}-${selectedEndDate} ${months[currentMonth]}`
            : "Select Dates"}
        </button>
      </div>

      {calendarPopUp && (
        <div className="mt-5 bg-white rounded-lg shadow-md p-4">
          <div className="flex justify-between mb-4 items-center">
            <button onClick={handlePrevMonth} className="text-2xl">
              &lt;
            </button>
            <p className="text-lg text-center">
              {months[currentMonth]} {currentYear}
            </p>
            <button onClick={handleNextMonth} className="text-2xl">
              &gt;
            </button>
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
                  selectedStartDate === day || selectedEndDate === day
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
            <div className="flex items-center space-x-2">
              <button className="text-gray-500 underline" onClick={resetDates}>
                Reset
              </button>
            </div>
            <button
              onClick={() => setCalendarPopUp(false)}
              className="bg-black text-white px-4 py-2 rounded-full"
            >
              Next
            </button>
          </div>
        </div>
      )}

      <div className="flex justify-between mt-5">
        <p className="text-lg font-medium">Guests</p>
        <button
          onClick={() => setGuestsPopUp(!guestsPopUp)}
          className="text-gray-500"
        >
          {totalGuests > 0 ? `Person: ${totalGuests}` : "Select Guests"}
        </button>
      </div>

      {guestsPopUp && (
        <div className="mt-5 bg-white rounded-lg shadow-md p-4">
          <div className="flex justify-between mb-4">
            <p className="text-lg">Adults</p>
            <div className="flex items-center space-x-2">
              <button
                className="bg-gray-300 px-2 py-1 rounded-full"
                onClick={() => setAdults(Math.max(0, adults - 1))}
              >
                -
              </button>
              <span>{adults}</span>
              <button
                className="bg-gray-300 px-2 py-1 rounded-full"
                onClick={() => setAdults(adults + 1)}
              >
                +
              </button>
            </div>
          </div>

          <div className="flex justify-between mb-4">
            <p className="text-lg">Children</p>
            <div className="flex items-center space-x-2">
              <button
                className="bg-gray-300 px-2 py-1 rounded-full"
                onClick={() => setChildren(Math.max(0, children - 1))}
              >
                -
              </button>
              <span>{children}</span>
              <button
                className="bg-gray-300 px-2 py-1 rounded-full"
                onClick={() => setChildren(children + 1)}
              >
                +
              </button>
            </div>
          </div>

          <div className="flex justify-between mb-4">
            <p className="text-lg">Pets</p>
            <div className="flex items-center space-x-2">
              <button
                className="bg-gray-300 px-2 py-1 rounded-full"
                onClick={() => setPets(Math.max(0, pets - 1))}
              >
                -
              </button>
              <span>{pets}</span>
              <button
                className="bg-gray-300 px-2 py-1 rounded-full"
                onClick={() => setPets(pets + 1)}
              >
                +
              </button>
            </div>
          </div>

          <button
            onClick={() => setGuestsPopUp(false)}
            className="bg-black text-white px-4 py-2 w-full rounded-full mt-4"
          >
            Next
          </button>
        </div>
      )}

      <div className="flex justify-between mt-5">
        <button className="text-gray-500 underline" onClick={clearAll}>
          Clear all
        </button>
        <button
          onClick={handleRequest}
          className="bg-black text-white px-5 py-3 rounded-full"
        >
          Request
        </button>
      </div>

      {modalOpen && <Modal closeModal={() => setModalOpen(false)} />}
    </div>
  );
};

export default CalendarPage;
