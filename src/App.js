import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const initialArray = [
    {
      text: "Zenatix gurgaon",
    },
    {
      text: "Zenatix gurgaon address",
    },
    {
      text: "Zenatix Solutions",
    },
    {
      text: "Zenatix, Sikanderpur, Sector 26, Gurugram, Haryana",
    },
    {
      text:
        "Zenatix Solutions Pvt. Ltd., Sikanderpur, Sector 26, Gurugram, Haryana",
    },
  ];
  const [arrayText, settextArray] = useState(initialArray);

  const [searchArea, setsearchArea] = useState("");
  const [filteredarrayText, setFilteredarrayText] = useState([]);
  const [textToAdd, setTextToAdd] = useState("");

  const onSearchChange = (event) => {
    setsearchArea(event.target.value);
  };

  const handleDeleteClick = (index) => {
    const newArray = [...arrayText];
    newArray.splice(index, 1);
    settextArray(newArray);
  };

  const handleAddTextChange = (e) => {
    setTextToAdd(e.target.value);
  };

  const addItem = () => {
    if (textToAdd === "") {
      alert("Empty Item can not be");
      return;
    } else {
      const newArray = [...arrayText, { text: textToAdd }];
      settextArray(newArray);
      setTextToAdd("");
    }
  };

  useEffect(() => {
    setFilteredarrayText(
      arrayText.filter((item) => {
        return item.text.toLowerCase().includes(searchArea.toLowerCase());
      })
    );
  }, [searchArea, arrayText]);

  return (
    <div className="app">
      <h1 style={{ color: "black", fontWeight: "bold", fontSize: "67px" }}>
        SearchBar
      </h1>
      <h5>Zenatix Assignment</h5>
      <input
        type="search"
        placeholder="Search"
        className="mt ba pa2"
        onChange={onSearchChange}
      />
      <div className="list center mt">
        {filteredarrayText.map((item, i) => (
          <div className="list-item pa2" key={i}>
            <span style={{ textAlign: "left" }}>{item.text}</span>
            <span>
              <button
                onClick={() => handleDeleteClick(i)}
                className="deleteButton"
              >
                Delete
              </button>
            </span>
          </div>
        ))}
        <div className="list-item pa2">
          <input
            type="text"
            placeholder="Add New"
            value={textToAdd}
            onChange={handleAddTextChange}
          />
          <button
            style={{ marginLeft: 5 }}
            className="addButton"
            onClick={addItem}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
