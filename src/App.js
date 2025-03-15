import Board from "./components/board"
import Toolbar from "./components/Toolbar";
import BoardProvider from "./store/BoardProvider";
import ToolboxProvider from "./store/ToolboxProvider";
import Toolbox from "./components/Toolbox/index"
function App() {
  return (
    <BoardProvider>
      <ToolboxProvider>
        <Toolbox/>
        <Toolbar/>
        <Board />
      </ToolboxProvider>
    </BoardProvider>
  )
}
export default App;