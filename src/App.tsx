import { chakra } from "@chakra-ui/react"
import { FC } from "react"
import { Scroll } from "scrollex"
import { hello } from "./animations/hello"
import { BoxArtwork } from "./components/BoxArtwork"
import { BoxEnd } from "./components/BoxEnd"
import { BoxHello } from "./components/BoxHello"
import { AnimateFactory } from "./types/animateFactory"

const ScrollSection = chakra(Scroll.Section)

const ScrollContainer = chakra(Scroll.Container)

type Artwork = {
  id: string
  animateFactory: AnimateFactory
}

const artworks: Artwork[] = [
  { id: "a", animateFactory: hello },
  { id: "b", animateFactory: hello },
  { id: "c", animateFactory: hello },
  { id: "d", animateFactory: hello },
  { id: "e", animateFactory: hello },
  { id: "f", animateFactory: hello },
  { id: "g", animateFactory: hello },
  { id: "h", animateFactory: hello },
]

const App: FC = () => {
  return (
    <ScrollContainer
      scrollAxis={"x"}
      throttleAmount={0}
      width={"100vw"}
      height={"100vh"}
    >
      <ScrollSection height={"100vh"}>
        <BoxHello />
      </ScrollSection>
      {artworks.map((artwork) => {
        return (
          <ScrollSection key={artwork.id} height={"100vh"} mx={8}>
            <BoxArtwork animateFactory={artwork.animateFactory} />
          </ScrollSection>
        )
      })}
      <ScrollSection height={"100vh"}>
        <BoxEnd />
      </ScrollSection>
    </ScrollContainer>
  )
}

export default App
