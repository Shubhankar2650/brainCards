import { ReactElement } from 'react'

interface ButtonComponent {
    title: String,
    variant: "primary" | "secondary",
    startIcon?: ReactElement,
    endIcon?: ReactElement
    onCLick?: () => void
}

const buttonVariant = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-100 text-purple-400"
}

const defaultStyle = "text-md flex gap-3 px-4 py-2 rounded-md justify-center items-center";

const Button = (props: ButtonComponent) => {
    return (
        <div>
            <button className={buttonVariant[props.variant] + " " + defaultStyle} onClick={props?.onCLick}>
                {props.startIcon}
                {props.title}
                {props.endIcon}
            </button>
        </div>
    )
}

export default Button