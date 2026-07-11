export type OneTabPermissionPageCommonFactory = (deps?: unknown) => unknown;

export function runOneTabLocalisationBundle(
  createOneTabPermissionPageCommon: OneTabPermissionPageCommonFactory = (
    globalThis as any
  ).createOneTabPermissionPageCommon,
): void {
  createOneTabPermissionPageCommon();
}
