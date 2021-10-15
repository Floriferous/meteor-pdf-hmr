import { Document, Page, Text } from '@react-pdf/renderer';

import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';
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
            You can edit this document and it will reload yoo
          </Text>
        </Page>
      </Document>
    </PDFViewer>
  </div>
);
