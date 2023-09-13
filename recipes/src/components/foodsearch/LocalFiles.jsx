import React, { useEffect, useState } from "react";
import "../../css/ascdesc.css";
import "../../css/local.css";
import Addcart from "../../loaders/modal/Addcart";
import { Rings } from "react-loader-spinner";
// import Addsorts from "./Addsorts";
// import Pagination from "../../custom/Pagination";

const Localfiles = () => {
  const [loading, setLoading] = useState(false);
  const [inputsearch, setinputsearch] = useState("yogurt");
  const [foodstores, setfoodstores] = useState([]);
  const [addcartspoon, setaddcartspoon] = useState([]);

  const [inputloader, setinputLoader] = useState("loader...");

  const handleSearchFood = async () => {
    console.log("e.target.value");
    // const apikey = process.env.apikeyverify;
    // {process.env.NODE_ENV === 'development' ? process.env.REACT_APP_DEV_MODE : process.env.apikeyverify}
    try {
      const datas = await fetch(
        `https://api.spoonacular.com/food/products/search?apiKey=729156a799914269b59cacd3b718b152&query=${inputsearch}`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
          },
        }
      );
      const searchresult = await datas.json();
      console.log("saerc", searchresult.status);
      if (searchresult.status === "failure") {
        return setLoading(false);
      }
      setLoading(true);
      setfoodstores(searchresult.products);
    } catch (err) {
      setinputLoader("error");
    }
  };

  const handleSortAsc = () => {
    const sortquery = foodstores.sort((a, b) => {
      let sorta = a.title.toLowerCase();
      let sortb = b.title.toLowerCase();

      if (sorta < sortb) {
        return -1;
      }
      if (sorta > sortb) {
        return 1;
      }
      return 0;
    });
    console.log("sorting", sortquery);
    setfoodstores([...sortquery]);
  };

  const handleSortDesc = () => {
    const sortquery = foodstores.sort((a, b) => {
      let sorta = a.title.toLowerCase();
      let sortb = b.title.toLowerCase();

      if (sorta > sortb) {
        return -1;
      }
      if (sorta < sortb) {
        return 1;
      }
      return 0;
    });
    console.log("sorting", sortquery);
    setfoodstores([...sortquery]);
  };

  const handlecartbtn = (e, item) => {
    e.preventDefault();
    setaddcartspoon([...addcartspoon, item]);
  };

  useEffect(() => {
    setTimeout(() => {
      handleSearchFood();
    }, 1000);
  }, [inputsearch]);

  return (
    <React.Fragment>
      <Addcart addcarting={addcartspoon} />
      <div className="foodinputcontainer">
        <div>
          <input
            type="text"
            className="foodsearchinput"
            value={inputsearch}
            onChange={(e) => setinputsearch(e.target.value)}
            placeholder="search food"
          />
        </div>
        <button className="addsortAsc" onClick={handleSortAsc}>
          Asc
        </button>
        <button className="addsortAsc" onClick={handleSortDesc}>
          Desc
        </button>

        {loading ? (
          foodstores.map((item, index) => {
            return (
              <>
                {/* className="foodstore" */}
                <div className="foodstore" key={item.id}>
                  <p>{index}</p>
                  <p>id = {item.id}</p>
                  <p>title = {item?.title}</p>
                  <img src={item?.image} alt="curd" />
                  <button
                    className="addcartshow"
                    onClick={(e) => handlecartbtn(e, item)}
                  >
                    add on cart
                  </button>
                </div>
              </>
            );
          })
        ) : (
          <div style={{ marginLeft: "79vh" }}>
            <span>
              {" "}
              <p style={{ marginLeft: "-92vh" }}>{inputloader}</p>
              <Rings color="#00BFFF" height={180} width={180} />
            </span>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Localfiles;
