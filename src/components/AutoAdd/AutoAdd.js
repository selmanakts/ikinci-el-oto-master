import React, { useState, useEffect } from "react";
import { Button, FormGroup, Label, Input, Card } from "reactstrap";
import DUMMY_AUTO from "../../Data/Data";
import "./AutoAdd.css";
import Moment from "moment";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const AutoAdd = () => {
  const [data, setData] = useState([]);
  const [user] = useAuthState(auth);
  const [username, setUsername] = useState("");
  const [userGmail, setUserGmail] = useState("");
  const [userPhoto, setUserPhoto] = useState("");
  const [form, setForm] = useState({
    id: Math.random().toString(),
    price: "",
    date: Moment().format("MMM DD YY"),
    place: "",
    brand: "",
    model: "",
    year: "",
    kilometer: "",
    gearType: "",
    fuelType: "",
    caseType: "",
    engineCapacity: "",
    motorPower: "",
    traction: "",
    averageFuelConsumption: "",
    tank: "",
    changingAndPaint: "",
    swap: "",
    fromWho: "",
    color: "",
    title: "",
    description: "",
    imageURL: [],
  });

  const saveItem = () => {
    if (
      form.price === "" ||
      form.place === "" ||
      form.brand === "" ||
      form.model === "" ||
      form.year === "" ||
      form.kilometer === "" ||
      form.gearType === "" ||
      form.fuelType === "" ||
      form.caseType === "" ||
      form.engineCapacity === "" ||
      form.motorPower === "" ||
      form.traction === "" ||
      form.averageFuelConsumption === "" ||
      form.tank === "" ||
      form.changingAndPaint === "" ||
      form.swap === "" ||
      form.fromWho === "" ||
      form.color === "" ||
      form.title === "" ||
      form.description === "" ||
      form.imageURL.length === 0
    ) {
      alert("Tum alanlari doldurunuz");
      return;
    }

    const userInfo = auth.currentUser;
    let uname = form.username;
    let uGmail = form.userGmail;
    let uPhoto = form.userPhoto;
    if (userInfo != null) {
      uname = userInfo.displayName;
      uGmail = userInfo.email;
      uPhoto = userInfo.photoURL;
    }
    setUsername(uname);
    setUserGmail(uGmail);
    setUserPhoto(uPhoto);

    data.push({
      ...form,
      username: uname,
      userGmail: uGmail,
      userPhoto: uPhoto,
    });

    localStorage.setItem("data", JSON.stringify(data));

    setForm({
      price: "",
      place: "",
      brand: "",
      model: "",
      year: "",
      kilometer: "",
      gearType: "",
      fuelType: "",
      caseType: "",
      engineCapacity: "",
      motorPower: "",
      traction: "",
      averageFuelConsumption: "",
      tank: "",
      changingAndPaint: "",
      swap: "",
      fromWho: "",
      color: "",
      title: "",
      description: "",
      imageURL: ["", "", ""],
    });
  };

  useEffect(() => {
    getItem();
  }, []);

  const getItem = () => {
    const localData = localStorage.getItem("data") ?? [];
    if (localData.length === 0) {
      localData.push(...DUMMY_AUTO);
      setData(localData);
    } else {
      setData(JSON.parse(localData));
    }
  };

  return (
    <div>
      {user ? (
        <div>
          <Card className="AutoAdd__page">
            <Label style={{ margin: "auto", marginBottom: "-10px" }}>
              Resim
            </Label>
            <div className="AutoAdd__ImageAdd">
              <div className="AutoAdd__ImgFormGroup">
                <FormGroup className="AutoAdd__FormGroup">
                  <Input
                    style={{
                      width: "370px",
                      height: "120px",
                      marginTop: "15px",
                    }}
                    type="textarea"
                    name="text"
                    id="text"
                    placeholder="Enter image URL"
                    onChange={(event) =>
                      setForm({ ...form, imageURL: [event.target.value] })
                    }
                    value={form.imageURL[0]}
                  />
                </FormGroup>
                <FormGroup className="AutoAdd__FormGroup">
                  <Input
                    style={{
                      width: "370px",
                      height: "120px",
                      marginTop: "15px",
                    }}
                    type="textarea"
                    name="text"
                    id="text"
                    placeholder="Enter image URL"
                    onChange={(event) =>
                      setForm({
                        ...form,
                        imageURL: [form.imageURL[0], event.target.value],
                      })
                    }
                    value={form.imageURL[1]}
                  />
                </FormGroup>
                <FormGroup className="AutoAdd__FormGroup">
                  <Input
                    style={{
                      width: "370px",
                      height: "120px",
                      marginTop: "15px",
                    }}
                    type="textarea"
                    name="text"
                    id="text"
                    placeholder="Enter image URL"
                    onChange={(event) =>
                      setForm({
                        ...form,
                        imageURL: [
                          form.imageURL[0],
                          form.imageURL[1],
                          event.target.value,
                        ],
                      })
                    }
                    value={form.imageURL[2]}
                  />
                </FormGroup>
              </div>
            </div>
            <Label
              style={{
                margin: "auto",
                marginBottom: "-10px",
                marginTop: "20px",
              }}
            >
              Araç Seçimi
            </Label>
            <div className="AutoAdd__CarModel">
              <div className="AutoAdd__CarModelDiv1">
                <FormGroup style={{ marginLeft: "35px", width: "100px" }}>
                  <Label style={{ marginLeft: "40px" }}>Yıl</Label>
                  <Input
                    type="number"
                    name="year"
                    id="year"
                    onChange={(event) =>
                      setForm({ ...form, year: event.target.value })
                    }
                    value={form.year}
                  />
                </FormGroup>
                <FormGroup style={{ marginLeft: "35px", width: "170px" }}>
                  <Label style={{ marginLeft: "50px" }}>Yakıt Tipi</Label>
                  <Input
                    type="select"
                    name="text"
                    id="text"
                    onChange={(event) =>
                      setForm({ ...form, fuelType: event.target.value })
                    }
                    value={form.fuelType}
                  >
                    <option>Benzin</option>
                    <option>Dizel</option>
                    <option>Elektrik</option>
                    <option>Hibrit</option>
                    <option>LPG Ve Benzin</option>
                  </Input>
                </FormGroup>
                <FormGroup style={{ marginLeft: "35px", width: "150px" }}>
                  <Label style={{ marginLeft: "45px" }}>Marka</Label>
                  <Input
                    type="select"
                    name="text"
                    id="text"
                    placeholder="Enter brand"
                    onChange={(event) =>
                      setForm({ ...form, brand: event.target.value })
                    }
                    value={form.brand}
                  >
                    <option>toyota</option>
                    <option>mercedes</option>
                    <option>bmw</option>
                    <option>honda</option>
                    <option>hyundai</option>
                    <option>tesla</option>
                    <option>ford</option>
                    <option>audi</option>
                    <option>volkswagen</option>
                    <option>porsche</option>
                    <option>nissan</option>
                    <option>ferrai</option>
                    <option>kia</option>
                    <option>land-rover</option>
                    <option>mini</option>
                  </Input>
                </FormGroup>
                <FormGroup style={{ marginLeft: "35px", width: "300px" }}>
                  <Label style={{ marginLeft: "120px" }}>Model</Label>
                  <Input
                    type="text"
                    name="text"
                    id="text"
                    placeholder="Enter model"
                    onChange={(event) =>
                      setForm({ ...form, model: event.target.value })
                    }
                    value={form.model}
                  />
                </FormGroup>
                <FormGroup style={{ marginLeft: "35px", width: "150px" }}>
                  <Label style={{ marginLeft: "25px" }}>Motor Hacmi</Label>
                  <Input
                    type="number"
                    name="number"
                    id="number"
                    onChange={(event) =>
                      setForm({ ...form, engineCapacity: event.target.value })
                    }
                    value={form.engineCapacity}
                  />
                </FormGroup>
              </div>
              <div className="AutoAdd__CarModelDiv2">
                <FormGroup style={{ marginLeft: "35px", width: "150px" }}>
                  <Label style={{ marginLeft: "30px" }}>Motor Gücü</Label>
                  <Input
                    type="number"
                    name="number"
                    id="number"
                    onChange={(event) =>
                      setForm({ ...form, motorPower: event.target.value })
                    }
                    value={form.motorPower}
                  />
                </FormGroup>
                <FormGroup style={{ marginLeft: "35px", width: "180px" }}>
                  <Label style={{ marginLeft: "70px" }}>Çekiş</Label>
                  <Input
                    type="select"
                    name="text"
                    id="text"
                    placeholder="Enter traction"
                    onChange={(event) =>
                      setForm({ ...form, traction: event.target.value })
                    }
                    value={form.traction}
                  >
                    <option>4WD (Sürekli)</option>
                    <option>Arkadan İtiş</option>
                    <option>AWD (Elektronik)</option>
                    <option>Önden Çekiş</option>
                  </Input>
                </FormGroup>
                <FormGroup style={{ marginLeft: "35px", width: "200px" }}>
                  <Label style={{ marginLeft: "15px" }}>
                    Ortalama Yakıt Tüketimi
                  </Label>
                  <Input
                    type="number"
                    name="number"
                    id="number"
                    onChange={(event) =>
                      setForm({
                        ...form,
                        averageFuelConsumption: event.target.value,
                      })
                    }
                    value={form.averageFuelConsumption}
                  />
                </FormGroup>
                <FormGroup style={{ marginLeft: "35px", width: "100px" }}>
                  <Label style={{ marginLeft: "30px" }}>Depo</Label>
                  <Input
                    type="number"
                    name="number"
                    id="number"
                    onChange={(event) =>
                      setForm({ ...form, tank: event.target.value })
                    }
                    value={form.tank}
                  />
                </FormGroup>
              </div>
            </div>
            <Label
              style={{
                margin: "auto",
                marginBottom: "-10px",
                marginTop: "20px",
              }}
            >
              İlan Bilgileri
            </Label>
            <div className="AutoAdd__CarInfo">
              <div className="AutoAdd__CardInfoDiv1">
                <FormGroup style={{ marginLeft: "35px", width: "150px" }}>
                  <Label style={{ marginLeft: "50px" }}>Fiyat</Label>
                  <Input
                    type="number"
                    name="year"
                    id="year"
                    placeholder="Enter price"
                    onChange={(event) =>
                      setForm({ ...form, price: event.target.value })
                    }
                    value={form.price}
                  />
                </FormGroup>
                <FormGroup style={{ marginLeft: "35px", width: "150px" }}>
                  <Label style={{ marginLeft: "40px" }}>Kilometre</Label>
                  <Input
                    type="number"
                    name="year"
                    id="year"
                    onChange={(event) =>
                      setForm({ ...form, kilometer: event.target.value })
                    }
                    value={form.kilometer}
                  />
                </FormGroup>
                <FormGroup style={{ marginLeft: "35px", width: "180px" }}>
                  <Label style={{ marginLeft: "50px" }}>Vites Tipi</Label>
                  <Input
                    type="select"
                    name="text"
                    id="text"
                    onChange={(event) =>
                      setForm({ ...form, gearType: event.target.value })
                    }
                    value={form.gearType}
                  >
                    <option>Düz</option>
                    <option>Otomatik</option>
                    <option>Yarı Otomatik</option>
                  </Input>
                </FormGroup>
                <FormGroup style={{ marginLeft: "35px", width: "180px" }}>
                  <Label style={{ marginLeft: "50px" }}>Kasa Tipi</Label>
                  <Input
                    type="select"
                    name="text"
                    id="text"
                    onChange={(event) =>
                      setForm({ ...form, caseType: event.target.value })
                    }
                    value={form.caseType}
                  >
                    <option>Cabrio</option>
                    <option>Coupe</option>
                    <option>Hatchback/3</option>
                    <option>Hatchback/5</option>
                    <option>Jip</option>
                    <option>MPV</option>
                    <option>Pick-up</option>
                    <option>Roadster</option>
                    <option>Sedan</option>
                    <option>Station wagon</option>
                    <option>SUV</option>
                  </Input>
                </FormGroup>
              </div>
              <div className="AutoAdd__CardInfoDiv2">
                <FormGroup>
                  <Label>İlan Başlığı</Label>
                  <Input
                    type="text"
                    name="text"
                    id="text"
                    placeholder="Enter title"
                    onChange={(event) =>
                      setForm({ ...form, title: event.target.value })
                    }
                    value={form.title}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Açıklama</Label>
                  <Input
                    style={{ height: "160px" }}
                    type="textarea"
                    name="text"
                    id="text"
                    placeholder="Enter description"
                    onChange={(event) =>
                      setForm({ ...form, description: event.target.value })
                    }
                    value={form.description}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Adres</Label>
                  <Input
                    type="textarea"
                    name="text"
                    id="text"
                    placeholder="Enter place"
                    onChange={(event) =>
                      setForm({ ...form, place: event.target.value })
                    }
                    value={form.place}
                  />
                </FormGroup>
              </div>
            </div>
            <Label
              style={{
                margin: "auto",
                marginBottom: "-10px",
                marginTop: "20px",
              }}
            >
              Boya, Değişen, Tramer ve Diğer Bilgiler
            </Label>
            <div className="AutoAdd__CarTramerAndWho">
              <div className="AutoAdd__CarTramerAndWhoDiv1">
                <FormGroup style={{ marginLeft: "80px", width: "220px" }}>
                  <Label style={{ marginLeft: "60px" }}>Hasar Bilgisi</Label>
                  <Input
                    type="select"
                    name="text"
                    id="text"
                    placeholder="Enter changing and painting"
                    onChange={(event) =>
                      setForm({ ...form, changingAndPaint: event.target.value })
                    }
                    value={form.changingAndPaint}
                  >
                    <option>Ağır Hasarlı</option>
                    <option>Belirtilmemiş</option>
                    <option>Boyasız ve Değişensiz</option>
                    <option>Değişensiz</option>
                    <option>Tramersiz</option>
                  </Input>
                </FormGroup>
                <FormGroup style={{ marginLeft: "80px", width: "160px" }}>
                  <Label style={{ marginLeft: "60px" }}>Renk</Label>
                  <Input
                    type="select"
                    name="text"
                    id="text"
                    placeholder="Enter color"
                    onChange={(event) =>
                      setForm({ ...form, color: event.target.value })
                    }
                    value={form.color}
                  >
                    <option>altın</option>
                    <option>bej</option>
                    <option>beyaz</option>
                    <option>bordo</option>
                    <option>füme</option>
                    <option>gri</option>
                    <option>gri(gümüş)</option>
                    <option>gri(metalik)</option>
                    <option>gri(itanium)</option>
                    <option>kahverengi</option>
                    <option>kırmızı</option>
                    <option>lacivert</option>
                    <option>mavi</option>
                    <option>mavi(metalik)</option>
                    <option>mor</option>
                    <option>pembe</option>
                    <option>şampanya</option>
                    <option>sarı</option>
                    <option>siyah</option>
                    <option>turkuaz</option>
                    <option>green</option>
                    <option>turuncu</option>
                    <option>yeşil</option>
                    <option>yeşil(metalik)</option>
                    <option>diğer</option>
                  </Input>
                </FormGroup>
                <FormGroup style={{ marginLeft: "80px", width: "130px" }}>
                  <Label style={{ marginLeft: "40px" }}>Takas</Label>
                  <Input
                    type="select"
                    name="text"
                    id="text"
                    placeholder="Enter swap"
                    onChange={(event) =>
                      setForm({ ...form, swap: event.target.value })
                    }
                    value={form.swap}
                  >
                    <option>Yapılır</option>
                    <option>Yapılmaz</option>
                  </Input>
                </FormGroup>
                <FormGroup style={{ marginLeft: "80px", width: "170px" }}>
                  <Label style={{ marginLeft: "40px" }}>İlan Sahibi</Label>
                  <Input
                    type="select"
                    name="text"
                    id="text"
                    placeholder="Enter fromWho"
                    onChange={(event) =>
                      setForm({ ...form, fromWho: event.target.value })
                    }
                    value={form.fromWho}
                  >
                    <option>Sahibinden</option>
                    <option>Galeriden</option>
                    <option>Yetkili Bayiden</option>
                  </Input>
                </FormGroup>
              </div>
            </div>
          </Card>
          <Card className="AutoAdd__Button">
            <Button
              className="ProductAdd__button"
              color="success"
              onClick={saveItem}
            >
              EKLE
            </Button>
          </Card>
        </div>
      ) : (
        <div className="ProductAdd__signIn">
          <p>Lütfen Giriş yapınız</p>
        </div>
      )}
    </div>
  );
};

export default AutoAdd;
