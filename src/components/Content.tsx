import { Route, Routes } from "react-router";

type ContentProps = {};

function Content({}: ContentProps) {
    return (
        <main>
            <Routes>
                <Route path="/" element={<h1>Content</h1>} />
            </Routes>
        </main>
    );
}

export default Content;
