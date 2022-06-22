import React, { useState } from "react";
import { Card, CardBody, Button } from "reactstrap";
import AutoCard from "../AutoCard/AutoCard";
import FilterSection from "../FilterSection/FilterSection";
import CategorySection from "../CategorySection/CategorySection";
import "./AutoList.css";

const AutoList = (props) => {
  const [searchBrand, setSearchBrand] = useState("");
  const [searchPrice, setSearchPrice] = useState("");
  const [searchPlace, setSearchPlace] = useState("");
  const [searchYear, setSearchYear] = useState("");
  const [searchGearType, setSearchGearType] = useState("");
  const [searchfuelType, setSearchfuelType] = useState("");
  const [searchkilometer, setSearchkilometer] = useState("");
  const [searchCaseType, setSearchCaseType] = useState("");
  const [searchColor, setSearchColor] = useState("");
  const [searchChangingAndPaint, setSearchChangingAndPaint] = useState("");
  const [searchTraction, setSearchTraction] = useState("");
  const [searchEngineCapacity, setSearchEngineCapacity] = useState("");
  const [searchMotorPower, setSearchMotorPower] = useState("");
  const [searchFromWho, setSearchFromWho] = useState("");
  const [searchDate, setSearchDate] = useState("");

  if (props.items.length === 0) {
    return <h2>No expenses found</h2>;
  }
  return (
    <div className="AutoList__page">
      <div className="FilterSection">
        <div className="CategorySection">
          <CategorySection
            props={props.items}
            searchBrand={searchBrand}
            setSearchBrand={setSearchBrand}
          />
        </div>
        <div className="FilterSection">
          <FilterSection
            searchPrice={searchPrice}
            setSearchPrice={setSearchPrice}
            searchYear={searchYear}
            setSearchYear={setSearchYear}
            searchPlace={searchPlace}
            setSearchPlace={setSearchPlace}
            searchGearType={searchGearType}
            setSearchGearType={setSearchGearType}
            searchfuelType={searchfuelType}
            setSearchfuelType={setSearchfuelType}
            searchkilometer={searchkilometer}
            setSearchkilometer={setSearchkilometer}
            searchCaseType={searchCaseType}
            setSearchCaseType={setSearchCaseType}
            searchColor={searchColor}
            setSearchColor={setSearchColor}
            searchChangingAndPaint={searchChangingAndPaint}
            setSearchChangingAndPaint={setSearchChangingAndPaint}
            searchTraction={searchTraction}
            setSearchTraction={setSearchTraction}
            searchEngineCapacity={searchEngineCapacity}
            setSearchEngineCapacity={setSearchEngineCapacity}
            searchMotorPower={searchMotorPower}
            setSearchMotorPower={setSearchMotorPower}
            searchFromWho={searchFromWho}
            setSearchFromWho={setSearchFromWho}
            searchDate={searchDate}
            setSearchDate={setSearchDate}
          />
        </div>
      </div>
      <div>
        <Card className="AutoList__Card">
          <CardBody className="AutoList__CardBody">
            <div style={{ width: "161px", marginLeft: "-16px" }}></div>
            <div style={{ width: "160px" }}>Model</div>
            <div style={{ width: "248.675px" }}>İlan Başlığı</div>
            <div style={{ width: "42.25px" }}>Yıl</div>
            <div style={{ width: "82.625px" }}>Kilometre</div>
            <div style={{ width: "71px" }}>Renk</div>
            <div style={{ width: "84.0375px" }}>Fiyat</div>
            <div style={{ width: "71px" }}>Tarih</div>
            <div style={{ width: "123px", marginRight: "-16px" }}>İl/İlçe</div>
          </CardBody>
        </Card>
        {props.items
          .filter((e) =>
            e.brand
              .toLocaleLowerCase()
              .includes(searchBrand.toLocaleLowerCase())
          )
          .filter((e) =>
            e.price
              .toLocaleLowerCase()
              .includes(searchPrice.toLocaleLowerCase())
          )
          .filter((e) =>
            e.place
              .toLocaleLowerCase()
              .includes(searchPlace.toLocaleLowerCase())
          )
          .filter((e) =>
            e.year.toLocaleLowerCase().includes(searchYear.toLocaleLowerCase())
          )
          .filter((e) =>
            e.gearType
              .toLocaleLowerCase()
              .includes(searchGearType.toLocaleLowerCase())
          )
          .filter((e) =>
            e.fuelType
              .toLocaleLowerCase()
              .includes(searchfuelType.toLocaleLowerCase())
          )
          .filter((e) =>
            e.kilometer
              .toLocaleLowerCase()
              .includes(searchkilometer.toLocaleLowerCase())
          )
          .filter((e) =>
            e.caseType
              .toLocaleLowerCase()
              .includes(searchCaseType.toLocaleLowerCase())
          )
          .filter((e) =>
            e.color
              .toLocaleLowerCase()
              .includes(searchColor.toLocaleLowerCase())
          )
          .filter((e) =>
            e.changingAndPaint
              .toLocaleLowerCase()
              .includes(searchChangingAndPaint.toLocaleLowerCase())
          )
          .filter((e) =>
            e.traction
              .toLocaleLowerCase()
              .includes(searchTraction.toLocaleLowerCase())
          )
          .filter((e) =>
            e.engineCapacity
              .toLocaleLowerCase()
              .includes(searchEngineCapacity.toLocaleLowerCase())
          )
          .filter((e) =>
            e.motorPower
              .toLocaleLowerCase()
              .includes(searchMotorPower.toLocaleLowerCase())
          )
          .filter((e) =>
            e.fromWho
              .toLocaleLowerCase()
              .includes(searchFromWho.toLocaleLowerCase())
          )
          .filter((e) =>
            e.date.toLocaleLowerCase().includes(searchDate.toLocaleLowerCase())
          )
          .map((autos) => (
            <AutoCard
              key={autos.id}
              id={autos.id}
              imageURL={autos.imageURL}
              model={autos.model}
              title={autos.title}
              year={autos.year}
              kilometer={autos.kilometer}
              color={autos.color}
              price={autos.price}
              date={autos.date}
              place={autos.place}
            />
          ))}
      </div>
    </div>
  );
};

export default AutoList;
