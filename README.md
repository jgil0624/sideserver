# Game-Player API

A simple Node.js + Express + Mongoose REST API with two related collections:

.Game (has many Players)

.Player (belongs to a Game)

This project was built to practice  MongoDB/Mongoose CRUD operations, schema validation, and API routing.

# Project Structure
 game-player-api/
    .env
    server.js
models/
    Game.js
    Player.js
controllers/
    gameControllers.js
    playerControllers.js
routes/
    gameRoutes.js
    playerRoutes.js
README.md

# Features
. Mongoose Schemas
    . Game -> title, genre, releaseYear, isMultiplayer, players[]
    . Player -> gamerTag, age, region, game, isActive

. Has-a relationship
    . A Player has a Game
    . A Game has many Players

. Full CRUD for both models:
    . Create, Read(all + by ID), Update, Delete

. Validation
    . Required fields, unique gamer tags, enums, min/max rules

. Error handling for invalid requests

. Postman collection testing

# Installation
1. Clone Repo
    git clone <your-repo-url>

2. Install Dependecies:
    npm install

3. Create a .env file
    MONGO_URL=mongodb://127.0.0.1:27017//game_player_db 
    PORT=3000

4. Start server
    npm start

5. API runs on http://localhost:3000

# API Endpoints
Game Routes (/api/games)

POST / Create a new game
GET / Get all games
GET /:id Get game by ID
PUT /:id Update game
DELETE /:id Delete game

Sample Game (POST)
json
{
    "title": "Star Duel",
    "genre": "Action"
    "releaseYear": 2024,
    "isMultiplayer": true
}

Player Routes (/api/players)

POST / Create a new player
GET / Get all players
GET /:id Get player by ID
PUT /:id Update player
DELETE /:id Delete player

Sample Player (POST)
json
{
    "gamerTag": "JGIL_0624",
    "age": 24,
    "region": "NA",
    "game": "<GAME_ID>"
}

# Validation Examples
. Game must have a title and valid releaseYear
. Player gamerTag must be unique
. Age must be between 5-120
. Genre limited to : Action, RPG, Sports, Puzzle, Strategy, Other

# Tools Used
. Node.js
. Express.js
. MongoDB + Mongoose
. Postman (API testing)

# Screenshots (Optional for Grading)
. Postman screenshots showing successful CRUD operations
. MongoDB Compass view of your collections
Screenshots test for games and screenshots tests for players

# Completion Checklist
. Two related models (Game & Player)
. 3-5+ properties per model
. >4 data types used (String, Number, Boolean, ObjectId/Array)
. Full CRUD for both models
. Separated controllers & routes
. Postman tested
