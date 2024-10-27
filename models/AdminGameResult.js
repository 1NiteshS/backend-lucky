import mongoose from 'mongoose';

const AdminGameResultSchema = new mongoose.Schema({
    gameId: {
        type: String,
        required: true
    },
    winningCard: {
        cardId: String,
        multiplier: String,
        amount: Number
    },
    winners: [{
        adminId: String,
        betAmount: Number,
        winAmount: Number,
        winningCardAmount: Number,
        ticketsID: String,
        status: String
    }],
    losers: [{
        adminId: String,
        betAmount: Number,
        winAmount: Number,
        winningCardAmount: Number,
        ticketsID: String,
        status: String
    }]
}, { timestamps: true });

const AdminGameResult = mongoose.model('AdminGameResult', AdminGameResultSchema);

export default AdminGameResult;