import Navbar from "./components/navbar";
import UserRecords from "./components/user-records";

function App() {
  return (
    <div className="md:px-8 lg:px-20 xl:px-32">
      <Navbar />
      <UserRecords />
    </div>
  );
}

export default App;
