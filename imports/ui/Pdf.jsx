import { Document, Page, Text } from '@react-pdf/renderer';

import React from 'react';

const Pdf = (props) => {
  return     <Document>
  <Page>
    <Text>
      This one will not reload yooo
    </Text>
  </Page>
</Document>
};

export default Pdf;