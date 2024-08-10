export function debounce<T extends (...args: any[]) => void>(callback: T, timeout: number): T {
    let timer: ReturnType<typeof setTimeout>;

    return function (...args: Parameters<T>): void {
        if (timer) {
            clearTimeout(timer);
        }

        timer = setTimeout(() => callback(...args), timeout );
    } as T;
}