import React from "react";
import { Page, Text, View, Document } from "@react-pdf/renderer";

const VerticalTableDocument = () => {
  const createTableRow = (headerName, value, headerCellWidth, valueCellWidth) => {
    let tableColHeaderStyle = {
      width: `${headerCellWidth}%`,
      borderStyle: "solid",
      borderColor: "#000",
      borderBottomColor: "#000",
      borderWidth: 1,
      backgroundColor: "#bdbdbd",
    };
    
    let tableColStyle = {
      width: `${valueCellWidth}%`,
      borderStyle: "solid",
      borderColor: "#000",
      borderWidth: 1,
    };

    return (
      <View style={tableRowStyle} fixed>
        <View style={tableColHeaderStyle}>
          <Text style={tableCellHeaderStyle}>{headerName}</Text>
        </View>

        <View style={tableColStyle}>
          <Text style={tableCellStyle}>{value}</Text>
        </View>

      </View>
    );
  };

  return (
    <Document>
      <Page style={pageStyle} size="A4" orientation="portrait">
        <View style={tableStyle}>
          {createTableRow("Height","1,78m", 20, 20)}
          {createTableRow("Shoulder","21cm", 20, 20)}
          {createTableRow("Arms","36cm", 20, 20)}
        </View>
      </Page>
    </Document>
  );
};

const pageStyle = {
  paddingTop: 16,
  paddingHorizontal: 40,
  paddingBottom: 56,
};

const tableStyle = {
  display: "table",
  width: "auto",
};

const tableRowStyle = {
  flexDirection: "row",
};

const tableCellHeaderStyle = {
  textAlign: "center",
  margin: 4,
  fontSize: 12,
  fontWeight: "bold",
};

const tableCellStyle = {
  textAlign: "center",
  margin: 5,
  fontSize: 10,
};

export default VerticalTableDocument;
