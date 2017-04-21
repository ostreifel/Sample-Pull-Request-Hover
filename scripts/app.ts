import { IEditorContext, IContributedEditorItems, IHover } from "./contracts";


var contributed: IContributedEditorItems = {
    getHovers: (context, position) => {
        const lines = context.contents.split("\n");
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
    }
};

// Register context menu action provider
VSS.register(VSS.getContribution().id, contributed);