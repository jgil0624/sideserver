import Game from '../models/Game.js';
import Player from '../models/Player.js';

// Create a new game
export const createGame = async (req, res) => {
    try {
        const game = new Game(req.body);
        await game.save();
        res.status(201).json(game);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all games
export const getAllGames = async (req, res) => {
    try {
        const games = await Game.find().populate('players', 'name email');
        res.status(200).json(games);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single game by ID
export const getGameById = async (req, res) => {
    try {
        const game = await Game.findById(req.params.id).populate('players', 'name email');
        if (!game) {
            return res.status(404).json({ message: 'Game not found' });
        }
        res.status(200).json(game);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a game by ID
export const updateGame = async (req, res) => {
    try {
        const game = await Game.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!game) {
            return res.status(404).json({ message: 'Game not found' });
        }
        res.status(200).json(game);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a game by ID
export const deleteGame = async (req, res) => {
    try {
        const game = await Game.findByIdAndDelete(req.params.id);
        if (!game) {
            return res.status(404).json({ message: 'Game not found' });
        }
        res.status(200).json({ message: 'Game deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};      