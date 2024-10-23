import { Container } from "react-bootstrap";
import Header from "./Components/Header";
import Navv from "./Components/Navbar";
import Catagory from "./Components/Catagory";
import Cardlist from "./Components/Cardlist";
import { items } from "./data";
import { useState } from "react";
function App() {
  const [itemsData, setItemsData] = useState(items);
  // Search Filter
  const filterSearch = (text) => {
    if (text !== "") {
      const result = items.filter((item) => item.title.includes(text));
      setItemsData(result);
    }
  };
  // Get All Cat Uniqe
  const allCatagory = ["الكل", ...new Set(items.map((i) => i.catagory))];
  // Filter by Catagory
  const filterbycatagory = (cat) => {
    if (cat === "الكل") {
      setItemsData(items);
    } else {
      const newArr = items.filter((item) => item.catagory === cat);
      setItemsData(newArr);
    }
  };

  return (
    <div className="App">
      <Navv filterSearch={filterSearch} />
      <Container>
        <Header />
        <Catagory
          allCatagory={allCatagory}
          filterbycatagory={filterbycatagory}
        />
        <Cardlist itemsData={itemsData} />
      </Container>
    </div>
  );
}

export default App;
