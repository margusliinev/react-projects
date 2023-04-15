const formatNumber = (number) => {
    const newNumber = Intl.NumberFormat('en-US', { style: 'decimal', currency: 'EUR' }).format(number);
    return newNumber;
};

export { formatNumber };
