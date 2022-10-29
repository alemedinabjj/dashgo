import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export const Profile = ({ showProfileData = true }: ProfileProps) => (
  <Flex align="center">
    {showProfileData && (
      <Box mr="4" textAlign="right">
        <Text>Alexandre Medina</Text>
        <Text color="gray.300" fontSize="small">
          alesurf13@gmail.com
        </Text>
      </Box>
    )}
    <Avatar size="md" name="Alexandre Medina" src="https://github.com/alemedinabjj.png" />
  </Flex>
);
