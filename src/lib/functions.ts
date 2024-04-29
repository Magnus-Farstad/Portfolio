export function calculateLength(startDateStr: string, endDateStr: string, offset: number) {
	// Parse the start and end dates
	const startDate = new Date(startDateStr);
	let endDate;

	// If the end date is "Now", use the current date
	if (endDateStr === 'Now') {
		endDate = new Date();
	} else {
		endDate = new Date(endDateStr);
	}

	// Calculate the difference in months
	let months = (endDate.getFullYear() - startDate.getFullYear()) * 12 + offset;
	months -= startDate.getMonth();
	months += endDate.getMonth();

	// Calculate the number of years and remaining months
	const years = Math.floor(months / 12);
	const remainingMonths = months % 12;

	let result = '';
	if (years > 0) {
		result += `${years} years`;
	}
	if (remainingMonths > 0) {
		if (result) result += ', ';
		result += `${remainingMonths} months`;
	}

	return result;
}
