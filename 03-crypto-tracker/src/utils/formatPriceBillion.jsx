const formatPriceBillion = (num) => {
    if (num >= 1000000000) {
        const formattedNum = (num / 1000000000).toFixed(1);
        return `€${formattedNum}B`;
    } else if (num >= 1000000) {
        const formattedNum = (num / 1000000).toFixed(1);
        return `€${formattedNum}M`;
    } else {
        return num;
    }
};

export { formatPriceBillion };
