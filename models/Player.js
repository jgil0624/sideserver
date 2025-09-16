import mongoose from 'mongoose';

const playerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, min: 5, max: 120, required: true },
    email: { type: String, required: true, unique: true },
    // optional reverse reference: store game IDs the player has joined
    games: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Game' }, { timestamps: true }],
    isActive: { type: Boolean, default: true }
});

const Player = mongoose.model('Player', playerSchema);
export default Player;