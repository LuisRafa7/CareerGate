const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const curriculumVitaeSchema = new Schema(
  {
    experience: [
      {
        profession: { type: String },
        startDate: { type: Date },
        endDate: { type: String },
        tasks: [{ type: String }],
        city: { type: String },
        country: { type: String },
      },
    ],
    education: [
      {
        school: { type: String },
        startDate: { type: Date },
        endDate: { type: String },
        degree: { type: String },
        city: { type: String },
        country: { type: String },
      },
    ],
    languages: [
      {
        level: { type: String },
        language: { type: String },
      },
    ],
    skills: [
      {
        skill: { type: String },
      },
    ],
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const CurriculumVitae = model("CurriculumVitae", curriculumVitaeSchema);

module.exports = CurriculumVitae;
