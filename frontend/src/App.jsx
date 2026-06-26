import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import AppRoutes from "./routes";

function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;