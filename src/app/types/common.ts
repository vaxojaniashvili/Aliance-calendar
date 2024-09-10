export interface ButtonType {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export interface DatePickerProps {
  calendarPopUp?: boolean;
  setCalendarPopUp: React.Dispatch<React.SetStateAction<boolean>>;
  currentMonth: number;
  currentYear: number;
  selectedStartDate: number | null;
  selectedEndDate: number | null;
  handleDayClick: (day: number) => void;
  handlePrevMonth: () => void;
  handleNextMonth: () => void;
  resetDates: () => void;
  todayDate: number;
  todayMonth: number;
  todayYear: number;
}
export interface GuestSelectorProps {
  guestsPopUp: boolean;
  setGuestsPopUp: React.Dispatch<React.SetStateAction<boolean>>;
  adults: number;
  setAdults: React.Dispatch<React.SetStateAction<number>>;
  children: number;
  setChildren: React.Dispatch<React.SetStateAction<number>>;
  pets: number;
  setPets: React.Dispatch<React.SetStateAction<number>>;
}