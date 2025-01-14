import AboutPage from "components/AboutPage/index.tsx";
import ChaptersPage from "components/ChaptersPage/index.tsx";
import CompetitionPage from "components/CompetitionPage/index.tsx";
import ResourcesPage from "components/ResourcesPage/index.tsx";
import React from "react";
import ReactDOM from "react-dom/client";
import {
    Route,
    RouterProvider,
    createHashRouter,
    createRoutesFromElements,
} from "react-router-dom";
import MainPage from "./components/MainPage/index.tsx";
import "./index.scss";
import ErrorPage from "components/ErrorPage/index.tsx";
import AppLayout from "AppLayout.tsx";

const router = createHashRouter(
    createRoutesFromElements(
        <Route
            path="/"
            element={<AppLayout />}
            errorElement={
                <AppLayout>
                    <ErrorPage />
                </AppLayout>
            }
        >
            <Route errorElement={<ErrorPage />}>
                <Route index element={<MainPage />} />
                <Route path="/competition" element={<CompetitionPage />} />
                <Route path="/resources" element={<ResourcesPage />} />
                <Route path="/chapters" element={<ChaptersPage />} />
                <Route path="/about" element={<AboutPage />} />
            </Route>
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
