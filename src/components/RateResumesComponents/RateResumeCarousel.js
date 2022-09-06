import { Button, Carousel, Input, Space, Spin, icons, Menu } from "antd";
import { useContext, useEffect, useState } from "react";
import { data } from "../../App";
// import "../../App.css";

// import "./RateResumeCss.css";

const contentStyle = {
  height: "1150px",
  lineHeight: "160px",
  color: "blue",
  textAlign: "center",
};

export default function RateResumeCarousel() {
  const [resumes, setResumes] = useState("");
  const [level, setLevel] = useState();
  const [score, setScore] = useState(null);
  const { userInfo } = useContext(data);
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  const updateRes = (id, userGrade, userInfo, level) => {
    console.log(id, userGrade, userInfo);

    fetch(`https://final-api-mam.web.app/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ score: userGrade, responses: 1, [`${level}`]: 1 }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetch("https://final-api-mam.web.app/getresumes")
      .then((res) => res.json())
      .then((data) => {
        setResumes(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleScoreButton(id, score, userInfo, level) {
    updateRes(id, score, userInfo, level);
    setScore("");
    console.log(id, score);
  }
  if (resumes) {
    return (
      <Carousel afterChange={onChange} className="resume--post-container">
        {resumes.map((resume) => {
          return (
            <div key={resume._id}>
              <h3>Score the resume between 1 and 100</h3>
              <Input
                className="ScoreInput"
                required
                max={100}
                min="-1"
                type="number"
                value={score}
                onChange={(e) => setScore(e.target.value)}
              ></Input>
              <h2>Is this person Entry-Level, Mid-Level or a Senior?</h2>
              <div id="levelbuttons-container">
                <Button
                  className="levelbutton"
                  type="primary"
                  onClick={() => setLevel("Entry-Level")}
                >
                  Entry-Level
                </Button>
                <Button
                  className="levelbutton"
                  type="primary"
                  onClick={() => setLevel("Mid-Level")}
                >
                  Mid-Level
                </Button>
                <Button
                  className="levelbutton"
                  type="primary"
                  onClick={() => setLevel("Senior")}
                >
                  Senior
                </Button>
              </div>
              <br />

              {score > 0 && score <= 100 && level && (
                <>
                <Button
                  type="primary"
                  id="CarouselButton"
                  onClick={() =>
                    handleScoreButton(
                      resume._id,
                      Number(score),
                      userInfo,
                      level
                    )
                  }
                >
                  Submit
                </Button>
                <br/>
                <br/>
                </>
              )}
              <embed
                src={resume.newRes.filebase64}
                width="1200px"
                height="200px"
                style={contentStyle}
              />
            </div>
          );
        })}
      </Carousel>
    );
  } else {
    return (
      <>
        <Space size="middle">
          <Spin size="small" />
          <Spin />
          <Spin size="large" />
        </Space>{" "}
      </>
    );
  }
}
