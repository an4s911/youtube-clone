import { SiYoutube } from "@icons-pack/react-simple-icons";
import {
    ArrowLeft,
    CircleUserRound,
    EllipsisVertical,
    MenuIcon,
    Mic,
    Search,
    X,
} from "lucide-react";
import { ChangeEvent, useState } from "react";
import { Link } from "react-router";

type HeaderProps = {
    isLoggedIn: boolean;
    userName: string;
};

function Header({ isLoggedIn, userName }: HeaderProps) {
    const [isSearchFocus, setIsSearchFocus] = useState(false);
    const [isSearchText, setIsSearchText] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchInputValue, setSearchInputValue] = useState("");

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchInputValue(e.target.value);
        if (e.target.value) {
            setIsSearchText(true);
        } else {
            setIsSearchText(false);
        }
    };

    return (
        <header className="flex pl-6 pr-4 py-2 w-full justify-between items-center relative">
            <div className="left flex gap-3 md:gap-6">
                <div className="menu hover:bg-gray-700 p-2 rounded-full cursor-pointer">
                    <MenuIcon strokeWidth={1} />
                </div>
                <Link
                    to="/"
                    className="logo flex items-center gap-1 cursor-pointer"
                >
                    <div className="h-min">
                        <SiYoutube color="#FF0033" title="Youtube" />
                    </div>
                    <div className="flex">
                        <h1 className="font-semibold">Youtube</h1>
                        <p className="text-xs text-gray-400 relative top-0 h-full">
                            TR
                        </p>
                    </div>
                </Link>
            </div>
            {isSearchOpen && (
                <div className="md:hidden absolute top-0 left-0 w-full h-full bg-gray-900 flex items-center px-4">
                    <div className="hover:bg-gray-700 p-2 rounded-full cursor-pointer">
                        <ArrowLeft onClick={() => setIsSearchOpen(false)} />
                    </div>
                    <div className="center flex-1 flex justify-center items-center gap-4 relative pl-2 pr-1 max-w-[732px]">
                        <div className="search flex flex-1 ml-10 relative">
                            <div
                                className={`flex flex-1 items-center border border-gray-600 rounded-tl-full rounded-bl-full py-2 pr-4
                                ${isSearchFocus ? "rounded-bl-none rounded-tl-none border-l-0 border-r border-blue-600" : ""}
`}
                            >
                                {isSearchFocus && (
                                    <div className="flex items-center border border-blue-600 border-r-0 h-full rounded-tl-full rounded-bl-full py-1 pl-4 absolute -translate-x-full">
                                        <Search strokeWidth={1} size={20} />
                                    </div>
                                )}
                                <input
                                    autoFocus
                                    className="bg-transparent flex-1 pl-4 outline-none"
                                    type="text"
                                    placeholder="Search"
                                    onFocus={() => setIsSearchFocus(true)}
                                    onBlur={() => {
                                        setIsSearchOpen(false);
                                        setIsSearchFocus(false);
                                    }}
                                    onChange={handleSearchChange}
                                    value={searchInputValue}
                                />
                                {isSearchText && (
                                    <div className="flex items-center h-full">
                                        <X strokeWidth={1} />
                                    </div>
                                )}
                            </div>
                            <div className="flex items-center rounded-tr-full rounded-br-full py-1 pl-6 pr-4 bg-gray-700 hover:bg-gray-800 cursor-pointer">
                                <Search strokeWidth={1} />
                            </div>
                        </div>
                        <div className="mic rounded-full p-2 bg-gray-700 hover:bg-gray-800 cursor-pointer">
                            <Mic strokeWidth={1} />
                        </div>
                    </div>
                </div>
            )}
            <div className="center flex-1 hidden md:flex justify-center items-center gap-4 relative pl-4 pr-1 max-w-[732px]">
                <div className="search flex flex-1 ml-10 relative">
                    <div
                        className={`flex flex-1 items-center border rounded-tl-full rounded-bl-full py-2 pr-4
                                ${isSearchFocus ? "rounded-bl-none rounded-tl-none border-l-0 border-r border-blue-600" : "border-gray-600"}
`}
                    >
                        {isSearchFocus && (
                            <div className="flex items-center border border-blue-600 border-r-0 h-full rounded-tl-full rounded-bl-full py-1 pl-4 absolute -translate-x-full cursor-pointer">
                                <Search strokeWidth={1} size={20} />
                            </div>
                        )}
                        <input
                            className="bg-transparent flex-1 pl-4 outline-none"
                            type="text"
                            placeholder="Search"
                            onFocus={() => setIsSearchFocus(true)}
                            onBlur={() => setIsSearchFocus(false)}
                            onChange={handleSearchChange}
                            value={searchInputValue}
                        />
                        {isSearchText && (
                            <div className="flex items-center h-full cursor-pointer">
                                <X strokeWidth={1} />
                            </div>
                        )}
                    </div>
                    <div className="flex items-center rounded-tr-full rounded-br-full py-1 pl-6 pr-4 bg-gray-700 hover:bg-gray-800 cursor-pointer">
                        <Search strokeWidth={1} />
                    </div>
                </div>
                <div className="mic rounded-full p-2 bg-gray-700 hover:bg-gray-800 cursor-pointer">
                    <Mic strokeWidth={1} />
                </div>
            </div>
            <div className="right flex items-center gap-2 md:gap-4 w-56 justify-end">
                <div className="md:hidden flex gap-1">
                    <div
                        className="p-2 hover:bg-gray-700 rounded-full cursor-pointer"
                        onClick={() => setIsSearchOpen(true)}
                    >
                        <Search strokeWidth={1} />
                    </div>
                    <div className="p-2 hover:bg-gray-700 rounded-full cursor-pointer">
                        <Mic strokeWidth={1} />
                    </div>
                </div>
                <div className="options cursor-pointer">
                    <EllipsisVertical strokeWidth={1} />
                </div>
                {!isLoggedIn && (
                    <Link
                        to="/signin"
                        className="user flex gap-2 border rounded-full items-center py-1 px-2 border-gray-600 hover:bg-gray-600 cursor-pointer"
                    >
                        <div className="icon">
                            <CircleUserRound strokeWidth={1} />
                        </div>
                        <div className="text text-sm pr-2 text-nowrap">
                            <p>Sign in</p>
                        </div>
                    </Link>
                )}
                {isLoggedIn && (
                    <div className="user flex gap-2 border rounded-full items-center py-1 px-2 border-gray-600 hover:bg-gray-600 cursor-pointer">
                        <div className="icon">
                            <CircleUserRound strokeWidth={1} />
                        </div>
                        <div className="text text-sm pr-2 text-nowrap">
                            <p>{userName}</p>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;
