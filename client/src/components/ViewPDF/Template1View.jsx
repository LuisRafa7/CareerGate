import React from "react";
import { PDFViewer } from "@react-pdf/renderer";
import Template1 from "../../pages/PDF/Template1";
import {
  Page,
  Text,
  Image,
  Document,
  StyleSheet,
  View,
  Font,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: { margin: "100px" },
  blueLabel: {
    backgroundColor: "#36454f",
    width: "35%",
    color: "#e9f1f7",
    height: "100%",
    paddingLeft: "4%",
    paddingTop: "4%",
  },
  flexColumn: { display: "flex", flexDirection: "row", height: "100%" },
  imageStyle: {
    width: "150px",
    borderRadius: "50%",
    height: "150px",
  },
  blueTitle: {
    fontFamily: "Open Sans",
    fontSize: "20pt",
    marginTop: "12%",
    borderBottom: "2px",
    borderBottomColor: "#e9f1f7",
    fontWeight: "extrabold",
  },
  blueTitle1: {
    fontFamily: "Open Sans",
    fontSize: "10pt",
    marginTop: "6%",
    fontWeight: "extrabold",
  },
  blueParagraph: {
    fontSize: "8pt",
    marginTop: "3%",
  },
  whiteTitle: {
    fontFamily: "Open Sans",
    color: "#36454f",
    fontSize: "40pt",
    fontWeight: "extrabold",
    paddingBottom: "0px",
    marginBottom: "0px",
  },
  whiteTitle1: {
    fontFamily: "Open Sans",
    color: "#36454f",
    fontSize: "20pt",
    paddingTop: "0px",
    marginTop: "-3%",
  },
  whiteTitleText: {
    fontFamily: "Open Sans",
    color: "#36454f",
    fontSize: "10pt",
    paddingTop: "0px",
    marginTop: "0%",
    marginBottom: "5%",
  },
  whiteLabel: {
    backgroundColor: "#e9f1f7",
    width: "75%",
    paddingLeft: "4%",
    paddingRight: "4%",
    paddingTop: "4%",
    height: "100%",
  },
  whiteTitlePage: {
    fontFamily: "Open Sans",
    fontSize: "20pt",
    color: "#36454f",
    marginTop: "12%",
    borderBottom: "2px",
    borderBottomColor: "#36454f",
    fontWeight: "extrabold",
  },
  whiteTitlePage1: {
    fontFamily: "Open Sans",
    fontSize: "10pt",
    marginTop: "6%",
    fontWeight: "extrabold",
    color: "#36454f",
  },
  whiteTitlePage2: {
    fontFamily: "Open Sans",
    fontSize: "9pt",
    color: "#36454f",
  },
  whiteTitlePage3: {
    fontFamily: "Open Sans",
    fontSize: "12pt",
    fontWeight: "extrabold",
    color: "#36454f",
  },
  borderLeft: {
    borderLeft: "1px",
    borderLeftColor: "#36454f",
    borderTopLeftRadius: "50%",
    paddingLeft: "3%",
  },
  whiteTitleText: {
    fontFamily: "Open Sans",
    fontSize: "8pt",
    color: "#36454f",
    paddingLeft: "3%",
  },
});

function Template1View({ person123, curriculum }) {
  return (
    <PDFViewer style={{ width: "70%", height: "700px" }}>
      <Template1 person123={person123} curriculum={curriculum} />
    </PDFViewer>
  );
}

export default Template1View;
