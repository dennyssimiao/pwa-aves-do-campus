import React, { forwardRef } from "react";
import CancelIcon from '@mui/icons-material/Cancel';

interface SearchBarProps {
    value: string;
    isVisible: boolean;
    onChange: (value: string) => void;
    onClose: () => void;
    placeholder?: string;
    className?: string;
}

const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(
    ({ value, isVisible, onChange, onClose, placeholder = "Pesquisar...", className }, ref) => {
        if (!isVisible) return null;

        return (
            <div className={`flex items-center gap-2 relative ${className}`}>
                <input
                    ref={ref}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    type="text"
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                />
                {value && (
                    <button
                        onClick={() => onChange('')}
                        className="absolute right-12 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
                    >
                        &times;
                    </button>
                )}
                <button onClick={onClose}><CancelIcon /></button>
            </div>
        );
    }
);

export default SearchBar;


// import React from "react";
// import CancelIcon from '@mui/icons-material/Cancel';

// interface SearchBarProps {
//     value: string;
//     isVisible: boolean;
//     onChange: (value: string) => void;
//     onClose: () => void;
//     placeholder?: string;
//     className?: string;
// }

// const SearchBar: React.FC<SearchBarProps> = ({ value, isVisible, onChange, onClose, placeholder = "Pesquisar...", className }) => {
//     if (!isVisible) return null;

//     return (
//         <div className={`flex items-center gap-2 relative ${className}`}>
//             <input
//                 className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
//                 type="text"
//                 placeholder={placeholder}
//                 value={value}
//                 onChange={(e) => onChange(e.target.value)} />
//             {value && (
//                 <button
//                     onClick={() => onChange('')}
//                     className="absolute right-12 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
//                 >
//                     &times;
//                 </button>
//             )}
//             <button onClick={onClose}><CancelIcon /></button>
//         </div>
//     );
// };

// export default SearchBar;
