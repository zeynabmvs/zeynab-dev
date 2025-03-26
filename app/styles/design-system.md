# Portfolio Design System

## Layout

### Container & Spacing
- Main container: `container mx-auto px-4 py-8`
- Section spacing: `space-y-8` (between major sections)
- Inner section spacing: `space-y-4`
- Grid gap: `gap-4`
- Padding for cards: `p-6`
- Margin between elements: `mt-1`, `mt-2`, `mt-4`

### Grid System
- Default grid: `grid gap-4`
- Two column grid: `grid gap-4 md:grid-cols-2`
- Flex layouts: `flex`, `flex-wrap`
- Flex positioning: `items-center`, `gap-1`, `gap-2`, `gap-4`
- Flex behavior: `flex-shrink-0`, `flex-grow`

## Typography

### Headings
- Section titles: `text-2xl font-bold`
- Card titles: `font-semibold`

### Text Sizes
- Default body: `text-sm`
- Small text: `text-xs`
- Links: `text-primary hover:underline`
- Muted text: `text-muted-foreground`

## Components

### Cards
```css
.card {
  rounded-lg
  border
  bg-card
  text-card-foreground
  shadow-sm
  p-6
}
```

### Pills/Tags
```css
.pill {
  inline-flex
  items-center
  rounded-full
  border
  px-2.5
  py-0.5
  text-xs
  font-semibold
  bg-secondary
  text-secondary-foreground
  hover:bg-secondary/80
}
```

### Images
- Container: `relative w-full h-48`
- Image styling: `w-full h-full object-cover`
- Small icons: `w-3 h-3`

## Colors

### Text Colors
- Primary text: Default theme color
- Secondary/Muted text: `text-muted-foreground`
- Link color: `text-primary`

### Background Colors
- Card background: `bg-card`
- Secondary elements: `bg-secondary`
- Muted elements: `bg-muted`

### Interactive States
- Hover states: `hover:bg-secondary/80`, `hover:underline`

## Borders & Shadows
- Border: `border`
- Border radius: `rounded-lg` (cards), `rounded-full` (pills)
- Shadow: `shadow-sm`

## Responsive Design
- Medium screens and up: `md:grid-cols-2`
- Container max-width: Handled by `container` class

## Common Patterns

### Section Structure
```jsx
<section className="space-y-4">
  <h2 className="text-2xl font-bold">Section Title</h2>
  <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
    {/* Content */}
  </div>
</section>
```

### Card Pattern
```jsx
<div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
  {/* Card content */}
</div>
```

### Pill/Tag Pattern
```jsx
<div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-secondary text-secondary-foreground">
  {/* Pill content */}
</div>
```

## Usage Guidelines

1. Always use the container class for main layout sections
2. Maintain consistent spacing using the defined space utilities
3. Use the card pattern for contained content sections
4. Use pills for tags, skills, and other compact information
5. Follow the responsive patterns for grid layouts
6. Use muted text for secondary information
7. Maintain consistent border radius and shadow styles 