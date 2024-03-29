"use client";
import Image from "next/image";
import data from "./natega.json";
import "./result.css";
import Link from "next/link";

export default function Resultpage({ params }) {
  const name = decodeURIComponent(params.fullName);
  const mainheadertxt = "كنيسة الشهيد ابادير واخته الشهيدة ايريني بأسيوط";
  const secondheadertxt = "مدرسة الشهيد اسطفانوس";
  const thirdheadertxt = "نتيجة الترم الاول";

  const matchingItem = data.find((item) => item.name.includes(name));

  const className = matchingItem.className;
  let totalResult = 0;
  let present = true;
  let qualified = true;
  let precentage = 0;
  let exactTotalResult,
    exactAlhanDegree,
    exactTaksDegree,
    exactCopticDegree,
    exactAkedaDegree = 0;
  const exactKodasDegree = 18;
  const exactClassDegree = 12;
  const exactTasbhaDegree = 18;

  const alhanAbsence = 0;
  const akedaAbsence = 0;
  const taksAbsence = 0;
  const copticAbsence = 0;
  const tasbhaAbsence = 0;
  let sumSubjects = 0;

  const alhan = matchingItem.alhan;
  const taks = matchingItem.taks;
  const coptic = matchingItem.coptic;
  const akeda = matchingItem.akeda;
  const kodas = matchingItem.kodasAbsence;
  const clas = matchingItem.classAbsence;
  const tasbha = matchingItem.tasbhaAbsence;

  if (className === "الشهيد ابانوب") {
    exactTotalResult = 70;
    exactAlhanDegree = 10;
    exactTaksDegree = 10;
    exactCopticDegree = 10;
    exactAkedaDegree = 10;
  } else if (
    className === "الشهيد كرياكوس" ||
    className === "المريمات كوجي" ||
    className === "الشهيده مهرائيل واباهور" ||
    className === "الشهيد فيلوثيؤس"
  ) {
    exactTotalResult = 90;
    exactAlhanDegree = 30;
    exactTaksDegree = 10;
    exactCopticDegree = 10;
    exactAkedaDegree = 10;
  } else if (
    className === "خورس ني انجيلوس" ||
    className === "خورس ني سيرافيم" ||
    className === "خورس ني شيروبيم"
  ) {
    exactTotalResult = 128;
    exactAlhanDegree = 30;
    exactTaksDegree = 20;
    exactCopticDegree = 20;
    exactAkedaDegree = 10;
  } else {
    exactTotalResult = 110;
    exactAlhanDegree = 30;
    exactTaksDegree = 20;
    exactCopticDegree = 20;
    exactAkedaDegree = 10;
  }

  if (
    matchingItem.alhan === -1 &&
    matchingItem.taks === -1 &&
    matchingItem.coptic === -1 &&
    matchingItem.akeda === -1
  ) {
    totalResult = 0;
    present = false;
  } else {
    if (matchingItem.alhan === -1) {
      // alhan -1
      if (matchingItem.taks === -1) {
        // alhan -1 taks -1
        if (matchingItem.coptic === -1) {
          // alhan -1 taks -1 coptic -1
          if (matchingItem.akeda === -1) {
            // alhan -1 taks -1 coptic -1 akeda -1
            sumSubjects =
              alhanAbsence + taksAbsence + copticAbsence + akedaAbsence;
            if (matchingItem.tasbhaAbsence === -1) {
              // alhan -1 taks -1 coptic -1 akeda -1 tasbha -1

              totalResult = sumSubjects + kodas + clas;
            } else {
              // alhan -1 taks -1 coptic -1 akeda -1 tasbha 1
              totalResult = sumSubjects + kodas + clas + tasbha;
            }
          } else {
            // alhan -1 taks -1 coptic -1 akeda 1
            sumSubjects = alhanAbsence + taksAbsence + copticAbsence + akeda;
            if (matchingItem.tasbhaAbsence === -1) {
              // alhan -1 taks -1 coptic -1 akeda 1 tasbha -1
              totalResult = sumSubjects + kodas + clas;
            } else {
              // alhan -1 taks -1 coptic -1 akeda 1 tasbha 1
              totalResult = sumSubjects + kodas + clas + tasbha;
            }
          }
        } else {
          // alhan -1 taks -1 coptic 1
          if (matchingItem.akeda === -1) {
            // alhan -1 taks -1 coptic 1 akeda -1
            sumSubjects = alhanAbsence + taksAbsence + coptic + akedaAbsence;
            if (matchingItem.tasbhaAbsence === -1) {
              // alhan -1 taks -1 coptic 1 akeda -1 tasbha -1
              totalResult = sumSubjects + kodas + clas;
            } else {
              // alhan -1 taks -1 coptic 1 akeda -1 tasbha 1
              totalResult = sumSubjects + kodas + clas + tasbha;
            }
          } else {
            // alhan -1 taks -1 coptic 1 akeda 1
            sumSubjects = alhanAbsence + taksAbsence + coptic + akeda;
            if (matchingItem.tasbhaAbsence === -1) {
              // alhan -1 taks -1 coptic 1 akeda 1 tasbha -1
              totalResult = sumSubjects + kodas + clas;
            } else {
              // alhan -1 taks -1 coptic 1 akeda 1 tasbha 1
              totalResult = sumSubjects + kodas + clas + tasbha;
            }
          }
        }
      } else {
        // alhan -1 taks 1
        if (matchingItem.coptic === -1) {
          // alhan -1 taks 1 coptic -1
          if (matchingItem.akeda === -1) {
            // alhan -1 taks 1 coptic -1 akeda -1
            sumSubjects = alhanAbsence + taks + copticAbsence + akedaAbsence;
            if (matchingItem.tasbhaAbsence === -1) {
              // alhan -1 taks 1 coptic -1 akeda -1 tasbha -1
              totalResult = sumSubjects + kodas + clas;
            } else {
              // alhan -1 taks 1 coptic -1 akeda -1 tasbha 1
              totalResult = sumSubjects + kodas + clas + tasbha;
            }
          } else {
            // alhan -1 taks 1 coptic -1 akeda 1
            sumSubjects = alhanAbsence + taks + copticAbsence + akeda;
            if (matchingItem.tasbhaAbsence === -1) {
              // alhan -1 taks 1 coptic -1 akeda 1 tasbha -1
              totalResult = sumSubjects + kodas + clas;
            } else {
              // alhan -1 taks 1 coptic -1 akeda 1 tasbha 1
              totalResult = sumSubjects + kodas + clas + tasbha;
            }
          }
        } else {
          // alhan -1 taks 1 coptic 1
          if (matchingItem.akeda === -1) {
            // alhan -1 taks 1 coptic 1 akeda -1
            sumSubjects = alhanAbsence + taks + coptic + akedaAbsence;
            if (matchingItem.tasbhaAbsence === -1) {
              // alhan -1 taks 1 coptic 1 akeda -1 tasbha -1
              totalResult = sumSubjects + kodas + clas;
            } else {
              // alhan -1 taks 1 coptic 1 akeda -1 tasbha 1
              totalResult = sumSubjects + kodas + clas + tasbha;
            }
          } else {
            // alhan -1 taks 1 coptic 1 akeda 1
            sumSubjects = alhanAbsence + taks + coptic + akeda;
            if (matchingItem.tasbhaAbsence === -1) {
              // alhan -1 taks 1 coptic 1 akeda 1 tasbha -1
              totalResult = sumSubjects + kodas + clas;
            } else {
              // alhan -1 taks 1 coptic 1 akeda 1 tasbha 1
              totalResult = sumSubjects + kodas + clas + tasbha;
            }
          }
        }
      }
    } else {
      // alhan 1
      if (matchingItem.taks === -1) {
        // alhan 1 taks -1
        if (matchingItem.coptic === -1) {
          // alhan 1 taks -1 coptic -1
          if (matchingItem.akeda === -1) {
            // alhan 1 taks -1 coptic -1 akeda -1
            sumSubjects = alhan + taksAbsence + copticAbsence + akedaAbsence;
            if (matchingItem.tasbhaAbsence === -1) {
              // alhan 1 taks -1 coptic -1 akeda -1 tasbha -1
              totalResult = sumSubjects + kodas + clas;
            } else {
              // alhan 1 taks -1 coptic -1 akeda -1 tasbha 1
              totalResult = sumSubjects + kodas + clas + tasbha;
            }
          } else {
            // alhan 1 taks -1 coptic -1 akeda 1
            sumSubjects = alhan + taksAbsence + copticAbsence + akeda;
            if (matchingItem.tasbhaAbsence === -1) {
              // alhan 1 taks -1 coptic -1 akeda 1 tasbha -1
              totalResult = sumSubjects + kodas + clas;
            } else {
              // alhan 1 taks -1 coptic -1 akeda 1 tasbha 1
              totalResult = sumSubjects + kodas + clas + tasbha;
            }
          }
        } else {
          // alhan 1 taks -1 coptic 1
          if (matchingItem.akeda === -1) {
            // alhan 1 taks -1 coptic 1 akeda -1
            sumSubjects = alhan + taksAbsence + coptic + akedaAbsence;
            if (matchingItem.tasbhaAbsence === -1) {
              // alhan 1 taks -1 coptic 1 akeda -1 tasbha -1
              totalResult = sumSubjects + kodas + clas;
            } else {
              // alhan 1 taks -1 coptic 1 akeda -1 tasbha 1
              totalResult = sumSubjects + kodas + clas + tasbha;
            }
          } else {
            // alhan 1 taks -1 coptic 1 akeda 1
            sumSubjects = alhan + taksAbsence + coptic + akeda;
            if (matchingItem.tasbhaAbsence === -1) {
              // alhan 1 taks -1 coptic 1 akeda 1 tasbha -1
              totalResult = sumSubjects + kodas + clas;
            } else {
              // alhan 1 taks -1 coptic 1 akeda 1 tasbha
              totalResult = sumSubjects + kodas + clas + tasbha;
            }
          }
        }
      } else {
        // alhan 1 taks 1
        if (matchingItem.coptic === -1) {
          // alhan 1 taks 1 coptic -1
          if (matchingItem.akeda === -1) {
            // alhan 1 taks 1 coptic -1 akeda -1
            sumSubjects = alhan + taks + copticAbsence + akedaAbsence;
            if (matchingItem.tasbhaAbsence === -1) {
              // alhan 1 taks 1 coptic -1 akeda -1 tasbha -1
              totalResult = sumSubjects + kodas + clas;
            } else {
              // alhan 1 taks 1 coptic -1 akeda -1 tasbha 1
              totalResult = sumSubjects + kodas + clas + tasbha;
            }
          } else {
            // alhan 1 taks 1 coptic -1 akeda 1
            sumSubjects = alhan + taks + copticAbsence + akeda;
            if (matchingItem.tasbhaAbsence === -1) {
              // alhan 1 taks 1 coptic -1 akeda 1 tasbha -1
              totalResult = sumSubjects + kodas + clas;
            } else {
              // alhan 1 taks 1 coptic -1 akeda 1 tasbha 1
              totalResult = sumSubjects + kodas + clas + tasbha;
            }
          }
        } else {
          // alhan 1 taks 1 coptic 1
          if (matchingItem.akeda === -1) {
            // alhan 1 taks 1 coptic 1 akeda -1
            sumSubjects = alhan + taks + coptic + akedaAbsence;
            if (matchingItem.tasbhaAbsence === -1) {
              // alhan 1 taks 1 coptic 1 akeda -1 tasbha -1
              totalResult = sumSubjects + kodas + clas;
            } else {
              // alhan 1 taks 1 coptic 1 akeda -1 tasbha 1
              totalResult = sumSubjects + kodas + clas + tasbha;
            }
          } else {
            // alhan 1 taks 1 coptic 1 akeda 1
            sumSubjects = alhan + taks + coptic + akeda;
            if (matchingItem.tasbhaAbsence === -1) {
              // alhan 1 taks 1 coptic 1 akeda 1 tasbha -1
              totalResult = sumSubjects + kodas + clas;
            } else {
              // alhan 1 taks 1 coptic 1 akeda 1 tasbha 1
              totalResult = sumSubjects + kodas + clas + tasbha;
            }
          }
        }
      }
    }

    present = true;
    precentage = ((totalResult / exactTotalResult) * 100).toFixed(0);
  }

  if (precentage >= 50) {
    qualified = true;
  } else {
    qualified = false;
  }

  if (!matchingItem) {
    return <div>لا يوجد اي بيانات</div>;
  }

  return (
    <div className="result">
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
      <div className="content">
        {present ? (
          <div className="gradesContent">
            <div className="namesHeade">
              <div>الاسم : {matchingItem.name}</div>
              <div>الفصل : {matchingItem.className}</div>
            </div>
            <div className="grades">
              <div className="container">
                <div className="subjectName">الالحان ({exactAlhanDegree})</div>
                <div className="subDeg">
                  {matchingItem.alhan === -1 ? (
                    <span className="absence">لم يحضر</span>
                  ) : (
                    matchingItem.alhan.toFixed(1)
                  )}
                </div>
              </div>
              <div className="container">
                <div className="subjectName">الطقس ({exactTaksDegree})</div>
                <div className="subDeg">
                  {matchingItem.taks === -1 ? (
                    <span className="absence">لم يحضر</span>
                  ) : (
                    matchingItem.taks.toFixed(1)
                  )}
                </div>
              </div>
              <div className="container">
                <div className="subjectName">القبطي ({exactCopticDegree})</div>
                <div className="subDeg">
                  {matchingItem.coptic === -1 ? (
                    <span className="absence"> لم يحضر</span>
                  ) : (
                    matchingItem.coptic.toFixed(1)
                  )}
                </div>
              </div>
              <div className="container">
                <div className="subjectName">العقيدة ({exactAkedaDegree})</div>
                <div className="subDeg">
                  {matchingItem.akeda === -1 ? (
                    <span className="absence">لم يحضر</span>
                  ) : (
                    matchingItem.akeda.toFixed(1)
                  )}
                </div>
              </div>
              <div className="container">
                <div className="subjectName">
                  الدرجة الكلية للمواد (
                  {exactAlhanDegree +
                    exactTaksDegree +
                    exactCopticDegree +
                    exactAkedaDegree}
                  )
                </div>
                <div className="subDeg">{sumSubjects.toFixed(1)}</div>
              </div>
              <div className="container">
                <div className="subjectName">غياب القداس</div>
                <div className="subDeg">
                  {(
                    (matchingItem.kodasAbsence / exactKodasDegree) *
                    100
                  ).toFixed(0)}{" "}
                  %
                </div>
              </div>
              <div className="container">
                <div className="subjectName">غياب الحصة</div>
                <div className="subDeg">
                  {(
                    (matchingItem.classAbsence / exactClassDegree) *
                    100
                  ).toFixed(0)}{" "}
                  %
                </div>
              </div>
              {exactTotalResult === 128 ? (
                <div className="container">
                  <div className="subjectName">غياب التسبحة</div>
                  <div className="subDeg">
                    {(
                      (matchingItem.tasbhaAbsence / exactTasbhaDegree) *
                      100
                    ).toFixed(0)}{" "}
                    %
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="total">
              <div className="totalResult">
                <div> الدرجة الكلية :</div>
                {totalResult.toFixed(1)} / {exactTotalResult}
              </div>
              <div className="precentage">
                <div>النسبة المئوية :</div>
                {precentage} %
              </div>
              <div
                className={`${qualified ? "text-green-800" : "text-red-800"}`}
              >
                {qualified ? "مؤهل" : "غير مؤهل"}
              </div>
            </div>
            <div className="buttons">
              <Link href={"/"}>نتيجة اخرى</Link>
            </div>
          </div>
        ) : (
          <div className="notPresent"> لم يؤدي الامتحان</div>
        )}
      </div>
    </div>
  );
}
