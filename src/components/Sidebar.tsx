import {
    SiYoutube,
    SiYoutubegaming,
    SiYoutubekids,
    SiYoutubeshorts,
} from "@icons-pack/react-simple-icons";
import {
    CircleHelp,
    CircleUserRound,
    Cog,
    Flag,
    Flame,
    Gamepad2,
    History,
    Home,
    Info,
    Logs,
    Radio,
    Trophy,
} from "lucide-react";
import { Link, useLocation } from "react-router";

type ListProps = {
    items: { name: string; icon: JSX.Element; link: string }[];
};

function Hr() {
    return <hr className="border-gray-700" />;
}

function List({ items }: ListProps) {
    const path = useLocation();

    return items.map(({ name, icon, link }) => (
        <Link
            to={link}
            className={`flex gap-6 text-sm py-2 px-4 rounded-lg hover:bg-gray-800 ${
                path.pathname === link ? "bg-gray-800" : ""
            }`}
        >
            <div>{icon}</div>
            <p className="hidden lg:block">{name}</p>
        </Link>
    ));
}

function Sidebar() {
    const sectionStyles = "flex flex-col p-3";

    return (
        <aside className="flex flex-col w-min lg:w-60 overflow-y-scroll max-h-[calc(100vh-58px)]">
            <div className={sectionStyles}>
                <List
                    items={[
                        {
                            name: "Home",
                            icon: <Home />,
                            link: "/",
                        },
                        {
                            name: "Shorts",
                            icon: <SiYoutubeshorts />,
                            link: "/shorts",
                        },
                        {
                            name: "Subscriptions",
                            icon: <Logs />,
                            link: "/subscriptions",
                        },
                    ]}
                />
            </div>
            <Hr />
            <div className={sectionStyles}>
                <List
                    items={[
                        {
                            name: "You",
                            icon: <CircleUserRound />,
                            link: "/you",
                        },
                        {
                            name: "History",
                            icon: <History />,
                            link: "/history",
                        },
                    ]}
                />
            </div>
            <Hr />
            <div className={sectionStyles}>
                <h4 className="text-base font-semibold">Explore</h4>
                <List
                    items={[
                        {
                            name: "Trending",
                            icon: <Flame />,
                            link: "/trending",
                        },
                        {
                            name: "Live",
                            icon: <Radio />,
                            link: "/live",
                        },
                        {
                            name: "Gaming",
                            icon: <Gamepad2 />,
                            link: "/gaming",
                        },
                        {
                            name: "Sports",
                            icon: <Trophy />,
                            link: "/sports",
                        },
                    ]}
                />
            </div>
            <Hr />
            <div className={sectionStyles}>
                <h4 className="text-base font-semibold">More from Youtube</h4>
                <List
                    items={[
                        {
                            name: "Youtube Premium",
                            icon: <SiYoutube color="#FF0033" />,
                            link: "/premium",
                        },
                        {
                            name: "Youtube Kids",
                            icon: <SiYoutubekids color="#FF0033" />,
                            link: "/kids",
                        },
                        {
                            name: "Youtube Gaming",
                            icon: <SiYoutubegaming color="#FF0033" />,
                            link: "/yt-gaming",
                        },
                    ]}
                />
            </div>
            <Hr />
            <div className={sectionStyles}>
                <List
                    items={[
                        {
                            name: "Settings",
                            icon: <Cog />,
                            link: "/settings",
                        },
                        {
                            name: "Report history",
                            icon: <Flag />,
                            link: "/reports",
                        },
                        {
                            name: "Help",
                            icon: <CircleHelp />,
                            link: "/help",
                        },
                        {
                            name: "Send feedback",
                            icon: <Info />,
                            link: "/feedback",
                        },
                    ]}
                />
            </div>
        </aside>
    );
}

export default Sidebar;
