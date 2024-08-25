import { Link } from "react-router-dom";

export interface VideoProps {
  video: {
    id: {
      videoId: string;
    };
    snippet: {
      publishedAt: Date;
      channelId: string;
      title: string;
      thumbnails: {
        high: {
          url: string;
        };
      };
      channelTitle: string;
      categoryId: string;
    };
  };
}

const VideoCard = ({ video }: VideoProps) => {
  const { id, snippet } = video;

  return (
    <div className="flex flex-col space-y-5 w-full">
      <Link to={`/video/${id.videoId}`}>
        <div className="relative">
          <img
            src={snippet?.thumbnails?.high?.url ? snippet?.thumbnails?.high?.url : "/src/assets/youtube.jpg"}
            alt={snippet.title}
            className="w-full object-cover aspect-video"
          />
        </div>
      </Link>
      <div className="space-y-2">
        <h1 className="text-sm">{snippet.title}</h1>
        <div>
          <Link
            to={`/channel/${snippet.channelId}`}
            className="text-sm text-muted-foreground"
          >
            <p>{snippet.channelTitle}</p>
          </Link>
          <span className="text-xs text-muted-foreground">
            {new Date(snippet.publishedAt).getMonth()} months ago
          </span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
