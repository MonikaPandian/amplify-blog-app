import './App.css';
import '@aws-amplify/ui-react/styles.css';
import { Route, Routes } from "react-router-dom";
import Post from './Post';
import CreatePost from './CreatePost';
import UpdatePost from './UpdatePost';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Post />} />
      <Route path="/post-create" element={<CreatePost />} />
      <Route path="/post-update" element={<UpdatePost />} />
    </Routes>
  );
}

export default App;
