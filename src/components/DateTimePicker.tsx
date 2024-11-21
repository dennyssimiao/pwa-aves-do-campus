import React from "react";

interface DateTimePickerProps {
    date: Date;
    setDate: (date: Date) => void;
}

const getUpdatedDate = (e: React.ChangeEvent<HTMLInputElement>, date: Date): Date => {
    const [year, month, day] = e.target.value.split('-').map(Number);
    return new Date(
        year,
        month,
        day,
        date.getHours(),
        date.getMinutes()
    );
};

const getUpdatedChange = (e: React.ChangeEvent<HTMLInputElement>, date: Date): Date => {
    const [hours, minutes] = e.target.value.split(':').map(Number);
    return new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        hours,
        minutes
    );
};

const DateTimePicker: React.FC<DateTimePickerProps> = ({ date, setDate }) => (
    <div className="flex justify-between">
        <label className="flex flex-col items-start w-1/2 mr-2">
            <span className="text-sm font-semibol">Data:</span>
            <input
                type="date"
                value={`${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`}
                onChange={(e) => setDate(getUpdatedDate(e, date))}
                className="mt-1 p-2 text-gray-800 border border-gray-300 rounded w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
        </label>
        <label className="flex flex-col items-start w-1/2 ml-2">
            <span className="text-sm font-semibold">Hora:</span>
            <input
                type="time"
                value={`${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`}
                onChange={(e) => setDate(getUpdatedChange(e, date))}
                className="mt-1 p-2 text-gray-800 border border-gray-300 rounded w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
        </label>
    </div>
);

export default DateTimePicker;
