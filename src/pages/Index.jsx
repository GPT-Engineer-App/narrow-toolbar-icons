import { useState } from "react";
import { Container, VStack, IconButton, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, Input, Box } from "@chakra-ui/react";
import { FaWindowMaximize, FaSearch, FaPlus } from "react-icons/fa";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [elements, setElements] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleWindowClick = () => {
    setIsModalOpen(true);
  };

  const handleSearchClick = () => {
    alert(`Searching for: ${searchQuery}`);
  };

  const handleAddClick = () => {
    setElements([...elements, `Element ${elements.length + 1}`]);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Box display="flex" flexDirection="column" alignItems="center" position="fixed" top="10px" left="10px">
          <IconButton aria-label="Window" icon={<FaWindowMaximize />} size="lg" onClick={handleWindowClick} mb={2} />
          <IconButton aria-label="Search" icon={<FaSearch />} size="lg" onClick={handleSearchClick} mb={2} />
          <IconButton aria-label="Add" icon={<FaPlus />} size="lg" onClick={handleAddClick} />
        </Box>
        {elements.map((element, index) => (
          <Box key={index} p={4} borderWidth="1px" borderRadius="md" width="100%">
            {element}
          </Box>
        ))}
      </VStack>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Tool Window</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input placeholder="Type something..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={() => setIsModalOpen(false)}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Index;
