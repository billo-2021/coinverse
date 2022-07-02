export const DEFAULT_PAGE_LIMIT = 10;
export const MAX_PAGE_LIMIT = 1000;
export const DEFAULT_PAGE_OFFSET = 0;

export class PageRequest {
    private _limit: number;
    private _offset: number;

    constructor(limit: number, offset: number) {
        this.setLimit(limit);
        this.setOffset(offset);
    }

    public setLimit(limit: number) : void {
        if (limit > 0 && limit <= MAX_PAGE_LIMIT) {
            this._limit = limit;
        } else {
            this._limit = DEFAULT_PAGE_LIMIT;
        }
    }

    public getlimit(): number {
        return this._limit;
    }

    public setOffset(offset: number) : void {
        if (offset >= 0) {
            this._offset = offset;
        } else {
            this._offset = DEFAULT_PAGE_OFFSET;
        }
    }

    public getOffset(): number {
        return this._offset;
    }
}

export class PageResponse<T> {
    count: number;
    total: number;
    data: T[];
}