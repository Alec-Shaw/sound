import Video from "./cmponents/Video";
import Menu from "./cmponents/Menu";
import Sound from "./cmponents/Sound";

function App() {
  return (
    <div className="lg:px-[130px] px-5">
      <header>
        <Menu />
      </header>
      <Sound />
      <Video />
    </div>
  );
}

export default App;
