import Image from "next/image";
import LinkButton from "@/components/LinkButton"

export default function Vote() {
  return (
    <div className="w-full overflow-y-auto overflow-x-hidden flex flex-col justify-center items-center h-full p-64 gap-24 max-[1000px]:p-24 bg-bg-1 border border-stroke-1 backdrop-blur-main rounded-out">
      <h3 className="text-3 font-medium">Glassmorphic</h3>
      <div className="grid grid-cols-4 max-[1800px]:grid-cols-3 w-full h-fit mt-[944px] max-[1500px]:grid-cols-2 max-[1500px]:mt-[2000px] max-[1200px]:grid-cols-1 gap-24">
        <Image src={"/vote/glass/Home.png"} width={430} height={932} alt="image" className="w-full aspect-[9/19.5] h-auto rounded-in" />
        <Image src={"/vote/glass/Short.png"} width={430} height={932} alt="image" className="w-full aspect-[9/19.5] h-auto rounded-in" />
        <Image src={"/vote/glass/Video.png"} width={430} height={932} alt="image" className="w-full aspect-[9/19.5] h-auto rounded-in" />
        <Image src={"/vote/glass/Sign In.png"} width={430} height={932} alt="image" className="w-full aspect-[9/19.5] h-auto rounded-in" />
      </div>
      <LinkButton text="Go to next page" link="/vote2" />
    </div>
  );
}
