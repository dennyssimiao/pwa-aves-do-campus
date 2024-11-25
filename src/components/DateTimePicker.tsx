import React, { useRef } from "react";

interface DateTimePickerProps {
    date: Date;
    setDate: (date: Date) => void;
    disabled: boolean;
}

const DateTimePicker: React.FC<DateTimePickerProps> = ({ date, setDate, disabled }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const [year, month, day] = e.target.value.split('T')[0].split('-').map(Number);
        const [hours, minutes] = e.target.value.split('T')[1].split(':').map(Number);
        setDate(new Date(year, month - 1, day, hours, minutes));
    };

    const handleOpenDatePicker = () => {
        if (disabled || !inputRef.current) return;

        inputRef.current.focus();
        inputRef.current.showPicker?.();
    };

    const formattedDateTime = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}T${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
    const formattedDate = `${String(date.getDate()).padStart(2, '0')}/${date.toLocaleString('default', { month: 'short' })}${String(date.getFullYear()).slice(2)}`;
    const formattedTime = `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;

    return (
        <div className="flex flex-col items-center">
            <label className="flex flex-col items-center w-full relative">
                <input
                    ref={inputRef}
                    type="datetime-local"
                    value={formattedDateTime}
                    onChange={handleChange}
                    disabled={disabled}
                    className={`absolute top-0 left-0 w-full h-full opacity-0 pointer-events-none`}
                />
                <div
                    className={`flex flex-row gap-3 text-xl text-center font-semibold w-full 
                    ${disabled
                            ? 'bg-gray-100 text-gray-600 cursor-not-allowed'
                            : 'bg-white text-gray-800 cursor-pointer'}`}
                    onClick={handleOpenDatePicker}
                >
                    <div>{formattedDate}</div>
                    <div>{formattedTime}</div>
                </div>
            </label>
        </div>
    );
};

export default DateTimePicker;
