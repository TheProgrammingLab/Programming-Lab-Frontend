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