import mongoose, { models, Schema } from "mongoose";

const profileSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    realState: { type: String, required: true },
    price: { type: Number, required: true },
    constructionDate: { type: Date, required: true },
    category: {
      type: String,
      enum: ["villa", "apartment", "store", "office"], //any thing else returns error
      required: true,
    },
    amenities: { type: [String], default: [] },
    rules: { type: [String], default: [] },
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    published: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Profile = models.Profile || mongoose.model("Profile", profileSchema);

export default Profile;
