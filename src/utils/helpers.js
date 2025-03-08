function isAdmin(userId) {
    const ADMIN_IDS = [123456789, 987654321]; // Replace with real admin IDs
    return ADMIN_IDS.includes(userId);
}

module.exports = { isAdmin };
