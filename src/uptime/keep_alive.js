const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("🔹 BlurChat is running and alive!");
});

const PORT = process.env.PORT || 3001;

function keepAlive() {
    app.listen(PORT, () => {
        console.log(`✅ Keep-alive server running on port ${PORT}`);
    });
}

module.exports = keepAlive;
