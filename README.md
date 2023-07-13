
# Crawler Node.js Task

This is a web crawler task I implemented using Node.js.

## Task Description

In this task, the goal was to build a web crawler. The focus was on implementing the crawler program and its associated functionalities.

### Crawler Program

The main entry point file for the crawler program is `crawlTask.js`. I implemented the `crawlUrls` function to crawl HTML files, extract links, and return them recursively up to the specified depth.

Key Features of the Crawler Program:
- Crawls HTML files and extracts links recursively.
- Handles the specified depth to limit the crawling process.
- Saves the results to a repository (in-memory map or object).
- Provides a way to subscribe to results once they're ready.
- Includes a simple log utility to log results as they become available.

## Setup

1. Make sure you have Node.js installed on your machine. You can download it from [here](https://nodejs.org/en/download/).
2. Clone or download this codebase to your local machine.
3. Open a terminal and navigate to the project directory.
4. Run `npm install` to install the dependencies.

## Getting Started

To run the crawler program and the HTTP services:

- Execute `npm run start:crawl` to run the task related to the crawler program.

You can modify the `crawlTask.js` file and explore the codebase to understand the implementation details of the web crawler.

Please note that the actual scraping logic of reading files or downloading URLs and extracting links was already implemented and not the focus of this task.


