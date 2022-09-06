import {  List, Button } from "antd";
import "../../../src/App.css";

export default function ResumeSearchCarousel({
  filebase64Array,
  level,
  setSubmitted,
  submitted

}) {
  function shuffle(filebase64Array) {
    let currentIndex = filebase64Array.length,
      randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // And swap it with the current element.
      [filebase64Array[currentIndex], filebase64Array[randomIndex]] = [
        filebase64Array[randomIndex],
        filebase64Array[currentIndex],
      ];
    }

    return filebase64Array;
  }

  let base64 = shuffle(filebase64Array);

  return (
    <div id="resume-list">
    {submitted&&<Button onClick={()=>setSubmitted(false)}>Search again</Button>}
      <List>
        {base64 &&
          filebase64Array &&
          base64.map((base) => (
            <List.Item key={base._id} className="resume-container">
              {level === "Entry-Level" && base["Entry-Level"] ? (
                <h2>
                  {base["Entry-Level"]} person/s think this person is {level}
                </h2>
              ) : (
                <></>
              )}
              {(level === "Mid-Level") & base["Mid-Level"] ? (
                <h2>
                  {base["Mid-Level"]} person/s think this person is {level}
                </h2>
              ) : (
                <></>
              )}
              {level === "Senior" && base["Senior"] ? (
                <h2>
                  {base["Senior"]} person/s think this person is {level}
                </h2>
              ) : (
                <></>
              )}
              <embed
                src={base.newRes.filebase64}
                width="800px"
                height="700px"
              />
            </List.Item>
          ))}
      </List>
    </div>
  );
}
