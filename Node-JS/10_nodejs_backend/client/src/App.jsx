import { useState } from "react";
import "./App.css";
import { Button } from "./components/ui/button";
import Navbar from "./pages/Navbar";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { useToast } from "./components/hooks/use-toast"

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { toast } = useToast()

  const addTodoHandler = async (req, res) => {
    try {
      const res = await axios(
        "http://localhost:8000/api/v1/todo",
        { title },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(res);
      if (res.success) {
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center gap-5 mt-5">
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Add a new todo..."
          className="w-1/4"
        />
        <Button onClick={addTodoHandler}>Add Todo 🚀</Button>
      </div>
      <Textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Write a description..."
        className="w-1/4 mt-2"
      />
    </div>
  );
}

export default App;
