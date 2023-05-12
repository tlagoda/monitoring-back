export interface User {
    username: string,
    email: string,
    password: string,
    sexe?: Sexe,
    internalId: string,
}

export type Sexe = "M" | 'F' | 'unknown'
