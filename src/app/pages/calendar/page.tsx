"use client";
import Button from "@/app/components/_molecules/Button/Button";
import Image from "next/image";
import { useState } from "react";

const CalendarPage = () => {
  const [calendarPopUp, setCalendarPopUp] = useState(false);
  const [guest, setGuest] = useState(false);
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[530px] shadow-2xl">
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
          onClick={() => {
            setCalendarPopUp(!calendarPopUp);
          }}
        >
          Select dates
        </Button>
      </div>
      {calendarPopUp && (
        <div>
          <h1>This is calendar!!</h1>
        </div>
      )}
      <div className="flex justify-between border-gray-500 border rounded-full mx-6 px-7 py-5 mt-5">
        <p className="text-gray-500">Guests</p>
        <Button
          className="cursor-pointer"
          onClick={() => {
            setGuest(!guest);
          }}
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
