import './App.css';
import { Img1 } from './Import&Export';
import Dog, { Img2 } from './Import&Export';
import Fragments from './Fragments';
import Counter from './CounterUseStateHook';
import ConditionRandering from './ConditionRandring';
import RenderList from './RenderList';

function App() {
  return (
    <div className="App">
      <Img1 />
      <Img2 />
      <Dog />
      <Fragments src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" />
      <Counter />
      <ConditionRandering />
      <RenderList />
      
    </div>
  );
}

export default App;
