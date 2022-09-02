export default function ResumeSearchCarousel({ filebase64Array }) {
  return (
    <>
      {filebase64Array.map((base) => (
        <embed
          key={base._id}
          src={base.newRes.filebase64}
          width="800px"
          height="2100px"
        />
      ))}
    </>
  );
}
