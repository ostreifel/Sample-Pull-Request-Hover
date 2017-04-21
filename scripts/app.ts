import { IFileContext, IContributedFileItems, IHover } from "./contracts";


var contributed: IContributedFileItems = {
    getHovers: (context, position) => {
        const searchString = "Sample string";
        const lines = context.contents.split("/n");
        const line = lines[position.lineNumber - 1];
        if (line && line.slice(position.column - 1, searchString.length) === searchString) {
            const hover: IHover = {
                range: {
                    startLine: position.lineNumber,
                    endLine: position.lineNumber,
                    startColumn: position.column,
                    endColumn: position.column + searchString.length
                }, 
                contents: ["Sample hover"]
            }
            return hover;
        }
        return null;
    }
};

// Register context menu action provider
VSS.register(VSS.getContribution().id, contributed);