# my-components-lib-inno-roadmap-nadia

A lightweight **React UI library** built with **TypeScript** and **CSS Modules**.
Includes reusable components: **Button, TextField, Select, Checkbox, Switch, and Modal**.

---

## Installation

```bash
npm i my-components-lib-inno-roadmap-nadia
```

then import the global stylesheet:

```ts
import "my-components-lib-inno-roadmap-nadia/styles.css";
```

---

## Components & Props

### **Button**

```tsx
<Button variant="contained" size="medium" disabled>
  Click
</Button>
```

**Props**

Inherits all native button props (`ButtonHTMLAttributes<HTMLButtonElement>`).
`variant?: "text" | "outlined" | "contained"` — defaults to `"contained"`.
`size?: "small" | "medium" | "large"` — defaults to `"medium"`.

---

### **TextField**

```tsx
<TextField
  aria-label="Email"
  placeholder="mail@example.com"
  helperText="Helper"
  error
/>
```

**Props**

Inherits all props from `InputHTMLAttributes<HTMLInputElement>`.
`helperText?: ReactNode` — optional helper text below the input.
`error?: boolean` — when `true`, adds `aria-invalid` and applies error styles.

---

### **Select**

```tsx
<Select
  aria-label="Age"
  options={[
    { label: "Ten", value: "10" },
    { label: "Twenty", value: "20" },
  ]}
/>
```

**Props**

Inherits all props from `SelectHTMLAttributes<HTMLSelectElement>`.
`options: Array<{ label: ReactNode; value: string | number }>` — list of options (note: DOM values are strings).

---

### **Checkbox**

```tsx
<Checkbox defaultChecked>Label</Checkbox>
```

**Props**

Inherits all props from `InputHTMLAttributes<HTMLInputElement>` (except `type`).
`children?: ReactNode` — label or content rendered next to the checkbox.
Supports both **controlled** (`checked` + `onChange`) and **uncontrolled** (`defaultChecked`) modes.

---

### **Switch** (controlled)

```tsx
<Switch checked={on} onChange={(e) => setOn(e.target.checked)} disabled />
```

**Props**

Inherits all props from `InputHTMLAttributes<HTMLInputElement>` except `type | checked | onChange | disabled`.
`checked: boolean` — current state.
`onChange: ChangeEventHandler<HTMLInputElement>` — change handler.
`disabled?: boolean` — disables interaction.
`children?: ReactNode` — optional label next to the switch.

---

### **Modal** (controlled)

```tsx
<Modal open={open} onClose={() => setOpen(false)}>
  <h2>Title</h2>
  <p>Content</p>
</Modal>
```

**Props**

Inherits `DialogHTMLAttributes<HTMLDialogElement>` except `open | onClose`.
`open: boolean` — controls modal visibility.
`onClose: () => void` — triggered when the modal or close button is clicked.
`children: ReactNode` — modal content.

---

## Build

The library is bundled in **CJS** and **ESM** formats:

`dist/index.cjs` — CommonJS (`library.type = "commonjs2"`)
`dist/index.esm.js` — ES Module (`outputModule`)

Styles are compiled into `dist/styles.css`.
`react` and `react-dom` are marked as externals and are **not** included in the bundle.

