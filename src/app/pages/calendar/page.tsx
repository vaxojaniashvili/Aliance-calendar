"use client";
import { months } from "@/app/components/_molecules/Months/Months";
import DatePicker from "@/app/components/_organisms/DatePicker/DatePicker";
import GuestSelector from "@/app/components/_organisms/GuestSelector/GuestSelector";
import Modal from "@/app/components/_organisms/Modal/Modal";
import { useState } from "react";

const today = new Date();
const todayDate = today.getDate();
const todayMonth = today.getMonth();
const todayYear = today.getFullYear();

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

  const totalGuests = adults + children + pets;

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
    clearAll();
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
        <DatePicker
          calendarPopUp={calendarPopUp}
          setCalendarPopUp={setCalendarPopUp}
          currentMonth={currentMonth}
          currentYear={currentYear}
          selectedStartDate={selectedStartDate}
          selectedEndDate={selectedEndDate}
          handleDayClick={handleDayClick}
          handlePrevMonth={handlePrevMonth}
          handleNextMonth={handleNextMonth}
          resetDates={resetDates}
          todayDate={todayDate}
          todayMonth={todayMonth}
          todayYear={todayYear}
        />
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
        <GuestSelector
          guestsPopUp={guestsPopUp}
          setGuestsPopUp={setGuestsPopUp}
          adults={adults}
          setAdults={setAdults}
          setChildren={setChildren}
          pets={pets}
          setPets={setPets}
        >
          {children}
        </GuestSelector>
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
