# TabVista - Modern Chrome New Tab Dashboard

Transform your new tab into a beautiful, functional dashboard with TabVista. Features weather updates, clock, todo list, and organized quick links - all in an elegant, modern interface.

## Features

- **Clean, Modern Interface**: Elegant design with both light and dark themes (dark theme by default)
- **Real-time Clock**: Digital clock display with date
- **Weather Widget**: Current weather conditions and forecast (requires location permission)
- **Todo List**: Built-in task management with local storage
- **Quick Links**: Organized sections for frequently visited websites
  - Search Tools (Google, Bing, DuckDuckGo)
  - Development (GitHub, Stack Overflow, LeetCode)
  - AI Tools (ChatGPT, Bard, Midjourney)
  - Productivity (Notion, Trello, Calendar)
  - Entertainment (YouTube, Netflix, Spotify)
  - Learning (Udemy, Coursera, freeCodeCamp)
  - Tools & Utilities (Canva, Google Drive, WeTransfer)
- **Countdown Timer**: Track upcoming events
- **Pomodoro Timer**: Boost productivity with work/break cycles
- **Calendar**: Monthly view with date highlights
- **Inspirational Quotes**: Refreshed periodically

## Installation

### Local Installation (Developer Mode)

1. Download or clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" using the toggle in the top right corner
4. Click "Load unpacked"
5. Select the TabVista folder
6. The extension will be installed and will replace your new tab page

### Building for Distribution

1. Open Chrome and go to `chrome://extensions/`
2. Enable "Developer mode"
3. Click "Pack extension"
4. Browse to the TabVista folder
5. Click "Pack Extension"
6. This will create a `.crx` file and a `.pem` key file
   - Keep the `.pem` file safe for future updates
   - The `.crx` file can be distributed to users

### Building for Multiple Browsers

TabVista supports Chrome, Firefox, and Edge. To build for all platforms:

1. Make sure you have Bash and zip installed
2. Run the package script:
   ```
   ./package.sh
   ```
3. The script will create three zip files in the builds/ directory:
   - TabVista-chrome.zip: For Chrome browser
   - TabVista-firefox.zip: For Firefox browser
   - TabVista-edge.zip: For Edge browser

These packages can be submitted to their respective browser extension stores or installed manually.

## Usage

- **Default Theme**: TabVista uses a dark theme by default for a better viewing experience
- **Theme Toggle**: Click the theme icon in the top right to switch between light and dark modes
- **Weather**: Allow location access when prompted to see weather information
- **Todo List**: 
  - Type in the input field and press Enter to add tasks
  - Click tasks to mark them as complete
  - Click the delete icon to remove tasks
- **Quick Links**: Click any link to open it in a new tab
- **Countdown Timer**: Set event dates and track time remaining
- **Pomodoro Timer**: Customize work and break durations for productivity sessions
- **Air Quality**: Displays current air quality index when location is shared

## File Structure

```
TabVista/
├── manifest.json      # Extension configuration for Chrome/Edge
├── manifest-firefox.json # Firefox-specific manifest
├── index.html        # Main page structure
├── styles.css        # Styling and themes
├── script.js         # Functionality and features
├── package.sh        # Build script for all browsers
├── builds/           # Directory with built extensions
└── README.md         # Documentation
```

## Permissions

The extension requires the following permissions:
- `geolocation`: For weather functionality

## Development

### manifest.json
The extension uses Manifest V3 and includes:
- Basic extension information
- Required permissions
- New tab page override

### Customization
- Edit `styles.css` to modify themes and layout
- Modify `index.html` to add/remove quick links
- Update `script.js` to change functionality
- The default theme is dark, but users can toggle to light mode
- Theme preference is saved between sessions

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is open source and available under the MIT License.

## Support

For issues, questions, or contributions, please open an issue in the GitHub repository. 