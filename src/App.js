import './App.css';
import PostForm from './classRequest/PostForm';
import PostList from './classRequest/PostList';
import DataFetchingOne from './reducer/DataFetchingOne';
import ReducerDataFetching from './reducer/ReducerDataFetching';
import ButtonClickDataFetching from './requests/ButtonClickDataFetching';
import DataFetching from './requests/DataFetching';
import IndivDataFetching from './requests/IndivDataFetching';

function App() {
  return (
    <div className="App">
      <ReducerDataFetching />
      {/* <DataFetchingOne /> */}
      {/* <ButtonClickDataFetching /> */}
      {/* <IndivDataFetching /> */}
      {/* <DataFetching /> */}
      {/* <PostForm /> */}
      {/* <PostList /> */}
    </div>
  );
}

export default App;
