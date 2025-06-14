const Input = ({ placeholder, value, onChange, type = "text", ...rest }) => {
    return (
        <div>
            <input 
                className="w-full text-zinc-800 bg-white p-2 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-zinc-950"
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                {...rest}
            />
        </div>
    );
};

export default Input;
