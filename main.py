import uvicorn
from dotenv import load_dotenv

load_dotenv()


def main():
    """
    Starts the AI Watch Buddy server.
    """
    print("Starting AI Watch Buddy server...")
    # The 'app' object is imported from server.py
    # "ai_watch_buddy.server:app" tells uvicorn where to find the FastAPI instance
    uvicorn.run("src.ai_watch_buddy.server:app", host="0.0.0.0", port=8000, reload=True)


if __name__ == "__main__":
    main()
