/**
 * Represents a dialog box button.
 */
export class DialogBoxButton {
    /**
     * Creates a new instance of DialogBoxButton.
     * @param name The name of the button.
     * @param func The function to execute when the button is clicked.
     * @param color The color of the button ('primary' or 'secondary').
     */
    private constructor(public name: string, public func?: Function, public color?: 'primary' | 'secondary') { }

    /**
     * Creates a dialog box button with only a name.
     * @param name The name of the button.
     * @returns A new instance of DialogBoxButton.
     */
    public static create(name: string): DialogBoxButton;

    /**
     * Creates a dialog box button with a name and a function.
     * @param name The name of the button.
     * @param func The function to execute when the button is clicked.
     * @returns A new instance of DialogBoxButton.
     */
    public static create(name: string, func: Function): DialogBoxButton;

    /**
     * Creates a dialog box button with a name, a function, and a color.
     * @param name The name of the button.
     * @param func The function to execute when the button is clicked.
     * @param color The color of the button ('primary' or 'secondary').
     * @returns A new instance of DialogBoxButton.
     */
    public static create(name: string, func: Function, color: 'primary' | 'secondary'): DialogBoxButton;

    /**
     * Creates a dialog box button with a name and a color.
     * @param name The name of the button.
     * @param color The color of the button ('primary' or 'secondary').
     * @returns A new instance of DialogBoxButton.
     */
    public static create(name: string, color: 'primary' | 'secondary'): DialogBoxButton;

    /**
     * Creates a dialog box button based on the provided parameters.
     * @param name The name of the button.
     * @param funcOrColor The function to execute when the button is clicked or the color of the button.
     * @param color The color of the button ('primary' or 'secondary').
     * @returns A new instance of DialogBoxButton.
     */
    public static create(name: string, funcOrColor?: Function | 'primary' | 'secondary', color?: 'primary' | 'secondary'): DialogBoxButton {
        if (typeof funcOrColor === 'function') {
            return new DialogBoxButton(name, funcOrColor, color);
        } else {
            return new DialogBoxButton(name, undefined, funcOrColor);
        }
    }
}
