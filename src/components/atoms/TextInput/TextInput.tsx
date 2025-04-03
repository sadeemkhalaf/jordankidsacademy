import React from 'react';

interface TextInputProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
}

const TextInput: React.FC<TextInputProps> = ({ value, onChange, placeholder }) => {
    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className='absolute w-[609px] h-[67px] left-[980px] top-[6375px] bg-[#ECECEC]'
        />
    );
};

/* Rectangle 46 */

export default TextInput;