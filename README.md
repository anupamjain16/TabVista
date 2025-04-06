# TabVista - Modern Chrome New Tab Dashboard

Transform your new tab into a beautiful, functional dashboard with TabVista. Features weather updates, clock, todo list, and organized quick links - all in an elegant, modern interface.

## Features

- **Clean, Modern Interface**: Elegant design with both light and dark themes
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

## Usage

- **Theme Toggle**: Click the theme icon in the top right to switch between light and dark modes
- **Weather**: Allow location access when prompted to see weather information
- **Todo List**: 
  - Type in the input field and press Enter to add tasks
  - Click tasks to mark them as complete
  - Click the delete icon to remove tasks
- **Quick Links**: Click any link to open it in a new tab

## File Structure

```
TabVista/
├── manifest.json      # Extension configuration
├── index.html        # Main page structure
├── styles.css        # Styling and themes
├── script.js         # Functionality and features
└── README.md         # Documentation
```

## Permissions

The extension requires the following permissions:
- `geolocation`: For weather functionality
- `storage`: For saving todos and preferences

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