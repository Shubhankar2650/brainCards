import { useRef } from "react"
import CrossIcon from "../assets/icons/CrossIcon"
import Button from "./Button"
import Input from "./Input"


const CreateContent = ({ open, onClose }: { open: Boolean, onClose: () => void }) => {
    const titelReference = useRef();
    const linkReference = useRef();
    return (
        <>
            {open && <div className='h-screen w-screen bg-slate-900/60   top-0 left-0 fixed flex items-center justify-center'>

                <div className="p-6 bg-slate-50 flex flex-col gap-4 border">
                    <div className="text-lg flex justify-between">
                        <h3><i>Add Content</i></h3>
                        <div className=" cursor-pointer" onClick={onClose}>
                            <CrossIcon />
                        </div>

                    </div>
                    <div>
                        <Input placeholder="Title" reference={titelReference} />
                        <Input placeholder="Link" reference={linkReference} />
                    </div>
                    <div className="m-auto">
                        <Button variant="primary" title="Submit" />
                    </div>
                </div>
            </div>}
        </>
    )
}



export default CreateContent