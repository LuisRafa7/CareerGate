import React from "react";
import {
  Page,
  Text,
  Image,
  Document,
  StyleSheet,
  Line,
  View,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({});

function Template1({ person123, curriculum }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <Text>Person Informatio</Text>
          <Image src={person123.image} />
          <Text>Informations: {person123.informations}</Text>
          <Line />
          <Text>Name: {person123.name}</Text>
          <Text>Email: {person123.email}</Text>
          <Line />
          <Text>Addres: {person123.adress}</Text>
          <Text>Post Code: {person123.postCode}</Text>
          <Text>City: {person123.city}</Text>
          <Line />
        </View>

        <Text
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>
    </Document>
  );
}

export default Template1;
