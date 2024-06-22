export const isURL = (inputString: any): boolean => {
        try {
                const url: any = new URL(inputString);
        } catch (_) {
                return false;
        }

        return true;
};
