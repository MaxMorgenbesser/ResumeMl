import { List } from "antd";
import "../../../src/App.css"
export default function ResumeSearchCarousel({ filebase64Array }) {
  return (
    <div id='resume-list'>
    <List>
      {filebase64Array.map((base) => (
            <List.Item key={base._id}>
        
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
