/**
 * Get the current host URL for API connections
 * If not localhost, use the current host; otherwise use localhost
 */
export function getApiBaseUrl(): string {
  if (typeof window === 'undefined') {
    // Server-side rendering fallback
    return 'http://127.0.0.1:8000';
  }

  const currentHost = window.location.hostname;
  const currentPort = window.location.port;
  const protocol = window.location.protocol;

  // Check if we're on localhost
  const isLocalhost = currentHost === 'localhost' || currentHost === '127.0.0.1';

  if (isLocalhost) {
    return 'http://127.0.0.1:8000';
  }

  // Use current host with port 8000
  const baseUrl = `${protocol}//${currentHost}:8000`;
  return baseUrl;
}

/**
 * Get the WebSocket URL based on the current host
 */
export function getWebSocketUrl(): string {
  if (typeof window === 'undefined') {
    // Server-side rendering fallback
    return 'ws://127.0.0.1:8000/ws';
  }

  const currentHost = window.location.hostname;
  const protocol = window.location.protocol;

  // Check if we're on localhost
  const isLocalhost = currentHost === 'localhost' || currentHost === '127.0.0.1';

  if (isLocalhost) {
    return 'ws://127.0.0.1:8000/ws';
  }

  // Use current host with WebSocket protocol
  const wsProtocol = protocol === 'https:' ? 'wss:' : 'ws:';
  const wsUrl = `${wsProtocol}//${currentHost}:8000/ws`;
  return wsUrl;
}

/**
 * Get the Live2D model URL based on the current host
 */
export function getLive2DModelUrl(modelPath: string = '/live2d-models/elaina/LSS.model3.json'): string {
  const baseUrl = getApiBaseUrl();
  return `${baseUrl}${modelPath}`;
}

/**
 * Get the appropriate base URL based on service type
 * @param primaryUrl - Primary base URL
 * @param secondaryUrl - Secondary base URL  
 * @param serviceType - Type of service ('session' | 'websocket' | 'live2d' | 'primary' | 'secondary')
 */
export function getServiceUrl(
  primaryUrl: string, 
  secondaryUrl: string, 
  serviceType: 'session' | 'websocket' | 'live2d' | 'primary' | 'secondary' = 'primary'
): string {
  switch (serviceType) {
    case 'session':
      return primaryUrl; // Sessions use primary URL
    case 'websocket':
      return primaryUrl; // WebSocket uses primary URL
    case 'live2d':
      return primaryUrl; // Live2D uses primary URL
    case 'secondary':
      return secondaryUrl;
    case 'primary':
    default:
      return primaryUrl;
  }
}