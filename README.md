# Enter the Jatrix
(pronounced Jay-tricks, like matrix)

Jatrix does this matrix like text thing, it's really cool!

<frameset cols="*">

<frame src="https://codesandbox.io/embed/006zx206zv?autoresize=1&fontsize=14&hidenavigation=1&view=preview" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin">
</frame>

</frameset>

[![Edit Jatrix](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/006zx206zv?fontsize=14&view=preview)

Long story short, jatrix-react is a react component, as such it needs props.

| Prop   |   Type   |  Description                                                  | Default |
|--------|----------|---------------------------------------------------------------|---------|
| `text` | String   | The words that you want to render                             | None    |
| `fps`  | Number   | Frames per second, A.K.A how fast you want your letters to go | `40`    |
| `caps` | Boolean  | If it should be rendered in caps or not                       | `false` |
| `done` | Function | A callback that executes when it completes                    | `()=>{}`|

The name attribute allows you to write it as a self closing tag, like this:
```jsx
<Jatrix
  text="Ian Fabs"
/>
```

versus writing it like this:

```js
<Jatrix>
  Ian Fabs
</Jatrix>
```

But *both of them* **do indeed work**.