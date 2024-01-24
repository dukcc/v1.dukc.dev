import Image from "next/image";

export default function Vote() {
  return (
    <div className="w-full overflow-y-auto overflow-x-hidden flex flex-col justify-center items-center h-full p-64 gap-24 max-[1000px]:p-24 bg-bg-1 border border-stroke-1 backdrop-blur-main rounded-out">
      <h3 className="text-3 font-medium">Glassmorphic</h3>
      <div className="grid grid-cols-4 max-[1800px]:grid-cols-3 w-full h-fit mt-[932px] max-[1500px]:grid-cols-2 max-[1200px]:grid-cols-1 gap-24">
        <Image src={"/vote/glass/Home.png"} width={430} height={932} alt="image" className="w-full aspect-[9/19.5] h-auto" />
        <Image src={"/vote/glass/Short.png"} width={430} height={932} alt="image" className="w-full aspect-[9/19.5] h-auto" />
        <Image src={"/vote/glass/Video.png"} width={430} height={932} alt="image" className="w-full aspect-[9/19.5] h-auto" />
        <Image src={"/vote/glass/Sign In.png"} width={430} height={932} alt="image" className="w-full aspect-[9/19.5] h-auto" />
      </div>
      <h3 className="text-3 font-medium">Neumorphic</h3>
      <div className="grid grid-cols-4 max-[1800px]:grid-cols-3 w-full h-fit mt-[932px] max-[1500px]:grid-cols-2 max-[1200px]:grid-cols-1 gap-24">
        <Image src={"/vote/neu/Home.png"} width={430} height={932} alt="image" className="w-full aspect-[9/19.5] h-auto" />
        <Image src={"/vote/neu/Short.png"} width={430} height={932} alt="image" className="w-full aspect-[9/19.5] h-auto" />
        <Image src={"/vote/neu/Video.png"} width={430} height={932} alt="image" className="w-full aspect-[9/19.5] h-auto" />
        <Image src={"/vote/neu/Sign In.png"} width={430} height={932} alt="image" className="w-full aspect-[9/19.5] h-auto" />
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
