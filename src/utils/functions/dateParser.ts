const MONTHS: string[] = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
]

export function parseDate (arg: number): string {

    // getUTCMonth()
    // getUTCDate()
    // getYear()
    const day = new Date(arg).getUTCDate();
    const month = MONTHS[new Date(arg).getUTCMonth()];

    const year = new Date(arg).getFullYear();

    return `${day} ${month}, ${year}`
}

export function parseDateTime (arg: number): string {

    // getUTCMonth()
    // getUTCDate()
    // toLocaleTimeString()
    const day = new Date(arg).getUTCDate();
    const month = MONTHS[new Date(arg).getUTCMonth()];

    const time = new Date(arg).toLocaleTimeString();

    const parseTime:string[]  = time.split(' ') as string[]
    
    const parseTimeFirstItem = parseTime[0].split(":")
    parseTimeFirstItem.pop()

    parseTime[0] = parseTimeFirstItem.join(':')
    const parseTimeResult = parseTime.join(':')

    return `${day} ${month}, ${parseTimeResult}`
}

export function parseCurrentDate () {
    const day = new Date().getUTCDate();
    const month = MONTHS[new Date().getUTCMonth()];
    const year = new Date().getFullYear();

    return `${month} ${day} ${year}`
}