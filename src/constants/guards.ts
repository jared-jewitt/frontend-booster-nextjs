export enum Guard {
  Private = 1,
  Public,
  Shared,
}

export const guards = {
  "/account": Guard.Private,
  "/login": Guard.Public,
  "/products": Guard.Shared,
  "/products/[id]": Guard.Shared,
};
