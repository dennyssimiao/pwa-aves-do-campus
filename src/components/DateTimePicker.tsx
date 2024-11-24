import React from "react";

interface DateTimePickerProps {
    date: Date;
    setDate: (date: Date) => void;
    disabled: boolean;
}

const DateTimePicker: React.FC<DateTimePickerProps> = ({ date, setDate, disabled }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const [year, month, day] = e.target.value.split('T')[0].split('-').map(Number);
        const [hours, minutes] = e.target.value.split('T')[1].split(':').map(Number);
        setDate(new Date(year, month - 1, day, hours, minutes));
    };

    const formattedDateTime = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}T${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;

    return (
        <div className="flex justify-between">
            <label className="flex flex-col items-start w-full">
                <input
                    type="datetime-local"
                    value={formattedDateTime}
                    onChange={handleChange}
                    disabled={disabled}
                    className={`mt-1 p-2 text-gray-800 text-center font-semibold border rounded w-full focus:outline-none 
                        ${disabled 
                            ? 'bg-gray-100 border-gray-300 cursor-not-allowed' 
                            : 'bg-white border-gray-300 focus:ring-2 focus:ring-blue-400'}`}
                />
            </label>
        </div>
    );
};

export default DateTimePicker;
