import Header from './components/Header';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Metrics from './components/Metric';
import Charts from './components/Charts';
import AppContextProvider from './context/AppContext';

function App() {
  return (
    <AppContextProvider>
      <div className="flex justify-start min-h-screen bg-primary">
        <Navbar />
        <div className="flex flex-col w-full">
          <Header />
          <main className="flex flex-col flex-1 gap-6 p-2 md:p-6">
            <Metrics />
            <Charts />
          </main>
        </div>
        <Sidebar />
      </div>
    </AppContextProvider>
  );
}

export default App;
