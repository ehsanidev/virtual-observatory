### *Virtual Observatory*

## Project Overview

This project creates a basic 3D environment mimicking an observatory's view of the night sky. Key features include:

- **Star Field**: A vast field of stars randomly positioned to simulate the night sky.
- **Interactive Elements**: Clicking anywhere on the screen triggers a surprise message.
- **Dynamic Movement**: The star field rotates slowly to create a sense of movement in space.

## Code Explanation

### Scene Setup
- A scene is created with a black background to simulate the night sky.

### Camera Setup
- A perspective camera is used with a field of view of 75 degrees, adjusted to the window's aspect ratio.

### Renderer Setup
- WebGL renderer is used with antialiasing for smoother graphics, sized to fit the browser window.

### Star Field
- A `BufferGeometry` is used for efficiency, with 10,000 stars positioned randomly within a cube of 2000 units side length.
- Stars are rendered as points with white color.

### Animation
- The `animate` function uses `requestAnimationFrame` for smooth animations, rotating the star field slightly each frame to give a sense of motion.

### Event Handling
- **Resize Event**: Adjusts the camera and renderer when the window size changes.
- **Click Event**: Adds a fun interactive element where clicking the screen shows a temporary "You Found Me!" message at the click position.
