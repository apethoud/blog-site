import Image from "next/image";
import { H1, H3 } from "../_UI-components/Headers";
import Text from "../_UI-components/Text";
import PlayPathMockup from "../../assets/playpath-mockup.png";
import UnisumMockup from "../../assets/unisum-mockup.png";

const projects = [
  {
    id: 1,
    header: "Featured Project:",
    name: "PlayPath",
    description: [
      "PlayPath helps parents of young kids find great parks to visit while traveling. Users can enter a destination address and the app will find kid-friendly parks along their route.",
      "Currently in development with a projected release date of October 2023."
    ],
    picAltText: "An iPhone mockup of PlayPath's Park Selection View, Search Criteria View, and Welcome Page.",
    builtWith: [
      "Typescript",
      "React",
      "Expo",
    ]
  },
  {
    id: 2,
    header: null,
    name: "Unisum",
    description: [
      "Unisum is a number puzzle game for iOS and Android devices. Players must choose from a list of math operations to apply to all numbers in a row or column of the grid, with the goal of making each number match the goal number of the level.",
      "The game offers 100 puzzles of varying difficulty. Currently in development."
    ],
    picAltText: "An iPhone mockup of Unisum's gameplay and menu.",
    builtWith: [
      "Typescript",
      "React",
      "Expo",
    ]
  }
]

export default function Projects() {
  return (
    <div>
      {projects.map(project => (
        <div className="flex flex-col md:flex-row mt-12 mb-24">
          <div className="w-full">
            {project.header && (
              <H3>{project.header}</H3>
            )}
            <H1>{project.name}</H1>
            {project.description.map(paragraph => (
              <Text>{paragraph}</Text>
            ))}
          </div>
          <div className="w-full">
            <Image
              // TODO: Make src more scalable after hosting images in the cloud.
              src={project.name === "PlayPath" ? PlayPathMockup : UnisumMockup}
              className=""
              // style={{ objectFit: "contain" }}
              priority={true}
              alt={project.picAltText}
            />
          </div>
        </div>
      ))}
    </div>
  )
}