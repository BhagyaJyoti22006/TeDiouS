1. Press F12 (or Ctrl+Shift+I) to open DevTools.

2. Go to Console and type and send below code:  
`Array.from(document.querySelectorAll('.featured.sale')).reduce((sum, el) => sum + Number(el.dataset.discount), 0)`

3. Copy the value. This is the sum.


Sum of discounts:-  
```
57
```

