import React from "react";
import { Page, Text, View, Document } from "@react-pdf/renderer";

const TableDocument = () => {

  const createTableHeader = () => {
    return (
      <View style={tableRowStyle} fixed>

        <View style={firstTableColHeaderStyle}>
          <Text style={tableCellHeaderStyle}>Column</Text>
        </View>

        <View style={tableColHeaderStyle}>
          <Text style={tableCellHeaderStyle}>Column</Text>
        </View>

        <View style={tableColHeaderStyle}>
          <Text style={tableCellHeaderStyle}>Column</Text>
        </View>

        <View style={tableColHeaderStyle}>
          <Text style={tableCellHeaderStyle}>Column</Text>
        </View>

        <View style={tableColHeaderStyle}>
          <Text style={tableCellHeaderStyle}>Column</Text>
        </View>
      </View>
    );
  };

  const createTableRow = () => {
    return (
      <View style={tableRowStyle}>

        <View style={firstTableColStyle}>
          <Text style={tableCellStyle}>Element</Text>
        </View>

        <View style={tableColStyle}>
          <Text style={tableCellStyle}>Element</Text>
        </View>

        <View style={tableColStyle}>
          <Text style={tableCellStyle}>Element</Text>
        </View>

        <View style={tableColStyle}>
          <Text style={tableCellStyle}>Element</Text>
        </View>

        <View style={tableColStyle}>
          <Text style={tableCellStyle}>Element</Text>
        </View>

      </View>
    );
  };

  return (
    <Document>
      <Page
        style={pageStyle}
        size="A4"
        orientation="portrait">

        <View style={tableStyle}>
          {createTableHeader()}
          {createTableRow()}
          {createTableRow()}
          {createTableRow()}
          {createTableRow()}
          {createTableRow()}
        </View>

      </Page>
    </Document>
  );

};

const pageStyle = {
  paddingTop: 16,
  paddingHorizontal: 40,
  paddingBottom: 56
};

const tableStyle = {
  display: "table",
  width: "auto"
};

const tableRowStyle = {
  flexDirection: "row"
};

const firstTableColHeaderStyle = {
  width: "20%",
  borderStyle: "solid",
  borderColor: "#000",
  borderBottomColor: "#000",
  borderWidth: 1,
  backgroundColor: "#bdbdbd"
};

const tableColHeaderStyle = {
  width: "20%",
  borderStyle: "solid",
  borderColor: "#000",
  borderBottomColor: "#000",
  borderWidth: 1,
  borderLeftWidth: 0,
  backgroundColor: "#bdbdbd"
};

const firstTableColStyle = {
  width: "20%",
  borderStyle: "solid",
  borderColor: "#000",
  borderWidth: 1,
  borderTopWidth: 0
};

const tableColStyle = {
  width: "20%",
  borderStyle: "solid",
  borderColor: "#000",
  borderWidth: 1,
  borderLeftWidth: 0,
  borderTopWidth: 0
};

const tableCellHeaderStyle = {
  textAlign: "center",
  margin: 4,
  fontSize: 12,
  fontWeight: "bold"
};

const tableCellStyle = {
  textAlign: "center",
  margin: 5,
  fontSize: 10
};

export default TableDocument;
