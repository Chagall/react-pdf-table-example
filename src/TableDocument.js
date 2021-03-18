import React from "react";
import { Page, Text, Document } from "@react-pdf/renderer";

const TableDocument = () => {
  return (
    <Document>
      <Page
        size="A4"
        orientation="portrait">
        <Text>Hello world</Text>
      </Page>
    </Document>
  );
};

export default TableDocument;
