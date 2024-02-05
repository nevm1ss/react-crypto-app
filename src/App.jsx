import AppLayout from "./Components/layout/AppLayout.jsx";
import {CryptoContextProvider} from "./context/crypto-context.jsx";

export default function App() {
  return (
    <CryptoContextProvider>
      <AppLayout />
    </CryptoContextProvider>
  )
}