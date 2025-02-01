import { useRef } from "react";
import Input from "../components/Input"
import Button from "../components/Button";
import axios from "axios";
import { BackendUrl } from "../config/BackendUrl";

const SignIn = () => {
    const emailReference = useRef<HTMLInputElement>();
    const passwordReference = useRef<HTMLInputElement>();


    async function onSubmit() {
        const username = emailReference.current?.value;
        const password = passwordReference.current?.value;
        console.log(username);
        console.log(password)


        try {
            const response = await axios.post(`${BackendUrl}/signin`, {
                username,
                password
            })
            console.log(response)
            alert("U have been signed in");
        } catch (error) {
            if (axios.isAxiosError(error) && error.response && error.response.data.message) {
                // Extract error messages from the response
                const errorMessages = error.response.data.message.map((err: string) => err.replace(/^custom:\s*/, '')).join("\n");
                alert(errorMessages);
            } else {
                // Handle unknown error types
                alert("An unexpected error occurred.");
            }
        }

    }
    return (
        <div className='h-screen w-screen bg-slate-900/60   top-0 left-0 fixed flex items-center justify-center'>

            <div className="p-6 bg-slate-50 flex flex-col gap-4 border">
                <div className="text-lg flex justify-between pl-3">
                    <h3><i>Signin</i></h3>
                </div>
                <div>
                    <Input placeholder="Email" reference={emailReference} />
                    <Input placeholder="Password" reference={passwordReference} />
                </div>
                <div className="m-auto">
                    <Button variant="primary" title="Submit" onCLick={onSubmit} />
                </div>
            </div>
        </div>
    )
}

export default SignIn