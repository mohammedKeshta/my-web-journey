# Blog Site


### CSS resets 
   aim to remove all built-in browser styling. Standard elements like H1-6, p, strong, em, et cetera end up looking exactly alike, having no decoration at all. ...
### Normalize CSS 
   aims to make built-in browser styling consistent across browsers.
   
   
### MEDIA QUERY I USE 
// Tiny devices (portrait phones, less than 576px)
// No media query since this is the default in Bootstrap

// Small devices (landscape phones, 576px and up)
`@media (min-width: 576px) { ... }`

// Medium devices (tablets, 768px and up)
`@media (min-width: 768px) { ... }`

// Large devices (desktops, 992px and up)
`@media (min-width: 992px) { ... }`

// Extra large devices (large desktops, 1200px and up)
`@media (min-width: 1200px) { ... }`

#### RUN Blog with auto-reload
```browser-sync start --server --files "*.html" "css/*.css"```