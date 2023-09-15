import { createContext } from "react";

export const enum Page {
    About,
    GetRecommendations,
    CropProtectionStrategy
}

type PageContext = {
    page: Page;
    setPage: (page: Page) => void
}

export const PageContext = createContext<PageContext>({ page: Page.About, setPage: (_page: Page) => { } });
