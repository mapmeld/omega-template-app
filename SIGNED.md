##### Signed by https://keybase.io/mapmeld
```
-----BEGIN PGP SIGNATURE-----
Version: GnuPG v2

iQEcBAABCAAGBQJU/RZoAAoJEDWbjndSKzRJfDYH/jchyTQHHACPEKQmcrtYL0Q5
sqch4wTDOwBsVkzo27ZcBgk4iCQ6m1X/xNSVHzCR+lfEiI+RoyBvku2RZ1RYJcYP
TOtmCBMWseCNnEp+Xku4Ean2ZBXV0vy59F0Vl64+7hPFTS2ynJM8y5uD7hzzqe4O
aAE4ZdcA+fkbnIT0y4ujnTcpZuP5ICWJZEYy0+Ps0ha4f+iEJuWzHXhFITYviqAe
fftdUnNepFjMohOROryag0f5yIHbBwtapMPXEbZE8QSlxpruK7lEopEesfwCfCj8
u5PQhsyDETUCbae+/h4XZ9Kp8A4zrd+D0zRYm0aPpcfv3ovMzfvBU8cjlRop/GA=
=ZH/V
-----END PGP SIGNATURE-----

```

<!-- END SIGNATURES -->

### Begin signed statement 

#### Expect

```
size  exec  file            contents                                                        
            ./                                                                              
29            .gitignore    904d3cd658749a9fffe0d3b6d48b750da707ee01a53a610346bb5b43bd5bf1f7
343           app.js        159b54e129fe327d1f58647db1301a6f580833d447b7b4fe647cad38d988ae1d
556           package.json  a811c78a2b2a481547717a31d2f7a7040a83c64afd8ea85f80b15fb4b8e4fac9
1282          README.md     6a6a0040a3d6f90ca3a4d5da3ff42af0c3bd934b22ffe6ddd1a9dca10e8d2feb
```

#### Ignore

```
/SIGNED.md
```

#### Presets

```
git      # ignore .git and anything as described by .gitignore files
dropbox  # ignore .dropbox-cache and other Dropbox-related files    
kb       # ignore anything as described by .kbignore files          
```

<!-- summarize version = 0.0.9 -->

### End signed statement

<hr>

#### Notes

With keybase you can sign any directory's contents, whether it's a git repo,
source code distribution, or a personal documents folder. It aims to replace the drudgery of:

  1. comparing a zipped file to a detached statement
  2. downloading a public key
  3. confirming it is in fact the author's by reviewing public statements they've made, using it

All in one simple command:

```bash
keybase dir verify
```

There are lots of options, including assertions for automating your checks.

For more info, check out https://keybase.io/docs/command_line/code_signing