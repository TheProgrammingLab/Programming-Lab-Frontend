const MONTHS: string[] = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
]

export function capitalize (arg: string): string {
    
    if (!arg) return '';

    const word = arg.split('')
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

export function taskDueDateProximity (dueDate: number): number {
    const currentDateTimeInDays = Date.now() / (1000 * 60 * 60 * 24);
    const recordedDateTimeinDays = dueDate / (1000 * 60 * 60 * 24);

    const differenceInDates = recordedDateTimeinDays - currentDateTimeInDays


    if (differenceInDates < 0) return -1;
    if (differenceInDates < 1 && differenceInDates > 0) return 0;
    if (differenceInDates < 3 && differenceInDates > 1) return 1;

    return 2;

}

export function parseTimeFromDate (time: number) {
    let hrs: string | number = Math.floor(new Date(time).getHours())
    let mins: string | number  = Math.floor(new Date(time).getMinutes())

    if (hrs < 10) {
        hrs = `0${hrs}`
    }

    if (mins < 10) {
        mins = `0${mins}`
    }  

    return `${hrs}:${mins}`
}

function convertNumberToTime (arg: number) {
    const hrs = arg / (60 * 60)
    const mins = arg / 60
    const secs = arg % 60


    return `${hrs}:${mins}:${secs}`
}

export function countdownTimer (startTime: number, setTime: (arg: string) => void) {
    const timeLeftInSecs = (startTime - Date.now()) / 1000;



    const interval = setInterval (() => {
        
        const result = convertNumberToTime(timeLeftInSecs)
        
        setTime(result)

        if (result == "0:0:0" || result == "00:00:00") {
            clearInterval(interval)
        }
    }, 1000)
}