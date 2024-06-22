import "./App.css";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Navbar from "./components/common/Navbar";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
