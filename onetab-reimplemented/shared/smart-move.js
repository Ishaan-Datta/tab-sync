globalThis.createOneTabSmartMove = function createOneTabSmartMove(deps) {
  return async function smartMove({ rt, O, N }) {
    const {
      core,
      createNewEmptyWindowGroup,
      defaultTabGroupColor,
      getId,
      getItemById,
      getItems,
      isFolder,
      isGroup,
      isNotQuickList,
      isTab,
      isTabGroup,
      isWindowGroup,
      itemType,
      ItemCache,
      moveItemRef,
      not,
      partition,
    } = deps;
    let selectedItems = await getItems(rt.map((moveRef) => moveRef.itemId)),
      targetItem = await getItemById(O);
    if (selectedItems.some(isFolder) && !isFolder(targetItem))
      throw new Error(
        "folder should not have been allowed to have been moved here",
      );
    if (selectedItems.some(isTab) && selectedItems.some(not(isTab)))
      throw new Error("Can't mix tabs with groups during smart move");
    let selectedTypes = new Set(selectedItems.map(itemType));
    if (selectedTypes.size > 1)
      throw new Error(
        `Can't mix the following types during smart move: ${[...selectedTypes].join()}`,
      );
    {
      let cache = new ItemCache();
      await cache.ke();
      let [withoutSourceParent, withSourceParent] = partition(
          rt,
          (moveRef) => moveRef.sourceParentId,
        ),
        tabIdsFromGroups = new Set(
          (await cache.getItems([...new Set(withSourceParent.map((moveRef) => moveRef.itemId))]))
            .filter(isTab)
            .map(getId),
        );
      withoutSourceParent = withoutSourceParent.filter(
        (moveRef) => !tabIdsFromGroups.has(moveRef.itemId),
      );
      let [tabMoveRefs, groupedMoveRefs] = partition(withSourceParent, (moveRef) =>
          tabIdsFromGroups.has(moveRef.itemId),
        ),
        duplicateRefs = [];
      for (let moveRef of tabMoveRefs) {
        let itemId = moveRef.itemId,
          item = cache.v(itemId),
          parents = item.parentIds.map((parentId) => cache.v(parentId)),
          refs = [];
        if (
          (parents.forEach((parent) =>
            parent.childIds
              .filter((childId) => childId === item.id)
              .forEach((childId, index) =>
                refs.push(moveItemRef({ itemId: item.id, Fe: parent.id, zt: index })),
              ),
          ),
          O === "trash")
        )
          refs.forEach((ref) => withoutSourceParent.push(ref));
        else {
          let firstRef = refs[0];
          (withoutSourceParent.push(firstRef),
            refs.slice(1).forEach((ref) => duplicateRefs.push(ref)));
        }
      }
      if (duplicateRefs.length) {
        let deletedIds = await core.gs(duplicateRefs);
        (await core.move({ rt: duplicateRefs, O: "delete" }),
          await core.Oe(deletedIds));
      }
      rt = [...withoutSourceParent, ...groupedMoveRefs];
    }
    if (O === "trash") {
      let deletedIds = await core.gs(rt);
      (await core.move({ rt, O, N }), await core.Oe(deletedIds));
    } else if (selectedItems.some(isTab) && isFolder(targetItem)) {
      let newGroupId = await createNewEmptyWindowGroup({ O, N }),
        deletedIds = await core.gs(rt);
      (await core.move({ rt, O: newGroupId }), await core.Oe(deletedIds));
    } else if (selectedItems.some(isWindowGroup) && isWindowGroup(targetItem)) {
      let offset = 0;
      for (let moveRef of rt) {
        let itemId = moveRef.itemId,
          item = await getItemById(itemId);
        if (isWindowGroup(item)) {
          let childItems = await getItems(item.childIds);
          if (!0) {
            let childRefs = [];
            (childItems.forEach((childItem, index) => {
              isTab(childItem)
                ? childRefs.push(
                    moveItemRef({
                      itemId: childItem.id,
                      zt: item.childIds
                        .slice(0, index)
                        .filter((childId) => childId === childItem.id).length,
                      Fe: item.id,
                    }),
                  )
                : childRefs.push(moveItemRef({ itemId: childItem.id }));
            }),
              await core.move({ rt: childRefs, O, N: N === void 0 ? void 0 : N + offset }),
              (offset += childItems.length),
              await core.Oe([moveRef.itemId], !0));
          } else {
            let [tabItems, nonTabItems] = partition(childItems, isTab);
            (nonTabItems.length &&
              (await core.move({
                rt: nonTabItems.map((childItem) =>
                  moveItemRef({ itemId: childItem.id }),
                ),
                O,
                N: N === void 0 ? void 0 : N + offset,
              }),
              (offset += nonTabItems.length)),
              tabItems.length
                ? (await core.Fi(item.id, {
                    groupType: "tabGroup",
                    color: defaultTabGroupColor,
                  }),
                  await core.move({
                    rt: [moveRef],
                    O,
                    N: N === void 0 ? void 0 : N + (offset - nonTabItems.length),
                  }),
                  offset++)
                : await core.Oe([moveRef.itemId], !0));
          }
        } else if (isTabGroup(item)) {
          let deletedIds = await core.gs([moveRef]);
          (await core.move({ rt: [moveRef], O, N: N === void 0 ? void 0 : N + offset++ }),
            await core.Oe(deletedIds));
        }
      }
    } else if ((selectedItems.some(isTabGroup) || selectedItems.some(isWindowGroup)) && isTabGroup(targetItem)) {
      let cache = new ItemCache(),
        tabRefs = [],
        groupItems = [];
      const collectRefs = (item, parent, index) => {
        if (isGroup(item)) {
          let groupItem = item;
          (cache.ul(groupItem.childIds).forEach((childItem, childIndex) =>
            collectRefs(childItem, item, childIndex),
          ),
            groupItems.push(groupItem));
        } else
          tabRefs.push(
            moveItemRef({
              itemId: item.id,
              zt: parent.childIds
                .slice(0, index)
                .filter((childId) => childId === item.id).length,
              Fe: parent.id,
            }),
          );
      };
      for (let moveRef of rt) {
        let itemId = moveRef.itemId;
        await cache.Te({ groupId: itemId });
        let item = cache.v(itemId),
          parent = await cache.ht(item.parentIds.find(isNotQuickList));
        collectRefs(item, parent);
      }
      (tabRefs.length && (await core.move({ rt: tabRefs, O, N })),
        await core.Oe(groupItems.map(getId), !0));
    } else {
      let deletedIds = await core.gs(rt);
      (await core.move({ rt, O, N }), await core.Oe(deletedIds));
    }
  };
};
