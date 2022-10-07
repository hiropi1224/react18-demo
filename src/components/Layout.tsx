import { Box } from '@chakra-ui/react';
import { FC } from 'react';
import { NavBar } from './NavBar';

type Props = {
  children: JSX.Element;
};

export const Layout: FC<Props> = ({ children }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <NavBar />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        {children}
      </Box>
    </Box>
  );
};
