import mongoose from "mongoose";

const Schema = mongoose.Schema;

const NewsSchema = new Schema(
  {
    title: {
      type: String
    },
    body: {
      type: String
    },
    url: {
      type: String
    },
    time: {
      type: String
    },
    origin: {
      type: String
    },
    imgurl: {
      type: String
    },
    bodysum: {
      type: String
    },
    hasgraphimg: {
      type: Boolean
    },
    entitiesintitle: [{ label: String, text: String }],
    personlist: [String],
    orglist: [String],
    prodlist: [String]
  },
  { collection: "news_ner_sum" }
);

export default mongoose.model("news", NewsSchema);
