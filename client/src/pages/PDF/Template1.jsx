import React, { useState } from "react";
import {
  Page,
  Text,
  Image,
  Document,
  StyleSheet,
  Line,
  View,
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
    fontSize: "20pt",
    marginTop: "13%",
    borderBottom: "2px",
    borderBottomColor: "#e9f1f7",
    fontWeight: "700",
  },
  blueTitle1: {
    fontSize: "10pt",
    marginTop: "7%",
    fontWeight: "800",
  },
  blueParagraph: {
    fontSize: "8pt",
    marginTop: "3%",
    fontWeight: "300",
  },
});

function Template1({ person123, curriculum }) {
  return (
    <Document>
      <Page size="A4">
        <View style={styles.flexColumn}>
          <View style={styles.blueLabel}>
            {person123.image && (
              <Image src={person123.image} style={styles.imageStyle} />
            )}
            <View>
              <Text style={styles.blueTitle}>Contact</Text>
              {person123.phoneNumber && (
                <View>
                  <Text style={styles.blueTitle1}>Phone</Text>
                  <Text style={styles.blueParagraph}>
                    {person123.phoneNumber}
                  </Text>
                </View>
              )}
            </View>
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
          <Line />
          <View>
            <Text>Curriculum:</Text>

            {curriculum.experience &&
              curriculum.experience.map((item) => {
                console.log(item.tasks);
                return (
                  <View>
                    <View>
                      <Text>{item.profession}</Text>
                      <Text>
                        {item.startDate} - {item.endDate}
                      </Text>
                      <Text>
                        {item.city} - {item.country}
                      </Text>
                      {item.tasks &&
                        item.tasks.map((task) => {
                          return (
                            <View>
                              <Text>{task}</Text>
                            </View>
                          );
                        })}
                    </View>
                  </View>
                );
              })}

            <Line />
            <View>
              <Text>Education:</Text>
            </View>

            {curriculum.education &&
              curriculum.education.map((item) => {
                return (
                  <View>
                    <View>
                      <Text>{item.school}</Text>
                      <Text>{item.degree}</Text>
                      <Text>
                        {item.startDate} - {item.endDate}
                      </Text>
                      <Text>
                        {item.city} - {item.country}
                      </Text>
                    </View>
                  </View>
                );
              })}

            <Line />
            <View>
              <Text>Languages:</Text>
            </View>

            {curriculum.languages &&
              curriculum.languages.map((item) => {
                return (
                  <View>
                    <Text>
                      {item.language} - {item.level}
                    </Text>
                  </View>
                );
              })}

            <Line />
            <View>
              <Text>Skills:</Text>
            </View>

            {curriculum.skills &&
              curriculum.skills.map((item) => {
                return (
                  <View>
                    <Text>{item.skill}</Text>
                  </View>
                );
              })}
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default Template1;
