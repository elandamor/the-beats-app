import { Box, Flex } from '@app/components';
import React, { FC } from 'react';

/**
 * @render react
 * @name GetAlbum component
 * @description GetAlbum component.
 * @example
 * <GetAlbum />
 */

const Placeholder: FC<{}> = () => {
  return (
    <Box p="2" width="100%">
      <Flex alignItems="center">
        <Box
          bg="cardBorderColor"
          borderRadius="100%"
          mr="2"
          size="40px"
          flex="none"
        />
        <Box>
          <Flex bg="cardBorderColor" height="16px" width="100%" />
          <Flex bg="cardBorderColor" height="8px" width="70%" />
        </Box>
      </Flex>
    </Box>
  );
};

export default Placeholder;
