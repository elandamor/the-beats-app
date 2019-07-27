import React from 'react';
import { Helmet } from 'react-helmet';
import { RouteComponentProps } from 'react-router-dom';

import { Inner, Page, Flex, Button, Modal } from '@app/components';
import { H3 } from '@app/typography';
import GetAlbums from '@app/containers/GetAlbums/Loadable';
import { FiSave } from 'react-icons/fi';
import AddAlbum from '@app/containers/AddAlbum/Loadable';

// import { makeDebugger } from '@app/utils';
// const debug = makeDebugger('Private');

interface IPrivateProps extends RouteComponentProps {}

/**
 * @render react
 * @name Private page
 * @description Private page.
 */

const Private = (props: IPrivateProps) => {
  return (
    <Page>
      <Helmet>
        <title>Private</title>
        <meta
          name="description"
          content="The page requires a user to be authenticated to view."
        />
      </Helmet>
      <Inner p={2}>
        <Flex alignItems="center">
          <Flex>
            <H3>Albums</H3>
          </Flex>
          <Flex flex="none">
            <Modal trigger={<Button variant="icon" icon={<FiSave />} />}>
              <AddAlbum {...props} />
            </Modal>
          </Flex>
        </Flex>
        <GetAlbums />
      </Inner>
    </Page>
  );
};

export default Private;
