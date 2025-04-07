#!/bin/bash

# Create directories
mkdir -p builds/chrome
mkdir -p builds/firefox
mkdir -p builds/edge

# Package for Chrome
cp -r index.html styles.css script.js manifest.json icons builds/chrome/
cd builds/chrome
zip -r ../TabVista-chrome.zip *
cd ../..

# Package for Firefox
cp -r index.html styles.css script.js icons builds/firefox/
cp manifest-firefox.json builds/firefox/manifest.json
cd builds/firefox
zip -r ../TabVista-firefox.zip *
cd ../..

# Package for Edge
cp -r index.html styles.css script.js manifest.json icons builds/edge/
cd builds/edge
zip -r ../TabVista-edge.zip *
cd ../..

echo "Packages created in builds/ directory:"
echo "- TabVista-chrome.zip"
echo "- TabVista-firefox.zip"
echo "- TabVista-edge.zip" 