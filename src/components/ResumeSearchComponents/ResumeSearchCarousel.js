import { List } from "antd";
import "../../../src/App.css";
export default function ResumeSearchCarousel({ filebase64Array, level }) {
  return (
    <div id="resume-list">
      <List>
        {filebase64Array.map((base) => (
          <List.Item key={base._id}>
            {level === "Entry-Level" && base["Entry-Level"] && (
              <h2>
                {base["Entry-Level"]} person/s think this person is {level}
              </h2>
            )}
            {(level === "Mid-Level") & base["Mid-Level"] && (
              <h2>
                {base["Mid-Level"]} person/s think this person is {level}
              </h2>
            )}
            {level === "Senior" && base["Senior"] && (
              <h2>
                {base["Senior"]} person/s think this person is {level}
              </h2>
            )}
            <embed src={base.newRes.filebase64} width="800px" height="700px" />
          </List.Item>
        ))}
      </List>
    </div>
  );
}
