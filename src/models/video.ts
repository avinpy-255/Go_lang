import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const videoSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  url: { type: String, required: true },
  uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  uploadedAt: { type: Date, default: Date.now }
});

const Video = model('Video', videoSchema);

export default Video;
