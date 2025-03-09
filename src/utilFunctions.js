function roundedValue(number, precision = 0) {
    return (
        Math.round(number * Math.pow(10, precision)) / Math.pow(10, precision)
    );
}

export { roundedValue };
