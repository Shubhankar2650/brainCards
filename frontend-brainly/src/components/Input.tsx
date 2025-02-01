
function Input({ reference, placeholder }: { reference: any, placeholder: string }) {
    return <div>
        <input className="px-4 py-2 border rounded-sm mt-2 w-72" type="text" ref={reference} placeholder={placeholder}></input>
    </div>
}

export default Input