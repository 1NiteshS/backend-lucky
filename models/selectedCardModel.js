import mongoose from 'mongoose';

const SelectedCardSchema = new mongoose.Schema({
    gameId: { type: String },
    cardId: { type: String },
    multiplier: { type: Number }, // Use Number for multiplier
    amount: { type: Number },
    adminID: { type: String }, // Change to String
    ticketsID: { type: String }, // Change to String
}, { timestamps: true });

export default mongoose.model('SelectedCard', SelectedCardSchema);