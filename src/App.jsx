import { configureWeb3Modal } from './connection/configureWeb3Modal';
import '@radix-ui/themes/styles.css';
import './index.css';
import Header from './components/Header';
import { Container } from "@radix-ui/themes";
import { Toaster } from "react-hot-toast";
import AppTabs from './components/AppTabs';

configureWeb3Modal();

function App() {
  return (
    <>
      <Container>
        <Header />
        <Toaster />
        <main>
          <AppTabs />
        </main>
      </Container>
    </>
  )
}

export default App
