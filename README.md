# USGS Earthquake Data Visualisation Challenge

## Introduction

This project aims to create an interactive map to visualise earthquake data in relation to tectonic plate boundaries. The data used are provided by the United States Geological Survey (USGS) and the "GitHub - Tectonic Plates" repository.

## Project Overview

### Earthquake Visualization

The visualisation includes:
- **Markers**: Representing earthquakes, where the size of the marker reflects the magnitude and the color indicates the depth of the earthquake.
- **Popups**: Providing additional information about each earthquake, including its magnitude, location, and depth.
- **Legend**: Explaining the color coding used for earthquake depths.
- **Base Layers**: Multiple map styles to choose from, such as CartoDB Light, OpenStreetMap, Stamen Toner, Stamen Watercolor, and ESRI World Imagery.
- **Overlay Layers**: Toggleable layers to view earthquake data and tectonic plate boundaries.

### Plate Boundaries Visualization

An additional layer is provided to illustrate the relationship between tectonic plates and seismic activity. This layer is toggleable and can be visualized alongside the earthquake data.

## Usage

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/leaflet-challenge.git
   cd leaflet-challenge
   
```
2. **Serve the project**:
   Use Python's HTTP server to serve the files.
   ```bash
   python -m http.server 8000
   ```
   Then, open your browser and navigate to `http://localhost:8000`.

3. **Explore the map**:
   - Use the layer control to switch between different base maps.
   - Toggle the earthquake data and tectonic plate boundaries on and off.
   - Click on the markers to see detailed information about each earthquake.

## Repository Layout

The repository layout is as follows:

leaflet-challenge/
├── Resources/
│   ├── PB2002_boundaries.json
├── Starter_Code/
│   ├── static/
│   │   ├── css/
│   │   │   └── style.css
│   │   └── js/
│   │       └── logic.js
│   └── index.html
├── static/
│   ├── css/
│   │   └── style.css `This is the file that holds the final *.css code`
│   └── js/
│       └── logic_combined.js `This is the file that holds the final *.js code`
│       └── logic_part1.js `Archive`
│       └── logic_part2.js `Archive`
├── index.html `This is the file that holds the final *.html code`
└── README.md

## Acknowledgements

This project was completed as part of the UWA Data Analytics Bootcamp (2024). The earthquake data used in this project is provided by the [United States Geological Survey](http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) and [GitHub: Tectonic Plates](https://github.com/fraxen/tectonicplates).

---

# Appendix - Module 15 Challenge - using leaflet library instructions from course coordinators
UWA Data Analytics Bootcamp (2024) - USGS Earthquake Data Visualisation Challenge

**Due Thursday by 23:59**  
**Points: 100**  
**Submitting: a text entry box or a website URL**

## Background
The United States Geological Survey, or USGS for short, is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment, and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes.

The USGS is interested in building a new set of tools that will allow them to visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. In this challenge, you have been tasked with developing a way to visualize USGS data that will allow them to better educate the public and other government organizations (and hopefully secure more funding) on issues facing our planet.

## Before You Begin
1. Create a new repository for this project called `leaflet-challenge`. Do not add this Challenge to an existing repository.
2. Clone the new repository to your computer.
3. Inside your local git repository, create a directory for the Leaflet challenge. Use the folder names to correspond to the challenges: `Leaflet-Part-1` and `Leaflet-Part-2`.
4. This Challenge uses both HTML and JavaScript, so be sure to add all the necessary files. These will be the main files to run for analysis.
5. Push the above changes to GitHub.

## Files
Download the following files to help you get started:
[Module 15 Challenge files](https://static.bc-edx.com/data/dla-1-2/m15/lms/starter/Starter_Code.zip)

## Instructions
The instructions for this activity are broken into two parts:

- Part 1: Create the Earthquake Visualisation

- Part 2: Gather and Plot More Data (Optional with no extra points earning)

## Part 1: Create the Earthquake Visualisation

<img src="https://static.bc-edx.com/data/dla-1-2/m15/lms/img/2-BasicMap.jpg" alt="2-BasicMap" tabindex="0" role="button" aria-label="2-BasicMap. Click to Enlarge.">

Your first task is to visualize an earthquake dataset. Complete the following steps:

1. Get your dataset. To do so, follow these steps:
   - The USGS provides earthquake data in a number of different formats, updated every 5 minutes. Visit the [USGS GeoJSON Feed](http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) page and choose a dataset to visualise. 
     ![image](https://github.com/user-attachments/assets/ad5c9a7e-1334-44c3-a51d-d058157c10b6)
     
   - When you click a dataset (such as "All Earthquakes from the Past 7 Days"), you will be given a JSON representation of that data. Use the URL of this JSON to pull in the data for the visualization.
     ![image](https://github.com/user-attachments/assets/0ae078b2-ab4f-4779-8d0f-0660cfaf255f)
     
2. Import and visualize the data by doing the following:
   - Using Leaflet, create a map that plots all the earthquakes from your dataset based on their longitude and latitude.
      - Your data markers should reflect the magnitude of the earthquake by their size and the depth of the earthquake by color. Earthquakes with higher magnitudes should appear larger, and earthquakes with greater depth should appear darker in color.
      - *Hint: The depth of the earth can be found as the third coordinate for each earthquake.*
   
   - Include popups that provide additional information about the earthquake when its associated marker is clicked.
   - Create a legend that will provide context for your map data.
   - Your visualisation should look something like the preceding map.

---

## Part 2: Gather and Plot More Data (Optional with no extra points earning)

Plot a second dataset on your map to illustrate the relationship between tectonic plates and seismic activity. You will need to pull in this dataset and visualize it alongside your original data. Data on tectonic plates can be found at [GitHub: Tectonic Plates](https://github.com/fraxen/tectonicplates).

This part is completely optional; you can complete this part as a way to challenge yourself and boost your new skills.

The following image is an example screenshot of what you should produce:
![image](https://github.com/user-attachments/assets/015848fc-cb5b-4190-b1d3-e8b3e9cb3b59)

Perform the following tasks:
- Plot the tectonic plates dataset on the map in addition to the earthquakes.
- Add other base maps to choose from.
- Put each dataset into separate overlays that can be turned on and off independently.
- Add layer controls to your map.

## Requirements
These requirements apply only to "Part 1: Create the Earthquake Visualisation" as "Part 2" is optional with no extra points earning.

### Map (60 points)
- TileLayer loads without error (20 points)
- Connects to geojson API using D3 without error (20 points)
- Markers with size corresponding to earthquake magnitude (10 points)
- A legend showing the depth and their corresponding color (10 points)

### Data Points (40 points)
- Data points scale with magnitude level (10 points)
- Data points colors change with depth level (10 points)
- Each point has a tooltip with the Magnitude, the location and depth (10 points)
- All data points load in the correct locations (10 points)

## Grading
This assignment will be evaluated against the requirements and assigned a grade according to the following table:

| Grade | Points |
|-------|--------|
| A (+/-) | 90+   |
| B (+/-) | 80–89 |
| C (+/-) | 70–79 |
| D (+/-) | 60–69 |
| F (+/-) | < 60  |

## Submission
To submit your Challenge assignment, click Submit, and then provide the URL of your GitHub repository for grading.

**NOTE:**
You are allowed to miss up to two Challenge assignments and still earn your certificate. If you complete all Challenge assignments, your lowest two grades will be dropped. If you wish to skip this assignment, click Next, and move on to the next module.

Comments are disabled for graded submissions in Bootcamp Spot. If you have questions about your feedback, please notify your instructional staff or your Student Success Advisor. If you would like to resubmit your work for an additional review, you can use the Resubmit Assignment button to upload new links. You may resubmit up to three times for a total of four submissions.

**IMPORTANT:**
It is your responsibility to include a note in the README section of your repo specifying code source and its location within your repo. This applies if you have worked with a peer on an assignment, used code in which you did not author or create sourced from a forum such as Stack Overflow, or you received code outside curriculum content from support staff such as an Instructor, TA, Tutor, or Learning Assistant. This will provide visibility to grading staff of your circumstance in order to avoid flagging your work as plagiarized.

If you are struggling with a challenge assignment or any aspect of the academic curriculum, please remember that there are student support services available for you:
- Ask the class Slack channel/peer support.
- AskBCS Learning Assistants exist in your class Slack application.
- Office hours facilitated by your instructional staff before and after each class session.
- [Tutoring Guidelines](https://docs.google.com/document/d/1hTldEfWhX21B_Vz9ZentkPeziu4pPfnwiZbwQB27E90/edit?usp=sharing) - schedule a tutor session in the Tutor Sessions section of Bootcampspot - Canvas

If the above resources are not applicable and you have a need, please reach out to a member of your instructional team, your Student Success Advisor, or submit a support ticket in the Student Support section of your BCS application.

## References
Dataset created by the [United States Geological Survey](http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php).


