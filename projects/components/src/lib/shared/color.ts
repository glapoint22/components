export type ColorType = 'primary' | 'secondary' | 'tertiary' | 'warn' | undefined;

export class Color {
    
    public static getColorClass(colorType: ColorType, componentName: string, setPrimaryAsDefault: boolean = true): string | null {
        let colorClass: string;

        // If there is no color set and the primary color should not be set as default, exit the function
        if (!colorType && !setPrimaryAsDefault) return null;

        // If a color is set, construct the color class using the color and component name
        if (colorType) {
            colorClass = colorType + '-' + componentName + '-color';
        } else {
            // Otherwise, construct the color class using 'primary' and the component name
            colorClass = 'primary-' + componentName + '-color';
        }

        return colorClass;
    }
}
