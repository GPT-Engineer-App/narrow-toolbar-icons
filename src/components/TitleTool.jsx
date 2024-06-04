import { useState } from "react";
import { Box, Button, Input, Select, VStack, HStack } from "@chakra-ui/react";

const TitleTool = () => {
  const [title, setTitle] = useState("");
  const [font, setFont] = useState("Arial");
  const [size, setSize] = useState(16);
  const [color, setColor] = useState("#000000");
  const [history, setHistory] = useState([]);
  const [redoStack, setRedoStack] = useState([]);

  const handleTitleChange = (e) => {
    setHistory([...history, { title, font, size, color }]);
    setRedoStack([]);
    setTitle(e.target.value);
  };

  const handleFontChange = (e) => {
    setHistory([...history, { title, font, size, color }]);
    setRedoStack([]);
    setFont(e.target.value);
  };

  const handleSizeChange = (e) => {
    setHistory([...history, { title, font, size, color }]);
    setRedoStack([]);
    setSize(e.target.value);
  };

  const handleColorChange = (e) => {
    setHistory([...history, { title, font, size, color }]);
    setRedoStack([]);
    setColor(e.target.value);
  };

  const handleUndo = () => {
    if (history.length > 0) {
      const lastState = history.pop();
      setRedoStack([...redoStack, { title, font, size, color }]);
      setTitle(lastState.title);
      setFont(lastState.font);
      setSize(lastState.size);
      setColor(lastState.color);
      setHistory(history);
    }
  };

  const handleRedo = () => {
    if (redoStack.length > 0) {
      const nextState = redoStack.pop();
      setHistory([...history, { title, font, size, color }]);
      setTitle(nextState.title);
      setFont(nextState.font);
      setSize(nextState.size);
      setColor(nextState.color);
      setRedoStack(redoStack);
    }
  };

  return (
    <VStack spacing={4} mt={8}>
      <Input placeholder="Enter title" value={title} onChange={handleTitleChange} />
      <Select value={font} onChange={handleFontChange}>
        <option value="Arial">Arial</option>
        <option value="Times New Roman">Times New Roman</option>
        <option value="Courier New">Courier New</option>
      </Select>
      <Input type="number" placeholder="Size" value={size} onChange={handleSizeChange} />
      <Input type="color" value={color} onChange={handleColorChange} />
      <HStack spacing={4}>
        <Button onClick={handleUndo} isDisabled={history.length === 0}>
          Undo
        </Button>
        <Button onClick={handleRedo} isDisabled={redoStack.length === 0}>
          Redo
        </Button>
      </HStack>
      <Box mt={8} p={4} borderWidth="1px" borderRadius="md" style={{ fontFamily: font, fontSize: `${size}px`, color }}>
        {title}
      </Box>
    </VStack>
  );
};

export default TitleTool;
