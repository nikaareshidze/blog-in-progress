import React from "react";

export default function News({ news }: any) {
  return (
    <div>
      <h1>{news.title}</h1>
      <h1>Words By {news.author}</h1>
    </div>
  );
}
