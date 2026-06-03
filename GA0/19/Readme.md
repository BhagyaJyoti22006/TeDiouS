1. Open the directory `q-replace-across-files` in WSL environment.

2. Run the two commands one after another:  
`sed -i 's/IITM/IIT Madras/gi' *`  
`cat * | sha256sum`

3. Copy the value. This is the checksum.


Final sha256sum:-  
```
da2e1e770ffc98c64629e008671ea04e5910cf5eb2ecab5467d0cfbd2ef1a2d8 *-
```

