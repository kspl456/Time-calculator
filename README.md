# Time Calculator

A simple web app to calculate total video/course duration from multiple time entries.

Built using:

* HTML
* CSS
* JavaScript

---

## Features

* Add multiple video durations
* Supports:

  * `hh:mm:ss`
  * `mm:ss`
* Automatically calculates total duration
* Ignores empty lines
* Clean and simple UI

---

## Example Input

```text
1:20:30
45:10
2:05:00
```

## Output

```text
4h 10m 40s
```

---

## Project Structure

```text
project-folder/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## Future Improvements

* Playback speed option
* Study planning (hours/day)
* Completion days calculator
* Dark mode toggle
* Save previous calculations

---

## Why I Built This

I wanted a quick way to calculate the total duration of YouTube playlists and courses while planning my preparation schedule.

Normal calculators are not suitable for time calculations because time follows base-60 arithmetic.

This project solves that problem by converting everything into seconds internally.
