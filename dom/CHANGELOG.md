# Change Log - tempo-dom

This log was last generated on Fri, 10 Jul 2020 03:06:06 GMT and should not be manually modified.

## 0.27.1
Fri, 10 Jul 2020 03:06:06 GMT

### Patches

- fix bug in MatchValueTemplate

## 0.27.0
Thu, 09 Jul 2020 01:32:44 GMT

### Minor changes

- Removed dependency on tempo-store.

## 0.26.0
Mon, 06 Jul 2020 01:53:04 GMT

### Minor changes

- Full redesign of the DOM DSL and simplified some types.
- Removed T and El type parameters from DOMElement.

## 0.25.0
Wed, 17 Jun 2020 02:04:09 GMT

### Minor changes

- Use `OuterState` for `whenUndefined` in `mapState` and add `mapAttributeOrElse`.

## 0.24.0
Mon, 08 Jun 2020 23:05:13 GMT

### Minor changes

- Encapsulate Store into Component lifecycle. Makes a cleaner and easier to reason API.

### Patches

- Add localAdapter.

## 0.23.0
Sun, 07 Jun 2020 23:32:43 GMT

*Version update only*

## 0.22.0
Sat, 06 Jun 2020 17:37:18 GMT

### Minor changes

- Removed `matchers` where not necessary.

### Patches

- Provide alternative syntax for `mapField`.

## 0.21.0
Sat, 06 Jun 2020 17:17:05 GMT

### Minor changes

- Make SimpleComponent propagate actions and remove reference ids from elements that do not always generated nodes in the DOM.

### Patches

- Add `equals` to `MapState`.

## 0.20.1
Tue, 02 Jun 2020 01:47:10 GMT

### Patches

- Add simpleComponent for elements where State matches Action.

## 0.20.0
Sun, 31 May 2020 02:48:23 GMT

### Minor changes

- Renamae iterate.getArray to iterate.map and until.repeatUntil to until.next.

## 0.19.2
Sun, 31 May 2020 01:59:27 GMT

### Patches

- Use reference node for `mapState`.

## 0.19.1
Fri, 29 May 2020 03:55:30 GMT

### Patches

- Add `applyAttributes` to join two attributes into one.

## 0.19.0
Fri, 29 May 2020 03:36:19 GMT

### Minor changes

- Changed elements to use more Attributes types.

## 0.18.0
Thu, 28 May 2020 23:50:31 GMT

### Minor changes

- Change signature of `next` for `repeat` to be an `Attribute`.

## 0.17.2
Wed, 27 May 2020 03:26:39 GMT

### Patches

- Fix Adapter not disconnecting from Store on destroy

## 0.17.1
Thu, 21 May 2020 21:07:30 GMT

### Minor changes

- Do not change attributes casing.
- Fix scoped styles.

## 0.17.0
Mon, 17 Feb 2020 19:18:30 GMT

### Minor changes

- Change signature of `unsafeHtml`
- Change signature of `matchX` functions

## 0.16.0
Sun, 16 Feb 2020 03:58:19 GMT

### Minor changes

- Add `mapField`

## 0.15.1
Sun, 16 Feb 2020 00:01:24 GMT

*Version update only*

## 0.15.0
Sat, 15 Feb 2020 20:16:59 GMT

### Minor changes

- Remove DOM prefix where not needed and export less types
- Remove `index` file (imports must point specific modules)

## 0.14.0
Sat, 18 Jan 2020 05:08:11 GMT

### Minor changes

- Updated dependency on tempo-std.

## 0.13.0
Wed, 01 Jan 2020 00:17:16 GMT

### Minor changes

- Add `scopedStyles`

## 0.12.0
Fri, 27 Dec 2019 18:44:24 GMT

### Minor changes

- Adopt consistent versions of Tempo libraries

