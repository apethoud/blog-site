import Image from "next/image";
import { H1, H3 } from "../_UI-components/Headers";
import Text from "../_UI-components/Text";
import PlayPathMockup from "../../assets/playpath-mockup.png";
import UnisumMockup from "../../assets/unisum-mockup.png";
import PortfolioSiteAndAdminMockup from "../../assets/portfolio-site-and-admin-mockup.png"
import { Li, Ul } from "../_UI-components/Lists";
import { Link } from "../_UI-components/Links";

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
      "Javascript",
      "Typescript",
      "React Native",
      "Expo",
    ],
    checkItOutOn: [
      {
        name: "Github",
        url: "https://github.com/apethoud/playpath"
      }
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
      "Javascript",
      "Typescript",
      "React Native",
      "Expo",
    ],
    checkItOutOn: [
      {
        name: "Github",
        url: "https://github.com/apethoud"
      }
    ]
  },
  {
    id: 3,
    header: null,
    name: "Personal Portfolio Site and Admin Console",
    description: [
      "A personal portfolio site for myself with a blog and projects page, along with a protected admin console for creating and editing content.",
      "The admin console supports markdown when writing blog posts to easily mark content as headers, lists, links, and blockquotes, which will be shown accordingly on the portfolio site.",
    ],
    picAltText: "A Macbook Pro mockup of the portfolio site admin console beside an iPhone XR mockup of the portfolio site itself.",
    builtWith: [
      "Javascript",
      "Typescript",
      "React",
      "NextJS",
      "Supabase",
    ],
    checkItOutOn: [
      {
        name: "Github (Portfolio Site)",
        url: "https://github.com/apethoud/blog-site",
      },
      {
        name: "Github (Portfolio Admin Console)",
        url: "https://github.com/apethoud/blog-admin",
      }
    ]
  },
]

export default function Projects() {
  return (
    <div>
      {projects.map(project => (
        <>
          <div className="flex flex-col md:flex-row items-center mt-12 mb-24">
            <div className="w-full">
              {project.header && (
                <H3>{project.header}</H3>
              )}
              <H1>{project.name}</H1>
              {project.description.map(paragraph => (
                <Text>{paragraph}</Text>
              ))}
              <div>
                <Text>Built with:</Text>
                <Ul>
                  {project.builtWith.map(softwareName => (
                    <Li>{softwareName}</Li>
                  ))}
                </Ul>
              </div>
              <div>
                <Text>Check it out on:</Text>
                <Ul>
                  {project.checkItOutOn.map(item => (
                    <Li>
                      <Link
                        href={item.url}
                        openInNewTab>
                          {item.name}
                      </Link>
                    </Li>
                  ))}
                </Ul>
              </div>
            </div>
            <div className="w-full">
              <Image
                // TODO: Make src more scalable after hosting images in the cloud.
                src={project.name === "PlayPath" ? PlayPathMockup :
                  project.name === "Unisum" ? UnisumMockup : PortfolioSiteAndAdminMockup}
                className=""
                priority={true}
                alt={project.picAltText}
              />
            </div>
          </div>
        </>
      ))}
    </div>
  )
}