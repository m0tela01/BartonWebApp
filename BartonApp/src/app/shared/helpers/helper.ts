export class Helper {
    public static constructObject<T>(input: any, output: T): void {
        if (input) {
            for (const prop in input) {
                if (input[prop] instanceof Date) {
                    output[prop] = new Date(input[prop]);
                } else {
                    output[prop] = input[prop];
                }
            }
        }
    }
}