import Icon from "@chakra-ui/icon";
import { HStack, Text } from "@chakra-ui/layout";
import React, { useState } from "react";
import { IconType } from "react-icons";
import { GoPrimitiveDot } from "react-icons/all";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router";
type Props = {
  icon: IconType;
  text: string;
  link: string;
};
const MenuItem = ({ icon, text, link }: Props) => {
  const [color, setColor] = useState("primary.700");
  const navigate = useNavigate();
  const location = useLocation();
  const currentLocation = location.pathname === link;
  return (
    <HStack
      _hover={{ cursor: "pointer" }}
      onMouseOver={() => setColor("blue.500")}
      onMouseOut={() => setColor("primary.700")}
      py={4}
      onClick={() => navigate(link)}
    >
      <Icon as={icon} color={color} w={6} h={6} />
      <Text fontSize="xl" color={color}>
        {text}
      </Text>
      {currentLocation && (
        <Icon as={GoPrimitiveDot} color="blue.500" w={6} h={6} />
      )}
    </HStack>
  );
};

export default MenuItem;