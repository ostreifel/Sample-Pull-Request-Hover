import { IEditorContext, IContributedEditorItems, IHover, ILineDecoration } from "./contracts";

function getLines(context: IEditorContext) {
    return context.contents.split("\n");
}

var contributed: IContributedEditorItems = {
    getHovers: (context, position) => {
        const lines = getLines(context);
        const line = lines[position.lineNumber - 1];
        if (position.lineNumber === 4) {
            const hover: IHover = {
                range: {
                    startLineNumber: position.lineNumber,
                    endLineNumber: position.lineNumber,
                    startColumn: position.column,
                    endColumn: Infinity
                },
                contents: [line]
            }
            return hover;
        }
        return null;
    },
    getLineDecorations: (context) => {
        const decorations: ILineDecoration[] = [
            {
                range: {
                    startColumn: 1,
                    startLineNumber: 1,
                    endColumn: 6,
                    endLineNumber: 1
                },
                options: {
                    inlineClassName: "dotted-underline red-underline",
                }
            },
            {
                range: {
                    startColumn: 1,
                    endColumn: 1,
                    startLineNumber: 2,
                    endLineNumber: 3
                },
                options: {
                    isWholeLine: true,
                    linesDecorationsClassName: "red-line"
                }
            },
            { //Hightlight the line being hovered
                range: {
                    startColumn: 2,
                    startLineNumber: 4,
                    endColumn: 5,
                    endLineNumber: 4
                },
                options: {
                    linesDecorationsClassName: "yellow-line",
                    inlineClassName: "yellow-highlight"
                }
            },
        ];
        return decorations;
    }
};

// Register context menu action provider
VSS.register(VSS.getContribution().id, contributed);
