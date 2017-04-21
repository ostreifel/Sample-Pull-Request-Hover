
export interface IEditorContext {
    repoId: string;
    /** Includes name */
    filePath: string;
    contents: string;
}
/** 1 indexed */
export interface IPosition {
    column: number;
    lineNumber: number;
}

export interface IContributedEditorItems {
    getHovers(context: IEditorContext, position: IPosition): IHover | IPromise<IHover>;
    // getLineDecorations(context: IFileContext): any;
}

export interface IHover {
    range: IRange;
    contents: string[];
}


export interface IRange {
    startLineNumber: number;
    startColumn: number;
    endLineNumber: number;
    endColumn: number;
}