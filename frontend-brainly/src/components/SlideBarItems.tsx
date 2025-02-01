import { ReactElement } from 'react'

const SlideBarItems = ({ icon, title }: { icon: ReactElement, title: string }) => {
    return (
        <div className="flex gap-4 items-center ">
            {icon}
            <p>{title}</p>
        </div>
    )
}

export default SlideBarItems