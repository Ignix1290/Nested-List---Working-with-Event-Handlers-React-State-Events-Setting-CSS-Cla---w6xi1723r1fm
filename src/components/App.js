import React, { Component, useState } from "react";
import "./../styles/App.css";
// Do not alter the states const and values inside it.
const states = [
  {
    name: "Madhya Pradesh",
    cities: [
      {
        name: "Indore",
        towns: [
          {
            name: "Mhow",
          },
          {
            name: "Dewas",
          },
        ],
      },
      {
        name: "Bhopal",
        towns: [
          {
            name: "Manit",
          },
          {
            name: "Berasia",
          },
        ],
      },
      {
        name: "Gwalior",
        towns: [
          {
            name: "Ajaypur",
          },
        ],
      },
    ],
  },
  {
    name: "Jharkhand",
    cities: [
      {
        name: "Dhanbad",
        towns: [
          {
            name: "IIT(ISM) Dhanbad",
          },
          {
            name: "Hirapur",
          },
        ],
      },
      {
        name: "Wasseypur",
        towns: [
          {
            name: "Sardar khan's",
          },
          {
            name: "Faizal khan's",
          },
        ],
      },
      {
        name: "Mirzapur",
        towns: [
          {
            name: "Kaleen bhaiya's",
          },
          {
            name: "Guddu bhaiya's",
          },
        ],
      },
    ],
  },
  {
    name: "Assam",
    cities: [
      {
        name: "Guwhati",
        towns: [
          {
            name: "Amin",
          },
          {
            name: "Jalah",
          },
        ],
      },
      {
        name: "Jungle1",
        towns: [
          {
            name: "Tiger found at IIT Guwahati",
          },
          {
            name: "Leopard found in IIT Guwahati",
          },
        ],
      },
      {
        name: "Tezpur",
        towns: [
          {
            name: "Dibrugarh",
          },
          {
            name: "Silchar",
          },
        ],
      },
    ],
  },
  {
    name: "Bihar",
    cities: [
      {
        name: "Patna",
        towns: [
          {
            name: "Sonpur",
          },
          {
            name: "Maner",
          },
        ],
      },
      {
        name: "Gaya",
        towns: [
          {
            name: "Bakraur",
          },
          {
            name: "Barachatti",
          },
        ],
      },
      {
        name: "Darbhanga",
        towns: [
          {
            name: "Singhwara",
          },
          {
            name: "Jale",
          },
        ],
      },
    ],
  },
];
function App() {
  const [showCities, setShowCities] = useState(0);
  const [showTown, setShowTowns] = useState(0);
  function expandState(e) {
    console.log("state");
    if(showCities == e.target.id[5]) {
      setShowCities(0);
    } else {
      setShowCities(e.target.id[5])
    }
    setShowTowns(0);
  }
  function expandCity(e) {
    console.log("city");
    e.stopPropagation();
    if(e.target.id[4] == showTown) {
      setShowTowns(0);
    } else {
      setShowTowns(e.target.id[4])
    }
  }
  return <div id="main">
    <ul>
      {states.map((state, index) => {
        return (
          <li id={`state${index+1}`} onClick={expandState}>
            {state.name}
            {(showCities != 0 && showCities == index + 1) &&
              <ul>
                {state.cities.map((city, cIndex) => {
                    return (
                      <li id={`city${cIndex+1}`} onClick={expandCity}>
                        {city.name}
                        {(showTown != 0 && showTown == cIndex + 1) &&
                          <ul>
                            {city.towns.map((town, tIndex) => {
                              return (
                                <li id={`town${tIndex+1}`}>{town.name}</li>
                              );
                            }) }
                          </ul>
                        }
                      </li>
                    );
                })}
              </ul>
            }
          </li>
        );
      })}
    </ul>
  </div>;
}
export default App;