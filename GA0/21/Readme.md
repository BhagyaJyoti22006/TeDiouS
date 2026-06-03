SQL query:-  
```
SELECT department, ROUND(AVG(salary))
FROM employees
GROUP BY department
ORDER BY department;
```

