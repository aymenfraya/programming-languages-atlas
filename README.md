
site : https://aymenfraya.github.io/programming-languages-atlas/index.html

# Programming Languages Atlas 

After recently completing the **Cisco Networking Academy – Data Science Essentials Using Python** course, I wanted to apply the data analysis skills I had learned together with the front-end web development skills I had recently acquired. This project is the result of combining both fields into a single application.

## Overview

Programming Languages Atlas is an interactive web application that allows users to explore programming languages in an organized and dynamic way.

Instead of hardcoding the data, the application processes a CSV dataset using **Python** and **Pandas**, organizes the languages by their primary programming paradigm, exports the processed data into JSON files, and finally displays the content dynamically using JavaScript.

## Features

- Search programming languages instantly.
- Browse languages grouped by their programming paradigm.
- Read a brief description of each paradigm.
- Open a dedicated page for every programming language.
- View detailed language information, including:
  - Creator
  - Year of appearance
  - Primary paradigm
  - Typing discipline
  - Execution model
  - Primary use
  - File extension
  - About
  - Official website and learning resources
- Responsive user interface.

## Data Pipeline

```
CSV Dataset
      │
      ▼
Python + Pandas
      │
      ▼
Filtering & Data Processing
      │
      ▼
JSON Files
      │
      ▼
JavaScript Fetch API
      │
      ▼
Dynamic Website
```

## Technologies

**Front-End**

- HTML5
- CSS
- JavaScript

**Data Processing**

- Python
- Pandas


## Future Improvements

- Interactive statistics dashboard.
- Language comparison.
- Advanced filtering.
- Dark mode.
- Favorites using Local Storage.
