import React from "react"

export default function VideoHome({ url }) {

  return (
    <video
      muted={true}
      webkit-playsinline={true}
      playsInline={true}
      preload="auto"
      autoPlay={true}
      loop={true}
      className="laptop:h-full   w-[100vw] xl:block"
    >
      <source src={url.videohome} type="video/mp4" />
      <track
        src="captions_en.vtt"
        kind="captions"
        srcLang="en"
        label="english_captions"
      />
      <track
        src="captions_es.vtt"
        kind="captions"
        srcLang="es"
        label="spanish_captions"
      />
    </video>
  )
}
