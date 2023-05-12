export type User = {
    username: string,
    email: string,
    password: string,
    sexe?: "M" | "F",
    internalId: string,
}