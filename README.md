# Boulder County Dems Field Team Map

Web map showing BCDP Field Precincts and Areas

- June 17, 2022
- Bruce Norikane
- Status: in development
- Version: 0.01

## Issues

- Attribution in L.map options not displaying

```
let options = {
  center: mapCenter,
  zoom: 11,
  zoomControl: true,
  attribution:
    '&copy; <a href="https:/https://www.bocodems.org/">&copy; 2022. Boulder County Democratic Party.</a> All rights reserved.',
};
```

## Features

### Minimum Viable Product

- Map Geo Features
  - x Boulder County roads and landmarks
  - x Boulder County Precincts
  - BCDP Field Areas
  - Boulder County border
- Map UI
  - x Zoomable
  - x scrollable
  - x Layer Control
    - x Toggle Geo Features visible/hidden
  - x Highlight Precinct
    - x on hover
    - x on click
  - Precinct # visible on map
  - Info Box
    - Precinct Number
    - ? Precinct data
    - ? PCP
    - ? AC

### Potential Enhancements

- CD, HD, SD borders

- Search for precinct

- Security

  - Access limited to BCDP Field Team
    - Field Team Leads
    - Area Coordinators
    - Precinct Organizers

- Field Team list

  - Area Coordinators
  - Precinct Organizers
  - Orphan Precincts
  - Orphan Areas

  - Menu
    - Go to BocoDems.org
    - Go to ODB?
    - Go to Field Team list?
    - Contact BCDP
    - Contact BCDP Field Team Leads
