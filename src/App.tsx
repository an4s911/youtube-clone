import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

function App() {
    return (
        <div id="app">
            <Sidebar />
            <Header />
            <Content />
        </div>
    );
}

export default App;
