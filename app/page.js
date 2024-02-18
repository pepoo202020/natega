"use client";
import Image from "next/image";
import "./mainPage.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import data from "./[fullName]/natega.json";

const Home = () => {
  const mainheadertxt = "كنيسة الشهيد ابادير واخته الشهيدة ايريني بأسيوط";
  const secondheadertxt = "مدرسة الشهيد اسطفانوس";
  const thirdheadertxt = "نتيجة الترم الاول";

  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [third, setThird] = useState("");
  const [fourth, setFourth] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fullName = first + " " + second + " " + third + " " + fourth;
    const matchingItem = data.find((item) => item.name.includes(fullName));

    if (matchingItem) {
      router.push(`/${fullName}`);
    } else {
      alert("من فضلك ادخل اسم صحيح");
      setFirst("");
      setSecond("");
      setThird("");
      setThird("");
      setFourth("");
    }
  };
  return (
    <main>
      <div className="mainHeader">
        <Image
          className="school"
          src="/2.png"
          alt="school logo"
          width={200}
          height={200}
        />
        <div className="middleHeader">
          <Image
            className="cross"
            src="/1.png"
            alt="church logo"
            width={100}
            height={100}
          />
          <h1 className="mainheaderText">{mainheadertxt}</h1>
          <h1 className="secondheadertext">{secondheadertxt}</h1>
          <h1 className="thirdheadertext">{thirdheadertxt}</h1>
        </div>

        <Image
          className="church"
          src="/11.png"
          alt="church logo"
          width={200}
          height={200}
        />
      </div>
      <div className="middleHeadermobile">
        <h1 className="mainheaderText">{mainheadertxt}</h1>
        <h1 className="secondheadertext">{secondheadertxt}</h1>
        <h1 className="thirdheadertext">{thirdheadertxt}</h1>
      </div>
      <div className="mainContent">
        <div className="content">
          <form onSubmit={handleSubmit}>
            <p>للتعرف على النتيجة يرجى ادخال الاسم رباعي</p>
            <div className="names">
              <div className="name">
                <div>الاسم الاول</div>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  placeholder="يرجي ادخال الاسم الاول"
                  required
                  value={first}
                  onChange={(e) => setFirst(e.target.value.replace(/\s/g, ""))}
                />
              </div>
              <div className="name">
                <div>الاسم الثاني</div>
                <input
                  type="text"
                  id="second_name"
                  name="second_name"
                  placeholder="يرجي ادخال الاسم الثاني"
                  required
                  value={second}
                  onChange={(e) => setSecond(e.target.value.replace(/\s/g, ""))}
                />
              </div>
              <div className="name">
                <div>الاسم الثالث</div>
                <input
                  type="text"
                  id="third_name"
                  name="third_name"
                  placeholder="يرجي ادخال الاسم الثالث"
                  value={third}
                  onChange={(e) => setThird(e.target.value.replace(/\s/g, ""))}
                />
              </div>
              <div className="name">
                <div>الاسم الرابع</div>
                <input
                  type="text"
                  id="fourth_name"
                  name="fourth_name"
                  placeholder="يرجي ادخال الاسم الرابع"
                  value={fourth}
                  onChange={(e) => setFourth(e.target.value.replace(/\s/g, ""))}
                />
              </div>
            </div>
            <button type="submit">اظهار النتيجة</button>
          </form>
        </div>
        <Image
          className="mainImage"
          src="/15.png"
          alt="main image logo"
          width={500}
          height={500}
        />
      </div>
    </main>
  );
};

export default Home;
