import React, { useEffect, useState } from "react";
import { Card, ListGroup, ListGroupItem, Badge } from "reactstrap";
import { Scrollbars } from "react-custom-scrollbars-2";
import "./CategorySection.css";

const CategorySection = ({ searchBrand, setSearchBrand, props }) => {
  const [toyotaBadge, setToyotaBadge] = useState("");
  const [mercedesBadge, setmercedesBadge] = useState("");
  const [bmwBadge, setbmwBadge] = useState("");
  const [hondaBadge, sethondaBadge] = useState("");
  const [hyundaiBadge, sethyundaiBadge] = useState("");
  const [teslaBadge, setteslaBadge] = useState("");
  const [fordBadge, setfordBadge] = useState("");
  const [audiBadge, setaudiBadge] = useState("");
  const [volkswagenBadge, setvolkswagenBadge] = useState("");
  const [porscheBadge, setporscheBadge] = useState("");
  const [nissanBadge, setnissanBadge] = useState("");
  const [ferrariBadge, setferrariBadge] = useState("");
  const [kiaBadge, setkiaBadge] = useState("");
  const [landroverBadge, setlandroverBadge] = useState("");
  const [miniBadge, setminiBadge] = useState("");

  const autos = [
    { display: "toyota", value: "toyota", badge: toyotaBadge },
    { display: "mercedes", value: "mercedes", badge: mercedesBadge },
    { display: "bmw", value: "bmw", badge: bmwBadge },
    { display: "honda", value: "honda", badge: hondaBadge },
    { display: "hyundai", value: "hyundai", badge: hyundaiBadge },
    { display: "tesla", value: "tesla", badge: teslaBadge },
    { display: "ford", value: "ford", badge: fordBadge },
    { display: "audi", value: "audi", badge: audiBadge },
    { display: "volkswagen", value: "volkswagen", badge: volkswagenBadge },
    { display: "porsche", value: "porsche", badge: porscheBadge },
    { display: "nissan", value: "nissan", badge: nissanBadge },
    { display: "ferrari", value: "ferrari", badge: ferrariBadge },
    { display: "kia", value: "kia", badge: kiaBadge },
    { display: "landrover", value: "landrover", badge: landroverBadge },
    { display: "mini", value: "mini", badge: miniBadge },
  ];

  useEffect(() => {
    var sum = props.map((auto) => auto.brand);
    let toyota = 0;
    let mercedes = 0;
    let bmw = 0;
    let honda = 0;
    let hyundai = 0;
    let tesla = 0;
    let ford = 0;
    let audi = 0;
    let volkswagen = 0;
    let porsche = 0;
    let nissan = 0;
    let ferrari = 0;
    let kia = 0;
    let landrover = 0;
    let mini = 0;

    for (let i = 0; i < sum.length; i++) {
      if (sum[i] === "toyota") toyota++;
      else if (sum[i] === "mercedes") mercedes++;
      else if (sum[i] === "bmw") bmw++;
      else if (sum[i] === "honda") honda++;
      else if (sum[i] === "hyundai") hyundai++;
      else if (sum[i] === "tesla") tesla++;
      else if (sum[i] === "ford") ford++;
      else if (sum[i] === "audi") audi++;
      else if (sum[i] === "volkswagen") volkswagen++;
      else if (sum[i] === "porsche") porsche++;
      else if (sum[i] === "nissan") nissan++;
      else if (sum[i] === "ferrari") ferrari++;
      else if (sum[i] === "kia") kia++;
      else if (sum[i] === "landrover") landrover++;
      else if (sum[i] === "mini") mini++;
      setToyotaBadge(toyota);
      setmercedesBadge(mercedes);
      setbmwBadge(bmw);
      sethondaBadge(honda);
      sethyundaiBadge(hyundai);
      setteslaBadge(tesla);
      setfordBadge(ford);
      setaudiBadge(audi);
      setvolkswagenBadge(volkswagen);
      setporscheBadge(porsche);
      setnissanBadge(nissan);
      setferrariBadge(ferrari);
      setkiaBadge(kia);
      setlandroverBadge(landrover);
      setminiBadge(mini);
    }
  }, []);

  return (
    <div>
      <Card className="CategorySection__page">
        <label className="CategorySection__title" for="exampleSelect">Otomobil</label>
        <Scrollbars style={{ width: 175, height: 275 }}>
          <ListGroup className="CategorySection__ListGroup">
            {autos.map((values) => (
              <div>
                <ListGroupItem
                  value={searchBrand}
                  onClick={(e) => setSearchBrand(values.value)}
                  className="justify-content-between"
                >
                  {values.display} <Badge pill>{values.badge}</Badge>
                </ListGroupItem>
              </div>
            ))}
          </ListGroup>
        </Scrollbars>
      </Card>
    </div>
  );
};

export default CategorySection;
