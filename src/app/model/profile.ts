export type Profile = {
    id: string,
    photoURL: string | null,
    displayName: string | null,
    createdAt : string,
    description: string | null
    followerCount: number
    followingCount: number
}

export type Photo = {
    id: string
    name: string
    url: string
}