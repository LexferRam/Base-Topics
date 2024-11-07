# Position

> [!TIP] Static
> (Default) element is positioned to the Normal Flow of the document
>
> The top, right, bottom, left, and z-index properties have no effect.
---
> [!NOTE] Relative
> element is positioned to the Normal Flow of the document.
>
> element preserves its space and its physical space
>
> The initial position of the element is top:0, rigth:0, bottom:0, left:0
---
> [!IMPORTANT] Absolute
> Element is removed from the normal document flow, until its nearest parent with position relative
>
> no space is created or reserved for the element in the page layout
>
> the properties top, right, left and bottom are going to take as reference the nearest container with position set to relative

**NOTE**: use 'tranform' property to center the element

```css
transform: tranlate(-50%, -50%)
```

---
> [!WARNING] Fixed
> The element is removed from the normal document flow
>
> no space is created or reserved for the element in the page layout
>
> The element is going to remove from the normal flow, it takes as reference the browser frame

**NOTE**: use 'tranform' property to center the element

```css
transform: tranlate(-50%, -50%)
```

---
> [!CAUTION] Sticky
> element is positioned according to the normal flow of the document
>
> then offset relative to its nearest scrolling ancestor and containing block
>
> The offset does not affect the position of any other elements.
