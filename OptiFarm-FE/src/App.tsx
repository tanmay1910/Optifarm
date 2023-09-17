import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Header } from "./components"
import { About, GetRecommendations } from "./pages";
import chat from './assets/chat.png';

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { useState } from "react";
import { Popper } from "@mui/material";

export const SERVER_URL = 'http://127.0.0.1:80'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    return <>
        <Header />
        {children}
        <div className="absolute right-5 bottom-0" onClick={handleClick}>
            <img src={chat} className="h-28 hover:h-32 cursor-pointer" />
        </div>
        <Popper id={id} open={open} anchorEl={anchorEl}>
            <div className="relative bg-gray-100 h-[78vh] w-[50vh]">
                <div onClick={() => setAnchorEl(null)} className="cursor-pointer absolute top-0 right-2">x</div>
                <div className="p-4 h-full">
                    <iframe src="./bot.html" className="h-full w-full" />
                </div>
            </div>
        </Popper>
    </>;
}

export const routes = {
    about: '/',
    getRecommendations: '/recommendations',
}

const router = createBrowserRouter([
    {
        path: routes.about,
        element: <Layout><About /></Layout>
    },
    {
        path: routes.getRecommendations,
        element: <Layout><GetRecommendations /></Layout>
    },
]);

const queryClient = new QueryClient();

export const App: React.FC = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    )
}
