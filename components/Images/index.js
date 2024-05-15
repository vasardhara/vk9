import Image from "next/image";

function ImageView({
  src,
  width = 500,
  height = 300,
  alt = "image",
  className,
  loading = "lazy",
}) {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        sizes="100vw"
        width={width}
        height={height}
        loading={loading}
        className={className}
      />
    </>
  );
}

export default ImageView;