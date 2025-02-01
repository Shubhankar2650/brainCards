import ChatIcon from "../assets/icons/ChatIcon"
import DocumentIcon from "../assets/icons/DocumentIcon"
import LinkIcon from "../assets/icons/LinkIcon"
import TagIcon from "../assets/icons/TagIcon"
import VideoIcon from "../assets/icons/VideoIcon"
import SlideBarItems from "./SlideBarItems"

const Sidebar = () => {
    return (
        <div className="absolute left-0 top-0 max-w-80 min-w-72 h-full border-2">
            <div className="flex mt-2 items-center">
                <img src="/reshot-icon-brain.svg" alt="logo" width={72} />
                <h1 className="text-2xl">Second Brain</h1>
            </div>
            <div className="flex gap-6 ml-1 flex-col p-6 text-xl mt-4 text-gray-700">
                <SlideBarItems icon={<ChatIcon />} title="Tweets" />
                <SlideBarItems icon={<VideoIcon />} title="Videos" />
                <SlideBarItems icon={<DocumentIcon />} title="Documents" />
                <SlideBarItems icon={<LinkIcon />} title="Links" />
                <SlideBarItems icon={<TagIcon />} title="Tags" />

            </div>
        </div>
    )
}

export default Sidebar