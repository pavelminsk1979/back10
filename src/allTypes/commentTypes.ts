
export type CommentatorInfo={
    userId:string
    userLogin:string
}


export type Comment={
    content:string
    createdAt:string
    commentatorInfo:CommentatorInfo
    postId:string
}


export type OutputComment={
    id:string
    content:string
    createdAt:string
    commentatorInfo:CommentatorInfo
}

type SortDirection="asc" | "desc"

export type QueryInputModalGetCommentsForCorrectPost = {
    sortBy?:string
    sortDirection?:SortDirection
    pageNumber?:number
    pageSize?:number
}

export type SortDataGetCoomentsForCorrectPost = {
    sortBy:string
    sortDirection:SortDirection
    pageNumber:number
    pageSize:number
}
