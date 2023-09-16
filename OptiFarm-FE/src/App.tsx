import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Header } from "./components"
import { About, GetRecommendations } from "./pages";
import chat from './assets/chat.png';

import {
    createBrowserRouter,
    Link,
    RouterProvider,
} from "react-router-dom";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <>
        <Header />
        {children}
        <div className="absolute right-5 bottom-0">
            <Link to="/bot">
                <img src={chat} className="h-28 hover:h-32 cursor-pointer" />
            </Link>
        </div>
    </>;
}

export const routes = {
    about: '/',
    getRecommendations: '/recommendations',
    cropProtectionStrategy: '/crop-protection-strategy',
    bot: '/bot'
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
    {
        path: routes.cropProtectionStrategy,
        element: <Layout><div >Hello world</div></Layout>
    },
    {
        path: routes.bot,
        element: <iframe src="../public/bot.html" className="h-screen w-screen" />
    }
]);

const queryClient = new QueryClient();

export const App: React.FC = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    )
}
