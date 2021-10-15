import { Document, Page, Text } from '@react-pdf/renderer';

import { PDFViewer } from '@react-pdf/renderer';
import Pdf from './Pdf.jsx';
import React from 'react';

export const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>


    <PDFViewer>
      <Pdf />
    </PDFViewer>

    <PDFViewer>
      <Document>
        <Page>
          <Text>
            You can edit this text and it will reload
          </Text>
        </Page>
      </Document>
    </PDFViewer>
  </div>
);
