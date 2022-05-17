import { Box, chakra } from "@chakra-ui/react"
import { FC } from "react"
import { Keyframes, Scroll, SpringConfigs } from "scrollex"
import { AnimateFactory } from "../types/animateFactory"
import { BoxCanvas } from "./BoxCanvas"

const ScrollItem = chakra(Scroll.Item)

const keyframes: Keyframes = (context) => ({
  [context.section.leftAt("container-right") - context.container.width]: {
    translateX: -240,
  },
  [context.section.rightAt("container-left") + context.container.width]: {
    translateX: 240,
  },
})

const springs: SpringConfigs = {
  translateX: {
    mass: 0.01,
    stiffness: 200,
    damping: 5,
  },
}

type Props = {
  animateFactory: AnimateFactory
}

export const BoxArtwork: FC<Props> = (props) => {
  return (
    <Box h={"100%"} display={"inline-flex"} alignItems={"center"}>
      <Box overflow={"hidden"}>
        <ScrollItem keyframes={keyframes} springs={springs}>
          <Box h={"50vh"} w={"50vh"} minW={"400px"} minH={"400px"}>
            <BoxCanvas animateFactory={props.animateFactory} />
          </Box>
        </ScrollItem>
      </Box>
    </Box>
  )
}
