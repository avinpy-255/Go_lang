import { Request, Response } from 'express';
import Video from '../models/video';

export const uploadVideo = async (req: Request, res: Response) => {
  try {
    const { title, url } = req.body;
    const video = new Video({ title, url, uploadedBy: req.user._id });
    await video.save();
    res.status(201).send({ message: 'Video uploaded successfully' });
  } catch (error) {
    res.status(500).send({ error: 'Failed to upload video' });
  }
};

export const deleteVideo = async (req: Request, res: Response) => {
  try {
    const videoId = req.params.id;
    const video = await Video.findById(videoId);
    if (!video) {
      return res.status(404).send({ error: 'Video not found' });
    }

    if (req.user.role !== 'super' && video.uploadedBy.toString() !== req.user._id.toString()) {
      return res.status(403).send({ error: 'Permission denied' });
    }

    await Video.findByIdAndDelete(videoId);
    res.status(200).send({ message: 'Video deleted successfully' });
  } catch (error) {
    res.status(500).send({ error: 'Failed to delete video' });
  }
};

export const getVideos = async (req: Request, res: Response) => {
  try {
    const videos = await Video.find({});
    res.status(200).send(videos);
  } catch (error) {
    res.status(500).send({ error: 'Failed to fetch videos' });
  }
};
