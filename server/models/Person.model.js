const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const personSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
    },
    city: {
      type: String,
    },
    postCode: {
      type: Number,
    },
    email: {
      type: String,
    },
    phoneNumber: {
      type: Number,
    },
    informations: {
      type: String,
    },
    image: {
      type: String,
    },
    curriculumVitae: [{ type: Schema.Types.ObjectId, ref: "CurriculumVitae" }],
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Person = model("Person", personSchema);

module.exports = Person;
