# AI Watch Buddy API Documentation

This document outlines the API endpoints and WebSocket communication protocol for AI Watch Buddy.

---

## 1. REST API

The REST API is used to initiate a viewing session.

### Create Session

Creates a new watching session, starts the background processing for generating AI actions, and returns a `session_id` to be used for the WebSocket connection.

- **URL**: `/api/v1/sessions`
- **Method**: `POST`
- **Status Code**: `202 Accepted`

#### Request Body

```json
{
  "video_url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  "start_time": 0,
  "end_time": null,
  "text": "你是个可爱的猫娘，你说的每句话都会以 “喵～～” 结尾",
  "character_id": "miao",
  "user_id": "user_123"
}
```

- `video_url` (string, **required**): The URL of the video to watch.
- `start_time` (float, optional): The start time in seconds. Defaults to `0.0`.
- `end_time` (float, optional): The end time in seconds. Defaults to `null` (end of video).
- `text` (string, optional): Additional text prompt from the user.
- `character_id` (string, **required**): The identifier for the desired AI character.
- `user_id` (string, optional): The identifier for the user.

#### Success Response (202 Accepted)

```json
{
  "session_id": "ses_a8d3f8b9c1e04a5f"
}
```

- `session_id` (string): A unique identifier for the session. Use this ID to connect to the WebSocket endpoint.

#### Error Responses

- **`422 Unprocessable Entity`**: Sent if the request data is well-formed but semantically incorrect.

  Example:
  ```json
  {
    "detail": {
      "error": "UNSUPPORTED_VIDEO_SOURCE",
      "message": "The provided video URL from 'vimeo.com' is not supported."
    }
  }
  ```

---

## 2. WebSocket API

The WebSocket API is used for real-time communication during the viewing session.

- **URL**: `/ws/{session_id}`
- **Example URL**: `ws://127.0.0.1:8000/ws/ses_a8d3f8b9c1e04a5f`

### Connection

The client should attempt to connect to this endpoint after successfully creating a session via the REST API. If the `session_id` is invalid or not found, the server will close the connection.

### Communication Flow

1.  **Client Connects**: The client establishes a WebSocket connection using the `session_id`.
2.  **Server Acknowledges**: The server waits for the background video processing to complete.
3.  **Server Notifies Ready**: Once processing is done, the server sends a `session_ready` message. If processing fails, it sends a `processing_error` message.
4.  **Real-time Interaction**:
    - The client periodically sends `timestamp_update` messages with the current video playback time.
    - The server listens for these updates and sends AI actions (`SPEAK`, `PAUSE_VIDEO`, etc.) when their `trigger_timestamp` is reached.
    - The client executes the received actions.
    - The client can notify the server about `action_completed` or `seek_update` events.

### Server-to-Client Messages

#### Session Ready

Indicates that the AI action script has been successfully generated and the server is ready to send actions.

```json
{
  "type": "session_ready"
}
```

#### Processing Error

Indicates that an error occurred while processing the video or generating actions.

```json
{
  "type": "processing_error",
  "error_code": "ACTION_GENERATION_FAILED",
  "message": "Failed to generate actions for the video: <details>"
}
```

#### AI Action

An action for the client to execute. The model for this is defined in `ai_actions.py`.

```json
{
  "id": "e0b02f90-8452-442c-a28a-77c8e8749c95",
  "trigger_timestamp": 0.5,
  "comment": "A comment explaining the action's purpose.",
  "action_type": "SPEAK",
  "text": "Hey, what is this video about?",
  "pause_video": true
}
```

### Client-to-Server Messages

#### Timestamp Update

Sent by the client to inform the server of the current video playback time. This is the primary message used to trigger AI actions.

```json
{
  "type": "timestamp_update",
  "timestamp": 123.45
}
```

#### Seek Update

Sent when the user manually changes the video's playback position (scrubbing). The server uses this to reset its internal state and determine the correct next action to send.

```json
{
  "type": "seek_update",
  "timestamp": 240.1
}
```

#### Action Completed

Sent by the client to acknowledge that it has finished executing a specific action.

```json
{
  "type": "action_completed",
  "action_id": "e0b02f90-8452-442c-a28a-77c8e8749c95"
}
```
