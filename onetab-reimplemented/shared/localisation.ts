type OneTabPermissionPageCommonFactory = (deps?: unknown) => unknown;

(globalThis as any).runOneTabLocalisationBundle =
  function runOneTabLocalisationBundle(): void {
    const createOneTabPermissionPageCommon = (globalThis as any)
      .createOneTabPermissionPageCommon as OneTabPermissionPageCommonFactory;
    createOneTabPermissionPageCommon();
  };
