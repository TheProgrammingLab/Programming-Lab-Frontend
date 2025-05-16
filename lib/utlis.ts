const MONTHS: string[] = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
]

export function capitalize (arg: string): string {
    
    if (!arg) return '';

    let word = arg.split('')
    word[0] = word[0].toUpperCase();

    return word.join('');
}

export function compareToAssignClass (obj: string, comparedObj: string): boolean {
    if (obj.toLowerCase() === comparedObj.toLowerCase()) return true;

    return false;
}

export function checkIfEmpty (arg: string, action: () => void) {
    if (!arg) action();
}

export function parseDate (arg: number): string {

    // getUTCMonth()
    // getUTCDate()
    // toLocaleTimeString()
    const day = new Date(arg).getUTCDate();
    const month = MONTHS[new Date(arg).getUTCMonth()];

    const time = new Date(arg).toLocaleTimeString();

    let parseTime:any = time.split(' ')
    parseTime[0] = parseTime[0].split(':')
    parseTime[0].pop()

    parseTime[0] = parseTime[0].join(':')
    parseTime = parseTime.join(':')

    return `${day} ${month}, ${parseTime}`
}

export function taskDueDateProximity (dueDate: number): number {
    const currentDateTimeInDays = Date.now() / (1000 * 60 * 60 * 24);
    const recordedDateTimeinDays = dueDate / (1000 * 60 * 60 * 24);

    const differenceInDates = recordedDateTimeinDays - currentDateTimeInDays


    if (differenceInDates < 0) return -1;
    if (differenceInDates < 1 && differenceInDates > 0) return 0;
    if (differenceInDates < 3 && differenceInDates > 1) return 1;

    return 2;

}