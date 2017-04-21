export interface IFileContext {
    repoName: string;
    /** Includes name */
    filePath: string;
    contents: string;
}
/** 1 indexed */
export interface IPosition {
    column: number;
    lineNumber: number;
}

export interface IContributedFileItems {
    getHovers(context: IFileContext, position: IPosition): IHover | IPromise<IHover> | null | IPromise<null>;
    // getLineDecorations(context: IFileContext): any;
}

export interface IHover {
    range: IRange;
    contents: string[];
}


export interface IRange {
    startLine: number;
    startColumn: number;
    endLine: number;
    endColumn: number;
}