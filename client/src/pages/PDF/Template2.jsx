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

const styles = StyleSheet.create({});

function Template2({ person123, curriculum }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <Text>Person Informatio</Text>
          {person123.image && (
            <Image
              src={person123.image}
              style={{ width: "100px", height: "100px" }}
            />
          )}
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
        </View>

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

export default Template2;
