const formatPrice = (number) => {
    const newNumber = Intl.NumberFormat('en-US', { style: 'currency', currency: 'EUR' }).format(number);
    return newNumber;
};

export { formatPrice };
