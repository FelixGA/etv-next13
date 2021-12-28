import Image from "next/image";

const images = [
  {
    index: 1,
    title: "ARI 458",
    image: require("../public/images/VW-e-Crafter-Front-300x225.jpg"),
    desc: "Hoher Komfort",
  },
  {
    index: 2,
    title: "ARI 145",
    image: require("../public/images/Stama-Maestro-Front-300x200.jpg"),
    desc: "Preisgünstig",
  },
  {
    index: 3,
    title: "ARI 802",
    image: require("../public/images/Maxus-eDeliver-3-Front-2-300x200.jpg"),
    desc: "Hoher Komfort",
  },
  {
    index: 4,
    title: "ARI 901",
    image: require("../public/images/Addax-MT-Laubgitter-Wiki-300x200.jpg"),
    desc: "Hohe Nutzlast",
  },
  {
    index: 5,
    title: "ARI 345",
    image: require("../public/images/ARI-458-Kipper-L-Heck-300x199.jpg"),
    desc: "Hohe Nutzlast",
  },
];
export default function BottomSliderCard() {
  return images.map((item, index) => (
    <div className="  mr-2 ml-6 " key={index}>
      <div className="w-80 ">
        <Image
          src={item.image}
          alt="picture"
          objectFit="cover"
          width={336}
          height={279}
          layout="responsive"
        />
        <div className="w-full h-14 bg-black-dark flex flex-col justify-center ">
          <h3 className="text-white text-2xl  text-center">{item.desc}</h3>
        </div>
      </div>
    </div>
  ));
}
