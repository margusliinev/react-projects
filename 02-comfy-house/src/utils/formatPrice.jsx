const formatPrice = (number) => {
    const newNumber = Intl.NumberFormat('en-US', { style: 'currency', currency: 'EUR' }).format(number / 100);
    return newNumber;
};

export { formatPrice };
