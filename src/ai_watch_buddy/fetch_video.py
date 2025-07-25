import asyncio
from pathlib import Path
from loguru import logger
from yt_dlp import YoutubeDL
import argparse


def download_video(url: str, target_dir: str | Path) -> Path:
    """
    Download *url* into *target_dir* and return the final file path.
    Raises RuntimeError if the file was not produced.
    """

    logger.info(f"Downloading video from {url} to {target_dir}")

    target_dir = Path(target_dir).expanduser().resolve()
    target_dir.mkdir(parents=True, exist_ok=True)

    ydl_opts = {
        "format": "bestvideo+bestaudio/best",  # merge streams if needed
        "paths": {"home": str(target_dir)},  # save in target_dir
        "outtmpl": "%(title)s.%(ext)s",  # nicer names than default
        "quiet": True,  # no console spam
        "merge_output_format": "mp4",  # force mp4 output
    }

    with YoutubeDL(ydl_opts) as ydl:
        info = ydl.extract_info(url, download=True)
        final_path = target_dir / Path(ydl.prepare_filename(info)).name
        if not info:
            raise RuntimeError("Download failed: no info returned")

        if not final_path:
            raise RuntimeError(
                "Download failed: could not determine final filename from yt-dlp info"
            )

    if not final_path.exists():
        raise RuntimeError(
            f"Download appears to have failed. File not found: {final_path}"
        )

    return final_path


async def download_video_async(url: str, target_dir: str | Path) -> Path:
    return await asyncio.to_thread(download_video, url, target_dir)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Download a video using yt-dlp.")
    parser.add_argument("url", help="Video URL to download")
    parser.add_argument(
        "-d", "--dir", default="downloads", help="Target directory (default: downloads)"
    )
    args = parser.parse_args()

    try:
        path = asyncio.run(download_video_async(args.url, args.dir))
        print(f"Downloaded to: {path}")
    except Exception as e:
        print(f"Error: {e}")
