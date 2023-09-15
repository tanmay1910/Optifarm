import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Header } from "./components"
import { About, GetRecommendations } from "./pages";

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

export const routes = {
    about: '/',
    getRecommendations: '/recommendations',
    cropProtectionStrategy: '/crop-protection-strategy',
}

const router = createBrowserRouter([
    {
        path: routes.about,
        element: <>
            <Header />
            <About />
        </>
    },
    {
        path: routes.getRecommendations,
        element: <>
            <Header />
            <GetRecommendations />
        </>
    },
    {
        path: routes.cropProtectionStrategy,
        element: <>
            <Header />
            <div>Hello world</div>
        </>
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
