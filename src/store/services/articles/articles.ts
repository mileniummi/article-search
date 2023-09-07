import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const ApiDefaultParams = {
    user_key: import.meta.env.VITE_API_KEY,
}

export interface Article {
    _id: string
    link: string
    title: string
    summary: string
    published_date: string
}

export interface SearchArticleResponse {
    articles: Article[]
}

export interface SearchArticleRequest {
    q: string
}

export const articlesApi = createApi({
    reducerPath: 'articlesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_API_PATH,
    }),
    tagTypes: ['Article'],
    endpoints: (builder) => ({
        searchArticles: builder.query<SearchArticleResponse, SearchArticleRequest>({
            query: (params) => ({
                url: '/',
                params: {
                    ...ApiDefaultParams,
                    ...params
                }
            }),
            providesTags: ['Article']
        }),
    }),
})

export const {useSearchArticlesQuery} = articlesApi

