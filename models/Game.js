import mongoose from 'mongoose';

const gameSchema = new mongoose.Schema;
({
    title: { type: String, required: true },
    genre: { type: String, required: true },
    releaseYear: { type: Number, min: 1970, max: 2100, required: true },
    isMultiplayer: { type: Boolean, default: false },
    // optional reverse reference: store player IDs who joined the game
    players: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player' }, { timestamps: true }]
});

const Game = mongoose.model('Game', gameSchema);
export default Game;