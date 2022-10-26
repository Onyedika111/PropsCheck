import "./App.css";
import Profile from "./Profile/Profile";


function App() {
  const handleName = (fullName, profession) => alert(fullName, profession);
  const image = {
    borderRadius: "1000px",
  };

  return (
    <div className="App">
      <Profile handleName={handleName}>
        <div>
          <img src="pic.jpg" alt="me" style={image} />
        </div>
      </Profile>
    </div>
  );
}


export default App;
