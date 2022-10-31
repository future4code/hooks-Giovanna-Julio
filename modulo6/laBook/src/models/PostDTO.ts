import { POST_TYPES } from "./types";

export interface PostDTO {
        photo: string,
        description: string,
        type: POST_TYPES,
        authorId: string
}