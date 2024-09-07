---
title: Getting started
---

Add SF Symbols to your React project in just a few minutes with this guide. {% .lead %}

{% quick-links %}

{% quick-link title="Icon reference" icon="theming" href="/reference" description="View the entire library of icons." /%}

{% quick-link title="Contributing" icon="presets" href="/docs/contributing" description="Learn how the internals work and contribute." /%}

{% /quick-links %}

---

## Quick start

Currently, SF Symbols for the web is only available for React. Once you've setup a React project (NextJS, CRA, Vite, etc.), install as follows.

### Installing dependencies

Just one simple installation and you're ready to go!

```shell
npm install @serviette/sf-symbols-react
```

<!-- {% callout type="warning" title="Oh no! Something bad happened!" %}
This is what a disclaimer message looks like. You might want to include inline `code` in it. Or maybe you’ll want to include a [link](/) in it. I don’t think we should get too carried away with other scenarios like lists or tables — that would be silly.
{% /callout %} -->

### Add your first icon

Apple's naming convention follows "dot notation", with examples like `square.stack.3d.up`. Since React components are typically PascalCased, capitalize the first letter of each word and add an "Icon" like so:

- `square.stack.3d.up` -> `SquareStack3dUpIcon`
- `checkmark.rectangle.stack` -> `CheckmarkRectangleStackIcon`

All icons are imported directly from `@serviette/sf-symbols-react`, like so

```js
import { SquareStack3dUpIcon } from '@serviette/sf-symbols-react'
```

{% callout title="You should know!" %}
There are now 5 released versions of SF Symbols. Version 6 is in beta. Once version 6 is released, we will add importing legacy symbols from versions 4 and 5, and importing from `@serviette/sf-symbols-react` will import from the most recent version.
{% /callout %}

---

## Basic usage

There are two props that can be passed into the icon components, `className` and `weight`.

`weight` controls the thickness of the strokes of the icons. SF Symbols come in the following weights listed from thinnest to thickest:

- "ultralight"
- "thin"
- "light"
- "regular"
- "medium"
- "semibold"
- "bold"
- "heavy"
- "black"

And, similar to other icon libaries, `className` controls the CSS classes directly applied to the icon (Tailwind CSS is recommended). The stroke color of the icon is dependent on the `currentColor` CSS attribute, which is typically controlled by text color. See the below usage for reference.

```js
<SquareStack3dUpIcon className="h-4 w-4 text-red-500" weight="bold" />
```

This created a small, but thick stroke red icons.

### That's it!

It's that simple to get started. You can see the complete list of icons [here](/reference).

<!-- ## Getting help

Consequuntur et aut quisquam et qui consequatur eligendi. Necessitatibus dolorem sit. Excepturi cumque quibusdam soluta ullam rerum voluptatibus. Porro illo sequi consequatur nisi numquam nisi autem. Ut necessitatibus aut. Veniam ipsa voluptatem sed.

### Submit an issue

Inventore et aut minus ut voluptatem nihil commodi doloribus consequatur. Facilis perferendis nihil sit aut aspernatur iure ut dolores et. Aspernatur odit dignissimos. Aut qui est sint sint.

Facere aliquam qui. Dolorem officia ipsam adipisci qui molestiae. Error voluptatem reprehenderit ex.

Consequatur enim quia maiores aperiam et ipsum dicta. Quam ut sit facere sit quae. Eligendi veritatis aut ut veritatis iste ut adipisci illo.

### Join the community

Praesentium facilis iste aliquid quo quia a excepturi. Fuga reprehenderit illo sequi voluptatem voluptatem omnis. Id quia consequatur rerum consectetur eligendi et omnis. Voluptates iusto labore possimus provident praesentium id vel harum quisquam. Voluptatem provident corrupti.

Eum et ut. Qui facilis est ipsa. Non facere quia sequi commodi autem. Dicta autem sit sequi omnis impedit. Eligendi amet dolorum magnam repudiandae in a.

Molestiae iusto ut exercitationem dolorem unde iusto tempora atque nihil. Voluptatem velit facere laboriosam nobis ea. Consequatur rerum velit ipsum ipsam. Et qui saepe consequatur minima laborum tempore voluptatum et. Quia eveniet eaque sequi consequatur nihil eos. -->
