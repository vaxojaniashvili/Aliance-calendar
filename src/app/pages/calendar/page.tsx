"use client";

import Button from "@/app/components/_molecules/Button/Button";
import Image from "next/image";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

const CalendarPage: React.FC = () => {
  const [calendarPopUp, setCalendarPopUp] = useState<boolean>(false);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [guest, setGuest] = useState<boolean>(false);

  useEffect(() => {
    const datePickerStyles = document.createElement("style");
    datePickerStyles.innerHTML = `
      .react-datepicker {
        width: 100%;
        border-radius: 12px;
        border: 1px solid black;
      }
      .react-datepicker__month-container {
        width: 100%;
      }
      .react-datepicker__header {
        background-color: #f3f4f6;
      }
      .react-datepicker__day--selected {
        background-color: black;
        color: white;
        border-radius: 100%;
      }
      .react-datepicker__day--keyboard-selected {
        background-color: black;
        color: white;
        border-radius: 100%;
      }
    `;
    document.head.appendChild(datePickerStyles);
  }, []);

  const getFormattedDateRange = (start: Date | null, end: Date | null): string => {
    if (start && end) {
      const startFormatted = format(start, "dd");
      const endFormatted = format(end, "dd");
      const monthFormatted = format(start, "MMM");
      return `${monthFormatted} ${startFormatted}-${endFormatted}`;
    }
    return "Select dates";
  };

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[530px] shadow-2xl">
      <div className="flex justify-end py-7">
        <Image
          height={20}
          width={20}
          src={"https://www.svgrepo.com/show/365893/x-thin.svg"}
          alt={""}
        />
      </div>
      <div className="flex justify-between border-gray-500 border rounded-full mx-6 px-7 py-5">
        <p className="text-gray-500">When</p>
        <Button
          className="cursor-pointer"
          onClick={() => setCalendarPopUp(!calendarPopUp)}
        >
          {getFormattedDateRange(startDate, endDate)}
        </Button>
      </div>

      {calendarPopUp && (
        <div className="mt-5 p-4 bg-white rounded-lg  w-full">
          <DatePicker
            selected={startDate}
            onChange={(dates: [Date | null, Date | null]) => {
              const [start, end] = dates;
              setStartDate(start);
              setEndDate(end);
            }}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            inline
            calendarClassName="react-datepicker"
            dateFormat="MMM dd"
          />
        </div>
      )}

      <div className="flex justify-between border-gray-500 border rounded-full mx-6 px-7 py-5 mt-5">
        <p className="text-gray-500">Guests</p>
        <Button
          className="cursor-pointer"
          onClick={() => setGuest(!guest)}
        >
          Select guests
        </Button>
      </div>
      {guest && (
        <div>
          <h1>This is guest page</h1>
        </div>
      )}

      <div className="flex justify-between mx-5 py-10">
        <p className="text-gray-500">Clear all</p>
        <Button
          onClick={() => alert("Request is sending")}
          className="px-5 py-3 rounded-full bg-black text-white"
        >
          Request
        </Button>
      </div>
    </div>
  );
};

export default CalendarPage;
