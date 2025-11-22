import "./App.css";
import Dashboard from "./components/Dashboard";
import ExpenseModal from "./components/ExpenseModal";
import Navigation from "./components/Navigation";
import Reports from "./components/Reports";
import Settings from "./components/Settings";

function App() {
  return (
    <>
      {/* <Dashboard /> */}
      {/* <Reports /> */}
      <Settings />
      <Navigation />
      <ExpenseModal />
    </>
  );
}

export default App;
