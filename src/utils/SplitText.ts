/**
 * Free SplitText Alternative
 * Splits text into characters, words, and lines without GSAP trial plugin
 */

type SplitType = "chars" | "words" | "lines";

interface SplitTextOptions {
    type?: string;
    linesClass?: string;
    charsClass?: string;
    wordsClass?: string;
}

export class SplitText {
    public chars: HTMLElement[] = [];
    public words: HTMLElement[] = [];
    public lines: HTMLElement[] = [];
    private elements: HTMLElement[];
    private originalHTML: Map<HTMLElement, string> = new Map();

    constructor(
        target: string | HTMLElement | HTMLElement[],
        options: SplitTextOptions = {}
    ) {
        // Convert target to array of elements
        if (typeof target === "string") {
            this.elements = Array.from(document.querySelectorAll(target));
        } else if (target instanceof HTMLElement) {
            this.elements = [target];
        } else {
            this.elements = target;
        }

        // Store original HTML
        this.elements.forEach((el) => {
            this.originalHTML.set(el, el.innerHTML);
        });

        // Parse split types
        const types = options.type
            ? options.type.split(",").map((t) => t.trim() as SplitType)
            : (["chars"] as SplitType[]);

        // Process each element
        this.elements.forEach((element) => {
            this.splitElement(element, types, options);
        });
    }

    private splitElement(
        element: HTMLElement,
        types: SplitType[],
        options: SplitTextOptions
    ) {
        const text = element.textContent || "";
        let html = "";

        if (types.includes("lines")) {
            html = this.splitIntoLines(text, options.linesClass);
        } else if (types.includes("words")) {
            html = this.splitIntoWords(text, options.wordsClass);
        } else if (types.includes("chars")) {
            html = this.splitIntoChars(text, options.charsClass);
        }

        // Handle combined splits (e.g., "chars,words" or "chars,lines")
        if (types.includes("chars") && types.includes("words")) {
            html = this.splitIntoWordsAndChars(text, options);
        } else if (types.includes("chars") && types.includes("lines")) {
            html = this.splitIntoLinesAndChars(text, options);
        }

        element.innerHTML = html;

        // Collect split elements
        if (types.includes("chars")) {
            this.chars.push(
                ...Array.from(
                    element.querySelectorAll(
                        `.${options.charsClass || "split-char"}`
                    ) as NodeListOf<HTMLElement>
                )
            );
        }
        if (types.includes("words")) {
            this.words.push(
                ...Array.from(
                    element.querySelectorAll(
                        `.${options.wordsClass || "split-word"}`
                    ) as NodeListOf<HTMLElement>
                )
            );
        }
        if (types.includes("lines")) {
            this.lines.push(
                ...Array.from(
                    element.querySelectorAll(
                        `.${options.linesClass || "split-line"}`
                    ) as NodeListOf<HTMLElement>
                )
            );
        }
    }

    private splitIntoChars(text: string, className = "split-char"): string {
        return text
            .split("")
            .map((char) => {
                if (char === " ") {
                    return `<span class="${className}" style="display: inline-block;">&nbsp;</span>`;
                }
                return `<span class="${className}" style="display: inline-block;">${this.escapeHtml(
                    char
                )}</span>`;
            })
            .join("");
    }

    private splitIntoWords(text: string, className = "split-word"): string {
        return text
            .split(/(\s+)/)
            .map((word) => {
                if (word.trim() === "") {
                    return word;
                }
                return `<span class="${className}" style="display: inline-block;">${this.escapeHtml(
                    word
                )}</span>`;
            })
            .join("");
    }

    private splitIntoLines(text: string, className = "split-line"): string {
        // For lines, we need to wrap in a container
        return `<span class="${className}" style="display: block;">${this.escapeHtml(
            text
        )}</span>`;
    }

    private splitIntoWordsAndChars(
        text: string,
        options: SplitTextOptions
    ): string {
        const wordsClass = options.wordsClass || "split-word";
        const charsClass = options.charsClass || "split-char";

        return text
            .split(/(\s+)/)
            .map((word) => {
                if (word.trim() === "") {
                    return word;
                }

                const chars = word
                    .split("")
                    .map(
                        (char) =>
                            `<span class="${charsClass}" style="display: inline-block;">${this.escapeHtml(
                                char
                            )}</span>`
                    )
                    .join("");

                return `<span class="${wordsClass}" style="display: inline-block;">${chars}</span>`;
            })
            .join("");
    }

    private splitIntoLinesAndChars(
        text: string,
        options: SplitTextOptions
    ): string {
        const linesClass = options.linesClass || "split-line";
        const charsClass = options.charsClass || "split-char";

        const chars = text
            .split("")
            .map((char) => {
                if (char === " ") {
                    return `<span class="${charsClass}" style="display: inline-block;">&nbsp;</span>`;
                }
                return `<span class="${charsClass}" style="display: inline-block;">${this.escapeHtml(
                    char
                )}</span>`;
            })
            .join("");

        return `<span class="${linesClass}" style="display: block; overflow: hidden;">${chars}</span>`;
    }

    private escapeHtml(text: string): string {
        const div = document.createElement("div");
        div.textContent = text;
        return div.innerHTML;
    }

    public revert(): void {
        this.elements.forEach((element) => {
            const original = this.originalHTML.get(element);
            if (original) {
                element.innerHTML = original;
            }
        });
        this.chars = [];
        this.words = [];
        this.lines = [];
    }
}