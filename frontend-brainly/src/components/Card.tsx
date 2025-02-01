import ShareIcon from "../assets/icons/ShareIcon"

interface Cardcomponent {
    title: string,
    link: string,
    type: "youtube" | "twitter",

}

const Card = (props: Cardcomponent) => {
    const { link } = props
    return (
        <div className="w-72 shadow-sm p-2">
            <div className="flex justify-between text-sm items-center">
                <div className="flex gap-2">
                    <ShareIcon />
                    <div>
                        {props.title}
                    </div>
                </div>
                <div className="flex gap-2">
                    <ShareIcon />
                    <ShareIcon />
                </div>
            </div>
            {props.type === 'youtube' && <iframe className=" w-full h-full" src={link} title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}

            {props.type === 'twitter' && <blockquote className="twitter-tweet">
                <a href={link.replace("x.com", "twitter.com")}></a>
            </blockquote>}


        </div>
    )
}

export default Card