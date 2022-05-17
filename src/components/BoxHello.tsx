import { Box, Stack, Text } from "@chakra-ui/react"
import { FC } from "react"

export const BoxHello: FC = () => {
  return (
    <Box h={"100%"}>
      <Stack
        h={"100%"}
        w={"50vw"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box px={8}>
          <Text>{"this is the text"}</Text>
        </Box>
      </Stack>
    </Box>
  )
}
