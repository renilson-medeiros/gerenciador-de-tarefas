const Input = ({ placeholder, value, onChange, error, errorMessage, type = "text", ...rest }) => {
    return (
        <div>
            <input 
                className={`w-full text-neutral-600 bg-white p-2 border rounded focus:outline-none focus:ring-1
                    ${error 
                        ? 'border-red-500 focus:ring-red-500' 
                        : 'border-slate-200 focus:ring-neutral-800'}`}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                {...rest}
            />
            {error && 
                <p className="text-red-500 text-xs mt-1">{errorMessage}</p>
            }
        </div>
    );
};

export default Input;
