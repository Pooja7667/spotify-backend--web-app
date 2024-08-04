# Song App Backend

This is the backend for a song management application, built with Node.js, Express, and MongoDB. The API provides functionality for user authentication, and managing songs and playlists.

## Table of Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
  - [Authentication](#authentication)
  - [Songs](#songs)
  - [Playlists](#playlists)
- [License](#license)

## Requirements

- Node.js
- MongoDB

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/song-app-backend.git
   cd song-app-backend
 


 ## 2  Install the dependencies

 npm install

## 3 run the websit
 npm run dev

 <!-- ////////////////////// -->

 ## @ API EndPoaints
  
   # new  user resister

  POST /api/auth/register

  Request body: {
  "username": "your_username",
  "Email": "email",
  "password": "your_password"
}


  # Login a user
  
  POST /api/auth/login

  Request body:  {
  "username": "your_username",
  "password": "your_password"
}


# @ SONG

 # Get all songs
 GET /api/songs

# Add a new song
 POST /api/songs

Request body:{
  "title": "Song Title",
  "artist": "Song Artist",
  "album": "Song Album",
  "genre": "Song Genre",
  "duration": 300,
  "url": "http://songurl.com"
}

# Update a song
 PUT /api/songs/:id

 Request body:{
  "title": "Updated Song Title",
  "artist": "Updated Song Artist",
  "album": "Updated Song Album",
  "genre": "Updated Song Genre",
  "duration": 300,
  "url": "http://updatedsongurl.com"
}

# Delete a song
DELETE /api/songs/:id


## @ Playlist

# Get all playlists
GET /api/playlists

# Add a new playlist
POST /api/playlists

Request body:{
  "name": "Playlist Name",
  "description": "Playlist Description",
  "user": "User ObjectId",
  "songs": ["Song ObjectId 1", "Song ObjectId 2"]
}

# Update a playlist
PUT /api/playlists/:id

Request body:{
  "name": "Updated Playlist Name",
  "description": "Updated Playlist Description",
  "songs": ["Updated Song ObjectId 1", "Updated Song ObjectId 2"]
}

# Delete a playlist
DELETE /api/playlists/:id


http://localhost:5000/api/auth/register
http://localhost:5000/api/auth/login
http://localhost:5000/api/songs/
http://localhost:5000/api/playlists
http://localhost:5000/api/songs/66ae02977dbf26fa5e40859d

Deployed  link :https://spotify-backend-web-app-gntr.vercel.app/
