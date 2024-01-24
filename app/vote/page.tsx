export default function Vote() {
  return (
    <div className="w-full overflow-y-auto overflow-x-hidden flex flex-col justify-center items-center h-full p-64 gap-24 max-[1000px]:p-24 bg-bg-1 border border-stroke-1 backdrop-blur-main rounded-out">
      <p className="text-body"></p>
      <div className="grid grid-cols-2 max-[1500px]:grid-cols-1 w-full h-fit mt-[900px] max-[1500px]:mt-[1824px] gap-24">
        <iframe
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FPypYvQ8crMOHM9YyL9BOaF%2FGlassmorphic-YouTube-Redesign%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D1-2%26viewport%3D0%252C0%252C1%26t%3DfDGISwmWnTjEZ4y3-1%26scaling%3Dscale-down%26starting-point-node-id%3D1%253A2%26show-proto-sidebar%3D1%26mode%3Ddesign"
          allowFullScreen
          className="w-full min-h-[900px] rounded-in"
        ></iframe>
        <iframe
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FHsa4MasTSgOcdck21bDEqb%2FNeumorphic-YouTube-Redesign%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D1-2%26viewport%3D0%252C0%252C1%26t%3DwOAV2FNRRhmyQ4KM-1%26scaling%3Dscale-down%26starting-point-node-id%3D1%253A2%26show-proto-sidebar%3D1%26mode%3Ddesign"
          allowFullScreen
          className="w-full min-h-[900px] rounded-in"
        ></iframe>
      </div>
      <h2 className="text-2 font-medium">Vote Here</h2>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSddB8gMRrZGxkINAqwY8Wk1Q6RUchfjodPpL3OWucLmvILh-g/viewform?embedded=true"
        width="512"
        height="550"
        className="min-h-[512px]"
      >
        Loading…
      </iframe>
    </div>
  );
}
