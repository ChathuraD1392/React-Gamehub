import { HStack, Image } from "@chakra-ui/react";
import image from "./assets/icon.png";
import ColorModeSwitch from "./components/ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="5px">
      <Image src={image} boxSize="50px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
